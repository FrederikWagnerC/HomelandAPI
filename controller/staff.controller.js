import express from 'express';
import { staffModel } from '../models/staffModel.js';

export const staffController = express.Router();

staffController.get('/staff', async (req, res) => {
    // staffModel.findall()
});

staffController.get('/staff/id:([0-9]*)', async (req, res) => {
    // staffModel.findOne()
});

staffController.post('/staff', async (req, res) => {
    // staffModel.create()
});

staffController.put('/staff/id:([0-9]*)', async (req, res) => {
    // staffModel.update()
});

staffController.delete('/staff/id:([0-9]*)', async (req, res) => {
    // staffModel.destroy()
});