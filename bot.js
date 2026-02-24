const { Client, GatewayIntentBits, Partials, PermissionFlagsBits } = require('discord.js');
const { QuickDB } = require("quick.db");
require('dotenv').config();

const db = new QuickDB();
const PREFIX = process.env.PREFIX || "!";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers
    ],
    partials: [Partials.Message, Partials.Reaction, Partials.User],
});

client.on('ready', () => {
    console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'setup') {
        if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply("Only admins can do this!");
        }

        const msgID = args[0];
        const emoji = args[1];
        const role = message.mentions.roles.first();

        if (!msgID || !emoji || !role) {
            return message.reply("Usage: !setup [MessageID] [Emoji] [@Role]");
        }

        // Role hierarchy check
        if (role.position >= message.guild.members.me.roles.highest.position) {
            return message.reply("That role is higher than the bot role.");
        }

        const emojiKey = emoji.includes(":")
            ? emoji.split(":")[2].replace(">", "")
            : emoji;

        await db.set(
            `reactions_${message.guild.id}_${msgID}_${emojiKey}`,
        );

        message.reply(`Linked ${emoji} → ${role.name}`);
    }
});

// REACTION ADD
client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;
    if (reaction.partial) await reaction.fetch();

    const emojiKey = reaction.emoji.id || reaction.emoji.name;

    const roleId = await db.get(
        `reactions_${reaction.message.guild.id}_${reaction.message.id}_${emojiKey}`
    );

    if (!roleId) return;

    const member = await reaction.message.guild.members.fetch(user.id);
    const role = reaction.message.guild.roles.cache.get(roleId);

    if (member && role) {
        await member.roles.add(role).catch(() => null);
    }
});

// REACTION REMOVE

client.login(process.env.DISCORD_TOKEN);

