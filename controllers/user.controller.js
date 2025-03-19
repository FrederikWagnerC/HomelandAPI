import express from 'express';
import { userModel as model } from '../models/user.model.js';
import { errorResponse, successResponse } from '../utils/response.utils.js';
import { Authorize } from '../utils/auth.utils.js';
import { getQueryAttributes, getQueryOrder } from '../utils/API.utils.js';

export const userController = express.Router();
const url = 'users';

userController.get(`/${url}`, Authorize, async (req, res) => {
    try {
        const list = await model.findAll({
            attributes: getQueryAttributes(req.query, 'firstname'),
            order: getQueryOrder(req.query)
        });

        if (!list || list.length === 0) {
            return errorResponse(res, `No users found`, 404);
        }

        successResponse(res, list);
    } catch (error) {
        errorResponse(res, `Error fetching users: ${error.message}`);
    }
});

userController.get(`/${url}/:id([0-9]+)`, Authorize, async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

        let details = await model.findByPk(id, {
            attributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'createdAt', 'updatedAt']
        });

        if (!details) return errorResponse(res, `User not found`, 404);

        successResponse(res, details);
    } catch (error) {
        errorResponse(res, `Error fetching User details: ${error.message}`);
    }
});

userController.post(`/${url}`, Authorize, async (req, res) => {
    try {
        const data = req.body;
        const result = await model.create(data);
        successResponse(res, result, `User created successfully`, 201);
    } catch (error) {
        errorResponse(res, `Error creating user`, error);
    }
});

userController.put(`/${url}/:id([0-9]+)`, Authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { firstname, lastname, email, refresh_token, is_active } = req.body;
        const [updated] = await model.update({
            firstname, lastname, email, refresh_token, is_active
        }, {
            where: { id }
        });
        if (!updated) return errorResponse(res, `No user found with ID: ${id}`, 404);
        successResponse(res, { id }, `User updated successfully`);
    } catch (error) {
        errorResponse(res, `Error updating user: ${error}`);
    }
});

userController.patch(`/${url}/:id([0-9]+)`, Authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const { password, confirmPassword } = req.body;
        if (!password) {
            return errorResponse(res, `Password is required`, 400);
        }
        if (confirmPassword && password !== confirmPassword) {
            return errorResponse(res, `Passwords do not match`, 400);
        }

        const [updated] = await model.update({ password }, {
            where: { id },
            individualHooks: true
        });

        if (!updated) return errorResponse(res, `No user found with ID: ${id}`, 404);
        successResponse(res, { id }, `Password updated successfully`);
    } catch (error) {
        errorResponse(res, `Error updating user: ${error}`);
    }
});

userController.delete(`/${url}/:id([0-9]+)`, Authorize, async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await model.destroy({ where: { id } });

        if (!deleted) return errorResponse(res, `No user found with ID: ${id}`, 404);

        successResponse(res, null, `User deleted successfully`);
    } catch (error) {
        errorResponse(res, `Error deleting user: ${error.message}`);
    }
});