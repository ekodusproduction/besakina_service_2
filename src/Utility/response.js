export const sendResponse = async (res, message, http_status_code, data = null, token = null) => {
    return res.status(http_status_code).send({
        "message": message,
        "http_status_code": http_status_code,
        "success": true,
        "data": data,
        "token": token
    });
};


export const sendError = async (res, message, http_status_code, data = null) => {
    return res.status(http_status_code).send({
        "message": message,
        "http_status_code": http_status_code,
        "success": false,
        "data": data,
        "token": null
    })
}