import express from 'express';
import { userModel } from '../models/userModel.js';

export const userController = express.Router();

userController.get('/user', async (req, res) => {
    // userModel.findall()
});

userController.get('/user/id:([0-9]*)', async (req, res) => {
    // userModel.findOne()
});

userController.post('/user', async (req, res) => {
    // userModel.create()
});

userController.put('/user/id:([0-9]*)', async (req, res) => {
    // userModel.update()
});

userController.delete('/user/id:([0-9]*)', async (req, res) => {
    // userModel.destroy()
});