import { Command } from "@type/Command";

export const command: Command = {
	defer: false,
	name: "ping",
	onCommand: async (interaction) => {
		throw "uwu";
		
		return {
			content: "uwu"
		};
	}
};