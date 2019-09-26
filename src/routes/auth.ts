import { Router } from 'express'
import { authenticate } from 'passport'
import { jsonwebtoken as jwt } from 'jsonwebtoken'

const router = Router()
const secret = "muitosegredocaralho" // store this at an enviroment variable

router.post('/login', authenticate('local'), (req, res) => {
  const user = req.user
  const token = jwt.sign(user, secret)
  res.json({ user, token })
})

router.post('/logout', (req, res) => {
  req.logout()
  res.json({ ok: true })
})

export default router
