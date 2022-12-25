import bot from './bot.js'

const notifyAllUsersExcludeOne = (users, excludedUser, message) => {
  users.forEach(user => {
    if (user.id !== excludedUser.id && user.enable_notifications) {
      bot.telegram.sendMessage(user.telegram_id, message)
    }
  })
}

export default notifyAllUsersExcludeOne
