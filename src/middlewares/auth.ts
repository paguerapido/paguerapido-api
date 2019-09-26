import { Application } from 'express'
import passport from 'passport'
import { Strategy } from 'passport-local'

import UserModel, { UserDocument } from '../models/User'

passport.use(
  new Strategy(async (username: string, password: string, done) => {
    let user: UserDocument | null = null

    try {
      user = await UserModel.findOne({ username }).exec()
    } catch (e) {
      done(e)
      return
    }

    if (!user) {
      done(null, false, { message: 'Incorrect username' })
      return
    }

    if (!(await user.comparePassword(password))) {
      done(null, false, { message: 'Incorrect password' })
      return
    }

    return done(null, user)
  })
)

passport.serializeUser((user: UserDocument, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
  let user = null

  try {
    user = await UserModel.findOne({ _id: id })
      .lean()
      .exec()
  } catch (e) {
    done(e)
    return
  }

  done(null, user)
})

export default {
  set: (app: Application) => {
    app.use(passport.initialize())
  },
}
