import { Router } from 'express'
import UserModel from '../models/User'
import * as jwt from 'jsonwebtoken'

const router = Router()
const secret = process.env.JWT_SECRET || 'not-secret'

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await UserModel.findOne({ username })
  if (user && (await user.comparePassword(password))) {
    const token = jwt.sign(user.toJSON(), secret)
    res.json({ user, token })
  }
})

export default router
