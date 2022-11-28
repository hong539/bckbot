import { LocalizableMessageOptions } from "@localizer/MessageOptions"
import { Message } from "discord.js"

export interface StealthModuleActionArgument {
	message: Message,
	matches?: RegExpMatchArray
};

export interface StealthModule {
	name: string,
	event: "messageCreate" | "messageDelete" | "messageUpdate",
	pattern?: RegExp,
	action: (obj: StealthModuleActionArgument) => Promise<boolean | {
		type: "reply" | "send",
		result: LocalizableMessageOptions
	}>,
	onTimeout?: (message: Message) => Promise<LocalizableMessageOptions>
};