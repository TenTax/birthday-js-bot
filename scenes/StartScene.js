import { Scenes } from 'telegraf'

import User from '../models/User.js'
import clearObject from '../helpers/clearObject.js'
import {
  START_NEW_USER_WITH_NAME,
  START_NEW_USER_WITHOUT_NAME,
  START_EXISTING_USER_WITH_NAME,
  START_EXISTING_USER_WITHOUT_NAME
} from '../constants/messages.js'

const StartScene = new Scenes.BaseScene('start')

StartScene.enter(async (ctx) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        telegram_id: ctx.message.from.id,
        deleted_at: null,
      },
      defaults: clearObject({
        first_name: ctx.message.from.first_name,
        last_name: ctx.message.from.last_name,
        telegram_first_name: ctx.message.from.first_name,
        telegram_last_name: ctx.message.from.last_name,
        telegram_username: ctx.message.from.username,
      }),
    })
  
    if (created) {
      if (user.first_name && user.last_name) {
        await ctx.replyWithHTML(START_NEW_USER_WITH_NAME(user.first_name, user.last_name))
        ctx.scene.enter('specify-username')
      } else {
        await ctx.replyWithHTML(START_NEW_USER_WITHOUT_NAME())
        ctx.scene.enter('username-setup')
      }
    } else {
      if (user.first_name && user.last_name) {
        await ctx.replyWithHTML(START_EXISTING_USER_WITH_NAME(user.first_name, user.last_name))
        ctx.scene.enter('specify-username')
      } else {
        await ctx.replyWithHTML(START_EXISTING_USER_WITHOUT_NAME())
        ctx.scene.enter('username-setup')
      }
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

export default StartScene
