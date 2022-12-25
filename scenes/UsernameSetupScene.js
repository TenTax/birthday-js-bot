import { Scenes } from 'telegraf'

import User from '../models/User.js'
import { CONFIRM_ENTERED_USERNAME, WHEN_INVALID_USERNAME_SPECIFIED } from '../constants/messages.js'

const UsernameSetupScene = new Scenes.BaseScene('username-setup')

UsernameSetupScene.on('text', async (ctx) => {
  try {
    const [first_name, last_name] = ctx.message.text.trim().split(' ')

    if (first_name && last_name) {
      await User.update({ first_name, last_name }, {
        where: {
          telegram_id: ctx.message.from.id,
          deleted_at: null,
        }
      })
      await ctx.replyWithHTML(CONFIRM_ENTERED_USERNAME(first_name, last_name))
      ctx.scene.enter('specify-username')
    } else {
      await ctx.replyWithHTML(WHEN_INVALID_USERNAME_SPECIFIED())
      ctx.scene.reenter()
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

UsernameSetupScene.on('message', async (ctx) => {
  await ctx.replyWithHTML(WHEN_INVALID_USERNAME_SPECIFIED())
  ctx.scene.reenter()
})

export default UsernameSetupScene
