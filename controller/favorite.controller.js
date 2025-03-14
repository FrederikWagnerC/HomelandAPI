import express from 'express';
import { favoriteModel } from '../models/favoriteModel.js';

export const favoriteController = express.Router();

favoriteController.get('/favorite', async (req, res) => {
    // favoriteModel.findall()
});

favoriteController.get('/favorite/id:([0-9]*)', async (req, res) => {
    // favoriteModel.findOne()
});

favoriteController.post('/favorite', async (req, res) => {
    // favoriteModel.create()
});

favoriteController.put('/favorite/id:([0-9]*)', async (req, res) => {
    // favoriteModel.update()
});

favoriteController.delete('/favorite/id:([0-9]*)', async (req, res) => {
    // favoriteModel.destroy()
});