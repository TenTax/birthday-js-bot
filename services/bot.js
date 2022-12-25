import { session, Telegraf } from 'telegraf'
import * as dotenv from 'dotenv'

import stage from '../scenes/stage.js'

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(session())
bot.use(stage.middleware())

export default bot
