import express from 'express';
import { energyLabelModel } from '../models/energyLabelModel.js';

export const energyLabelController = express.Router();

energyLabelController.get('/energy_label', async (req, res) => {
    // energyLabelModel.findall()
});

energyLabelController.get('/energy_label/id:([0-9]*)', async (req, res) => {
    // energyLabelModel.findOne()
});

energyLabelController.post('/energy_label', async (req, res) => {
    // energyLabelModel.create()
});

energyLabelController.put('/energy_label/id:([0-9]*)', async (req, res) => {
    // energyLabelModel.update()
});

energyLabelController.delete('/energy_label/id:([0-9]*)', async (req, res) => {
    // energyLabelModel.destroy()
});