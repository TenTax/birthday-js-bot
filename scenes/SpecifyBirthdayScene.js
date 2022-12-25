import { Scenes } from 'telegraf'

import User from '../models/User.js'
import {
  FINAL_CONGRATULATIONS,
  NO,
  WHEN_INVALID_ANSWER_YES_OR_NO,
  WHEN_TO_FIX_INVALID_BIRTHDAY,
  YES
} from '../constants/messages.js'

const SpecifyBirthdayScene = new Scenes.BaseScene('specify-birthday')

SpecifyBirthdayScene.on('text', async (ctx) => {
  try {
    if (ctx.message.text.toLowerCase().trim() === YES) {
      await User.update({ enable_notifications: 1 }, {
        where: {
          telegram_id: ctx.message.from.id,
          deleted_at: null
        }
      })
      await ctx.replyWithHTML(FINAL_CONGRATULATIONS())
      ctx.scene.leave()
    } else if (ctx.message.text.toLowerCase().trim() === NO) {
      await ctx.replyWithHTML(WHEN_TO_FIX_INVALID_BIRTHDAY())
      ctx.scene.enter('birthday-setup')
    } else {
      await ctx.replyWithHTML(WHEN_INVALID_ANSWER_YES_OR_NO())
      ctx.scene.reenter()
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

SpecifyBirthdayScene.on('message', async (ctx) => {
  await ctx.replyWithHTML(WHEN_INVALID_ANSWER_YES_OR_NO())
  ctx.scene.reenter()
})

export default SpecifyBirthdayScene
