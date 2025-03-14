import express from 'express';
import { reviewModel } from '../models/reviewModel.js';

export const reviewController = express.Router();

reviewController.get('/review', async (req, res) => {
    // reviewModel.findall()
});

reviewController.get('/review/id:([0-9]*)', async (req, res) => {
    // reviewModel.findOne()
});

reviewController.post('/review', async (req, res) => {
    // reviewModel.create()
});

reviewController.put('/review/id:([0-9]*)', async (req, res) => {
    // reviewModel.update()
});

reviewController.delete('/review/id:([0-9]*)', async (req, res) => {
    // reviewModel.destroy()
});