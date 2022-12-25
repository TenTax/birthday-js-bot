import bot from './services/bot.js'
import notifyTask from './services/notifyTask.js'

// Обработчик запуска бота
bot.start(ctx => ctx.scene.enter('start'))

// Запуск бота
bot.launch()

// Запуск проверки дней рождений по расписанию
notifyTask('0 9 */1 * *').start()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
