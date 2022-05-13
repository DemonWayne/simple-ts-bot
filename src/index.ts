import { DISCORD_TOKEN } from './env';
import { Client, Guild } from 'discord.js';

const client = new Client({ intents: ['GUILDS'] });

const main = async () => {
	try {
		console.info('Logging in...');
		await client.login(DISCORD_TOKEN);
	} catch (error) {
		console.error(error);
		client.destroy();
		process.exit(1);
	}
};

main();

client.once('ready', (client: Client) => {
	console.info(`Bot started and authorized as ${client.user!.tag}!`)
	console.info(`Bot total guilds: ${client.guilds.cache.size}, Total members: ${client.guilds.cache.reduce((acc, guild: Guild) => acc + guild.memberCount, 0)}`)
})
