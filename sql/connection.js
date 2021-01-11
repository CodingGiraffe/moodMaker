const mysql = require('mysql');
require('dotenv').config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...');
      this.pool = mysql.createPool({
        connectionLimit: 1000,
        connectTimeout: 60 * 60 * 1000,
        acquireTimeout: 60 * 60 * 1000,
        timeout: 60 * 60 * 1000,
        host: 'den1.mysql6.gear.host',
        user: 'moodmakerdb',
        password: process.env.DB_PWORD,
        database: 'moodmakerdb',
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
