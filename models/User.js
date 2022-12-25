
import { DataTypes } from 'sequelize'
import sequelize from '../database/sequelize.js'

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING
  },
  birth_day: {
    type: DataTypes.DATE
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  deleted_at: {
    type: DataTypes.DATE
  },
  telegram_id: {
    type: DataTypes.BIGINT.UNSIGNED
  },
  telegram_first_name: {
    type: DataTypes.STRING
  },
  telegram_last_name: {
    type: DataTypes.STRING
  },
  telegram_username: {
    type: DataTypes.STRING
  },
  enable_notifications: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
}, {
  tableName: 'konstantindorokhov_birthday_users',
  underscored: true,
  timestamps: true,
})

export default User
