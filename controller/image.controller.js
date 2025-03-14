import express from 'express';
import { imageModel } from '../models/imageModel.js';

export const imageController = express.Router();

imageController.get('/image', async (req, res) => {
    // imageModel.findall()
});

imageController.get('/image/id:([0-9]*)', async (req, res) => {
    // imageModel.findOne()
});

imageController.post('/image', async (req, res) => {
    // imageModel.create()
});

imageController.put('/image/id:([0-9]*)', async (req, res) => {
    // imageModel.update()
});

imageController.delete('/image/id:([0-9]*)', async (req, res) => {
    // imageModel.destroy()
});