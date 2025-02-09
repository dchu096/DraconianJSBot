const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	const settings = require("../../settings.json");
	const prefixesdatabase = client.settings.ensure(message.guild.id, settings);

	const helpArray = message.content.split(" ");
	const helpArgs = helpArray.slice(1);

	if (!helpArgs[0]) {
		const embed = new Discord.MessageEmbed()
			.setAuthor(
				`${client.user.username} Commands list`,
				client.user.displayAvatarURL()
			)
			.setColor("GREEN")
			.setDescription(
				`**My prefix:** \`${prefixesdatabase.prefix}\`\nClick [here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) to invite me to your server.`
			)
			.addField("**📱Basic**", "`info`, `help`, `ping`, `vote`, `uptime`")
			.addField(
				"**⚙utility**",
				"`aes256`, `avatar`, `channel`, `embed`, `roleinfo`, `reverse`, `setafk`, `snipe`, `stats`, `timer`, `translate`, `whois`, `weather`, `youtube`"
			)
			.addField(
				"**🎃Fun**",
				"`8ball`, `cat`, `deaes256`, `kiss`, `meme`, `ngif`, `pat`, `poke`, `smug`, `thigh`, `tickle`"
			)
			.addField(
				"**:tada:Giveaways**",
				"`start-giveaway`, `reroll`, `end-giveaway`"
			)
			.addField(
				"**:frame_photo:Image**",
				"`captcha`, `circle`, `delete`, `gay`, `changemymind`, `trigger`, `clyde`, `petpet`, `magik`, `iphonex`"
			)
			.addField(
				"**:musical_note:Music**",
				"`play`, `stop`, `skip`, `queue`, `autoplay`, `loop`, `volume`, `pause`, `resume`"
			)
			.addField(
				"**🛠️Moderation**",
				"`addrole`, `ban`, `clear`, `clearwarn`, `createchannel`, `createemoji`, `kick`, `lockchannel`, `mute`, `rename`, `slowmode`, `unban`, `unlockchannel`, `unmute`, `warn`, `warnings`"
			)
			.addField(
				"**:underage:NSFW**",
				"`4knsfw`, `anal`, `ass`, `hentai`, `holo`, `pussy`, `porn`, `urban`"
			)
			.addField("**:gear:Custom Function**", "`setprefix`")
			.setFooter(
				`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
			);
		message.channel.send({ embed });
	}

	if (helpArgs[0]) {
		let command = helpArgs[0];

		if (client.commands.has(command)) {
			command = client.commands.get(command);
			let alia = command.help.aliases;
			if (command.help.aliases < 1) alia = "No aliases";

			const embed = new Discord.MessageEmbed()
				.setAuthor(
					`Command: ${command.help.name}`,
					client.user.displayAvatarURL()
				)
				.setDescription(
					`
            **Description:**\n\`\`\`${
							command.help.description ||
							"There is no Description for this command."
						}\`\`\`\n**Usage:**\n\`\`\`${
						command.help.usage || "No Usage"
					}\`\`\`\n**Permissions:**\n\`\`\`${
						command.help.accessableby || "Members"
					}\`\`\`\n**Aliases:**\n\`\`\`${alia}\`\`\``
				)
				.setColor("#4a4b4d")
				.setFooter(
					`© ${nowyear} ${client.user.username} | This command requested by ${message.author.username}#${message.author.discriminator}`
				);

			message.channel.send(embed);
		} else {
			const embeds = new Discord.MessageEmbed()
				.setDescription(`${emojis.cross} Command is not found!`)
				.setColor("RED");

			return message.channel.send(embeds);
		}
	}
};

module.exports.help = {
	name: "help",
	description: "This command is used for displaying all commands.",
	usage: "d!help",
	accessableby: "Members",
	aliases: [],
};
