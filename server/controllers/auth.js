const axios = require('axios')
const bcrypt =  require('bcrypt')
const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const saltRounds = 10
const signup = (req, res) => {
  const { email, password } = req.body
  console.log("username password", email, password)
  let sql = "INSERT INTO users (email, password) VALUES (?, ?)"

  bcrypt.hash(password, saltRounds, function(err, hash) {
      console.log("hash:", hash)
    sql = mysql.format(sql, [ email, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.send('Sign-up successful')
    })
  })
}


const login = (req, res) => {
    const { username, password } = req.body
  
    axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        grant_type: 'password',
        username: username,
        password: password,
        audience: process.env.AUTH0_IDENTITY,
        connection: 'Username-Password-Authentication',
        scope: 'openid',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET
      }
    })
    .then(response => {
      const { access_token } = response.data
      res.json({
        access_token
      })
    })
    .catch(e => {
      res.send(e)
    })

}

    
    module.exports = {
        signup,
        login
      }