import { DateTime } from 'luxon'
import { Scenes } from 'telegraf'
import { CONTINUE_WITHOUT_BIRTHDAY, CONTINUE_WITH_BIRTHDAY } from '../constants/messages.js'

import User from '../models/User.js'

const BirthdayScene = new Scenes.BaseScene('birthday')

BirthdayScene.enter(async (ctx) => {
  try {
    const user = await User.findOne({ where: {
      telegram_id: ctx.message.from.id,
      deleted_at: null
    }})

    if (user.birth_day) {
      const date = DateTime.fromISO(user.birth_day).toFormat('dd.LL.yyyy')
      await ctx.replyWithHTML(CONTINUE_WITH_BIRTHDAY(date))
      ctx.scene.enter('specify-birthday')
    } else {
      await ctx.replyWithHTML(CONTINUE_WITHOUT_BIRTHDAY())
      ctx.scene.enter('birthday-setup')
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

export default BirthdayScene
