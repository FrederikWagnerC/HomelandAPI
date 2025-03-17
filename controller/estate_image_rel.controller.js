import express from 'express';
import { errorResponse, successResponse } from '../utils/responseUtils.js';
import { getQueryAttributes, getQueryLimit, getQueryOrder } from '../utils/apiUtils.js';
import { estateImageRelModel as model } from '../models/estateImageRelModel.js';

export const estateImageRelController = express.Router();
const url = 'estate_image_rel';

estateImageRelController.get(`/${url}`, async (req, res) => {
    try {
        const list = await model.findAll({
            attributes: getQueryAttributes(req.query, 'id, estate_id, image_id, is_main'),
            limit: getQueryLimit(req.query),
            order: getQueryOrder(req.query)
        });
        if (!list || list.length === 0) {
            return errorResponse(res, `No records found`, 404);
        }
        successResponse(res, list);
    } catch (error) {
        errorResponse(res, `Error fetching records: ${error.message}`);
    }
});

estateImageRelController.get(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        let details = await model.findByPk(id);
        if (!details) return errorResponse(res, `Record not found`, 404);
        successResponse(res, details);
    } catch (error) {
        errorResponse(res, `Error fetching record details: ${error.message}`);
    }
});

estateImageRelController.post(`/${url}`, async (req, res) => {
    try {
        const data = req.body;
        const result = await model.create(data);
        successResponse(res, result, `Record created successfully`, 201);
    } catch (error) {
        errorResponse(res, `Error creating record: ${error.message}`);
    }
});

estateImageRelController.put(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const [updated] = await model.update(data, {
            where: { id },
            individualHooks: true
        });
        if (!updated) return errorResponse(res, `No record found with ID: ${id}`, 404);
        successResponse(res, { id, ...data }, `Record updated successfully`);
    } catch (error) {
        errorResponse(res, `Error updating record: ${error.message}`);
    }
});

estateImageRelController.delete(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await model.destroy({ where: { id } });
        if (!deleted) return errorResponse(res, `No record found with ID: ${id}`, 404);
        successResponse(res, null, `Record deleted successfully`);
    } catch (error) {
        errorResponse(res, `Error deleting record: ${error.message}`);
    }
});