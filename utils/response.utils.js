export const successResponse = (res, data, message = "Success", statusCode = 200) => {
    const response = { message };
    if (data) { 
        response.data = data;
    }
    res.status(statusCode).json(response);
};

export const errorResponse = (res, message = "Internal Server Error", error = {}, statusCode = 500) => {    
    let obj_error = { message: message }
    if (error.name === "SequelizeValidationError") {
        obj_error.sequlize_validation_errors = error.errors.map(err => ({
            field: err.path,
            message: err.message
        }));
    }
    res.status(statusCode).json(obj_error);
};