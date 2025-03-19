import express from 'express'
import cors from 'cors'
import { dbController } from './controllers/db.controller.js';
import { userController } from './controllers/user.controller.js';
import { cityController } from './controllers/city.controller.js';
import { reviewController } from './controllers/review.controller.js';
import { estateController } from './controllers/estate.controller.js';
import { favoriteController } from './controllers/favorite.controller.js';
import { staffController } from './controllers/staff.controller.js';
import { authController } from './controllers/auth.controller.js';

// Express Route Settings
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Route for root
app.get('/', (req, res) => {
    res.send('Hello world')
})

// Use controllers
app.use(
    cityController,
    dbController
)

// 404 route - skal være sidst!
app.get('*', (req, res) => {
    res.send('404 - kunne ikke finde siden')
})

// Server settings
app.listen(4242, () => {
    console.log(`Server kører på adressen http://localhost:4242`)
})