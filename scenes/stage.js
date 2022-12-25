import { Scenes } from 'telegraf'

import StartScene from './StartScene.js'
import UsernameSetupScene from './UsernameSetupScene.js'
import SpecifyUsernameScene from './SpecifyUsernameScene.js'
import BirthdayScene from './BirthdayScene.js'
import BirthdaySetupScene from './BirthdaySetupScene.js'
import SpecifyBirthdayScene from './SpecifyBirthdayScene.js'
import ErrorScene from './ErrorScene.js'

const stage = new Scenes.Stage([
  StartScene,
  BirthdayScene,
  BirthdaySetupScene,
  SpecifyBirthdayScene,
  UsernameSetupScene,
  SpecifyUsernameScene,
  ErrorScene
])

export default stage
