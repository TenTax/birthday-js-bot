import { Scenes } from 'telegraf'
import { DateTime } from 'luxon'

import User from '../models/User.js'
import { CONFIRM_ENTERED_BIRTHDAY, WHEN_INVALID_BIRTHDAY_SPECIFIED } from '../constants/messages.js'

const BirthdaySetupScene = new Scenes.BaseScene('birthday-setup')

BirthdaySetupScene.on('text', async (ctx) => {
  try {
    const date = DateTime.fromFormat(ctx.message.text.trim(), 'dd.LL.yyyy')

    if (date.invalid) {
      ctx.replyWithHTML(WHEN_INVALID_BIRTHDAY_SPECIFIED())
      ctx.scene.reenter()
    } else {
      await User.update({ birth_day: date.toISODate() }, {
        where: {
          telegram_id: ctx.message.from.id,
          deleted_at: null,
        }
      })
      await ctx.replyWithHTML(CONFIRM_ENTERED_BIRTHDAY(date.toFormat('dd.LL.yyyy')))
      ctx.scene.enter('specify-birthday')
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

BirthdaySetupScene.on('message', async (ctx) => {
  await ctx.reply(WHEN_INVALID_BIRTHDAY_SPECIFIED())
  ctx.scene.reenter()
})

export default BirthdaySetupScene
