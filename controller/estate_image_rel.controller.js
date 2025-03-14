import express from 'express';
import { estateImageRelModel } from '../models/estateImageRelModel.js';

export const estateImageRelController = express.Router();

estateImageRelController.get('/estate_image_rel', async (req, res) => {
    // estateImageRelModel.findall()
});

estateImageRelController.get('/estate_image_rel/id:([0-9]*)', async (req, res) => {
    // estateImageRelModel.findOne()
});

estateImageRelController.post('/estate_image_rel', async (req, res) => {
    // estateImageRelModel.create()
});

estateImageRelController.put('/estate_image_rel/id:([0-9]*)', async (req, res) => {
    // estateImageRelModel.update()
});

estateImageRelController.delete('/estate_image_rel/id:([0-9]*)', async (req, res) => {
    // estateImageRelModel.destroy()
});