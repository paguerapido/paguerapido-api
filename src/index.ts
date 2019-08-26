import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import helmet from 'helmet'

import ioMiddleware from './middlewares/io'
import authMiddleware from './middlewares/auth'
import apolloMiddleware from './middlewares/apollo'

import authRouter from './routes/auth'

const app = express()

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/app'

app.use(helmet())
app.use(morgan('dev'))

ioMiddleware.set(app)
authMiddleware.set(app)
apolloMiddleware.set(app)

app.use('/auth', authRouter)

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on https://localhost:${PORT}`)
    })
  })
  .catch(e => {
    console.error('Failed to obtain a connection to MongoDB')
    console.error(e)
    process.exit(1)
  })
