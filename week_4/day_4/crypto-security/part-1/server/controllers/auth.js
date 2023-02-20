const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password, users[i].password)){
          let userToReturn = {...users[i]}
          delete userToReturn.password
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        // users.push(req.body)
        // res.status(200).send(req.body)
        const { username, email, firstName, lastName, password,} = req.body
        
        const salt = bcrypt.genSaltSync(5)
        const passwordHash = bcrypt.hashSync(password, salt)
        

        let userObj = {
          password: passwordHash,
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName
          
        }
        users.push(userObj)
        let userToReturn = {...userObj}
        delete userToReturn.password
        res.status(200).send(userToReturn)
        }
    }


