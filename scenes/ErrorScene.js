import { Scenes } from 'telegraf'

const ErrorScene = new Scenes.BaseScene('error')

ErrorScene.enter(async (ctx) => {
  await ctx.reply('Произошла ошибка, извините, повторите попытку позже. Чтобы пробовать снова напишите /start')
  ctx.scene.leave()
})

export default ErrorScene
