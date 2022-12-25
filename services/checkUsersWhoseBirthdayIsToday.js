import { DateTime } from 'luxon'

import notifyAllUsersExcludeOne from './notifyAllUsersExcludeOne.js'
import User from '../models/User.js'
import { HAPPY_BIRTHDAY_REMINDER } from '../constants/messages.js'

const checkBirthDay = (currentDate, birthDayDate) => {
  return (
    currentDate.month === birthDayDate.month &&
    currentDate.day === birthDayDate.day
  )
}

const checkUsersWhoseBirthdayIsToday = async () => {
  try {
    const users = await User.findAll({ where: { deleted_at: null } })
    
    users.forEach(user => {
      const currentDate = DateTime.local()
      const birthDayDate = DateTime.fromISO(user.birth_day)

      if (checkBirthDay(currentDate, birthDayDate)) {
        notifyAllUsersExcludeOne(users, user, HAPPY_BIRTHDAY_REMINDER(user))
      }
    })
  } catch (error) {
    console.log('error', error)
  }
}

export default checkUsersWhoseBirthdayIsToday
