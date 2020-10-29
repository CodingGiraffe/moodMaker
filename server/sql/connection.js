const mysql = require('mysql')
require('dotenv').config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'den1.mysql6.gear.host',
        user: 'moodmakerdb',
        password: 'Pw449s_204~T',
        database: 'moodmakerdb',
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;