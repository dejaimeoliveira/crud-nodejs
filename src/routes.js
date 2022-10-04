const { Router } = require('express')

const UserController = require('./controller/UserController')

const router = Router()

router.get('/', (req, res) => {
  res.json({ Hello: 'World.' })
})

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list', UserController.listUsers)
router.delete('/user-delete/:id', UserController.deleteUser)

module.exports = router