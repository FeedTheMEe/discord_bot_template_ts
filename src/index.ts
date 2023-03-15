import { Client, GatewayIntentBits } from "discord.js"
import * as dotenv from "dotenv"

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
})

client.on('ready', () => {
    console.log(`${client.user.username} at your service!`)
})

dotenv.config()

client.login(process.env.DISCORD_BOT_TOKEN)