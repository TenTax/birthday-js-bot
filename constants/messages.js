export const YES = 'да'
export const NO = 'нет'

export const START_NEW_USER_WITH_NAME = (firstName, lastName) => (`
Привет, давай познакомимся! Тебя зовут ${firstName} ${lastName}, верно? \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const START_NEW_USER_WITHOUT_NAME = () => (`
Привет, давай познакомимся! Как тебя зовут? \n
<i>(Отправь ответ в виде <b>Иван Иванов</b>)</i>
`)

export const START_EXISTING_USER_WITH_NAME = (firstName, lastName) => (`
Привет, кажется мы с тобой уже знакомы! Тебя зовут ${firstName} ${lastName}, верно? \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const START_EXISTING_USER_WITHOUT_NAME = () => (`
Привет, кажется мы с тобой уже знакомы, но у меня твоего имени, давай это исправим. Как тебя зовут? \n
<i>(Отправь ответ в виде <b>Иван Иванов</b>)</i>
`)

export const WHEN_INVALID_USERNAME_SPECIFIED = () => (`
Пожалуйста введи имя и фамилию в указанном формате. \n
<i>(Отправь ответ в виде <b>Иван Иванов</b>)</i>
`)

export const WHEN_INVALID_ANSWER_YES_OR_NO = () => (`
Всего лишь нужно ответить да или нет, попробуй еще раз. \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const WHEN_TO_FIX_INVALID_USERNAME = () => (`
Хорошо, давай это исправим. Как тебя зовут? \n
<i>(Отправь ответ в виде <b>Иван Иванов</b>)</i>
`)

export const CONFIRM_ENTERED_USERNAME = (firstName, lastName) => (`
Ок, запомнил! Тебя зовут ${firstName} ${lastName}, все верно? \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const CONTINUE_WITH_BIRTHDAY = (birthDay) => (`
Отлично! Твой день рождения ${birthDay} верно? \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const CONTINUE_WITHOUT_BIRTHDAY = () => (`
Отлично! Когда твой день рождения? \n
<i>(Отправь ответ в виде <b>01.09.1990</b>)</i>
`)

export const WHEN_TO_FIX_INVALID_BIRTHDAY = () => (`
Хорошо, давай это исправим. Когда твой день рождения? \n
<i>(Отправь ответ в виде <b>01.09.1990</b>)</i>
`)

export const WHEN_INVALID_BIRTHDAY_SPECIFIED = () => (`
Пожалуйста введи свой день рождения в указанном формате. \n
<i>(Отправь ответ в виде <b>01.09.1990</b>)</i>
`)

export const CONFIRM_ENTERED_BIRTHDAY = (birthDay) => (`
Ок, запомнил! Твой день рождения ${birthDay}, все верно? \n
<i>(Отправь ответ в виде <b>Да</b> или <b>Нет</b>)</i>
`)

export const FINAL_CONGRATULATIONS = () => (`
Поздравляю! Уведомления настроены. Теперь ты точно ничего не пропустишь.
`)

export const HAPPY_BIRTHDAY_REMINDER = ({ first_name, last_name }) => (`
Сегодня ${first_name} ${last_name} празднует свой день рождения, не забудь поздравить!
`)
