import express from 'express';
import { estateTypeModel } from '../models/estateTypeModel.js';

export const estateTypeController = express.Router();

estateTypeController.get('/estate_type', async (req, res) => {
    // estateTypeModel.findall()
});

estateTypeController.get('/estate_type/id:([0-9]*)', async (req, res) => {
    // estateTypeModel.findOne()
});

estateTypeController.post('/estate_type', async (req, res) => {
    // estateTypeModel.create()
});

estateTypeController.put('/estate_type/id:([0-9]*)', async (req, res) => {
    // estateTypeModel.update()
});

estateTypeController.delete('/estate_type/id:([0-9]*)', async (req, res) => {
    // estateTypeModel.destroy()
});