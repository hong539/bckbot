import { random, round, shuffleArray } from "@app/utils";
import { SlashApplicationCommand } from "@class/ApplicationCommand";
import { LApplicationCommandOptionData } from "@class/ApplicationCommandOptionData";
import { LInteractionReplyOptions } from "@localizer/InteractionReplyOptions";
import { ChatInputCommandInteraction } from "discord.js";

class Command extends SlashApplicationCommand {
	public options: LApplicationCommandOptionData[] = [
		{
			name: "choices",
			type: "String",
			required: true
		}
	];

	public async onCommand(interaction: ChatInputCommandInteraction): Promise<LInteractionReplyOptions> {
		const argv = interaction.options.getString("choices", true).split(" ").filter((v: string, i: number, a: string[]) => a.indexOf(v) === i);

		if (argv.length < 2) {
			return {
				content: {
					key: "choice.notEnoughChoices"
				}
			};
		}

		const last = argv.pop()!;
		shuffleArray(argv);

		let pMax = 1;
		interface Option {
			name: string,
			p: number;
		}

		const o: Option[] = [];

		for (const i in argv) {
			const p = random(0, pMax * 100000) / 100000;
			o.push({ name: argv[i], p });
			pMax = pMax - p;
		}
		o.push({ name: last, p: pMax });

		return {
			content: {
				key: "choice.result",
				data: {
					result: o.sort((a: Option, b: Option) => {
						return b.p - a.p;
					}).map((a: Option) => {
						return a.name + " (" + round(a.p * 100, 3) + "%)";
					}).join(" ")
				}
			}
		};
	}
};

export const choice = new Command({
	name: "choice"
});