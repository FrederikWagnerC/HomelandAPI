import express from 'express';
import { errorResponse, successResponse } from '../utils/response.utils.js';
import { getQueryAttributes, getQueryLimit, getQueryOrder } from '../utils/API.utils.js';
import { cityModel as model } from '../models/city.model.js';

export const cityController = express.Router();
const url = 'cities';

cityController.get(`/${url}`, async (req, res) => {
    try {
        const list = await model.findAll({
            attributes: getQueryAttributes(req.query, 'id, name'),
            limit: getQueryLimit(req.query),
            order: getQueryOrder(req.query),
        });
        if (!list || list.length === 0) {
            return errorResponse(res, `No records found`, 404);
        }
        successResponse(res, list);
    } catch (error) {
        errorResponse(res, `Error fetching records: ${error.message}`);
    }
});

cityController.get(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        let details = await model.findByPk(id);
        if (!details) return errorResponse(res, `Record not found`, 404);
        successResponse(res, details);
    } catch (error) {
        errorResponse(res, `Error fetching record details: ${error.message}`);
    }
});