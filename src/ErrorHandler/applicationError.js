export class ApplicationError extends Error {
    constructor(error, code) {
        super(error);
        this.code = code;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}
