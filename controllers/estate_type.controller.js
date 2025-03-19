import express from 'express';
import { errorResponse, successResponse } from '../utils/response.utils.js';
import { getQueryAttributes, getQueryLimit, getQueryOrder } from '../utils/API.utils.js';
import { estateTypeModel as model } from '../models/estate_type.model.js';

export const estateTypeController = express.Router();
const url = 'estate_types';

estateTypeController.get(`/${url}`, async (req, res) => {
    try {
        const list = await model.findAll({
            attributes: getQueryAttributes(req.query, 'id, name'),
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

estateTypeController.get(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        let details = await model.findByPk(id);
        if (!details) return errorResponse(res, `Record not found`, 404);
        successResponse(res, details);
    } catch (error) {
        errorResponse(res, `Error fetching record details: ${error.message}`);
    }
});

estateTypeController.post(`/${url}`, async (req, res) => {
    try {
        const data = req.body;
        const result = await model.create(data);
        successResponse(res, result, `Record created successfully`, 201);
    } catch (error) {
        errorResponse(res, `Error creating record: ${error.message}`);
    }
});

estateTypeController.put(`/${url}/:id([0-9]+)`, async (req, res) => {
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

estateTypeController.delete(`/${url}/:id([0-9]+)`, async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await model.destroy({ where: { id } });
        if (!deleted) return errorResponse(res, `No record found with ID: ${id}`, 404);
        successResponse(res, null, `Record deleted successfully`);
    } catch (error) {
        errorResponse(res, `Error deleting record: ${error.message}`);
    }
});