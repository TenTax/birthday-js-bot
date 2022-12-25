import { Scenes } from 'telegraf'

import { NO, WHEN_INVALID_ANSWER_YES_OR_NO, WHEN_TO_FIX_INVALID_USERNAME, YES } from '../constants/messages.js'

const SpecifyUsernameScene = new Scenes.BaseScene('specify-username')

SpecifyUsernameScene.on('text', async (ctx) => {
  try {
    if (ctx.message.text.toLowerCase().trim() === YES) {
      ctx.scene.enter('birthday')
    } else if (ctx.message.text.toLowerCase().trim() === NO) {
      await ctx.replyWithHTML(WHEN_TO_FIX_INVALID_USERNAME())
      ctx.scene.enter('username-setup')
    } else {
      await ctx.replyWithHTML(WHEN_INVALID_ANSWER_YES_OR_NO())
      ctx.scene.reenter()
    }
  } catch (error) {
    ctx.scene.enter('error')
  }
})

SpecifyUsernameScene.on('message', async (ctx) => {
  await ctx.replyWithHTML(WHEN_INVALID_ANSWER_YES_OR_NO())
  ctx.scene.reenter()
})

export default SpecifyUsernameScene
