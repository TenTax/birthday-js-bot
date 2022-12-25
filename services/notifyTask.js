import cron from 'node-cron'

import checkUsersWhoseBirthdayIsToday from './checkUsersWhoseBirthdayIsToday.js'

const notifyTask = (schedule = '0 9 */1 * *') => {
  return cron.schedule(schedule, checkUsersWhoseBirthdayIsToday)
}

export default notifyTask
