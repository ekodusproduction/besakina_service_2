import winston from "winston";

// Configure the logger with multiple transports and enhanced error handling
export const logger = winston.createLogger({
    level: 'info', // Set the default log level
    format: winston.format.combine(
        winston.format.timestamp(), // Add a timestamp to each log entry
        winston.format.errors({ stack: true }), // Capture stack traces for errors
        winston.format.splat(), // Enable log message formatting
        winston.format.json() // Use JSON format for easy parsing
    ),
    defaultMeta: { service: 'request-logging' }, // Add a default meta field for each log
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), // Colorize console output for easier reading
                winston.format.simple() // Log in a simple format for console
            ),
        }),
        new winston.transports.File({ filename: 'logs.txt' }) // Log to a file
    ],
    exceptionHandlers: [
        new winston.transports.Console(), // Print uncaught exceptions to console
        new winston.transports.File({ filename: 'exceptions.log' }) // Log uncaught exceptions to file
    ],
    rejectionHandlers: [
        new winston.transports.Console(), // Print unhandled promise rejections to console
        new winston.transports.File({ filename: 'rejections.log' }) // Log unhandled promise rejections to file
    ]
});

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Optional: Terminate process after logging the error
    process.exit(1);
});

// Handle uncaught exceptions globally
process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception:', err);
    // Optional: Terminate process after logging the error
    process.exit(1);
});
