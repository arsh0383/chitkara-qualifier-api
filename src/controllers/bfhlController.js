const { calculateFibonacci, filterPrimes, calculateLCM, calculateHCF } = require('../utils/mathUtils');
const { getAIAnswer } = require('../utils/aiUtils');

const officialEmail = process.env.OFFICIAL_EMAIL || 'arsh0383.be23@chitkara.edu.in';

async function handleBfhl(req, res, next) {
    try {
        const body = req.body;
        const keys = Object.keys(body);

        if (keys.length === 0) {
            const error = new Error('Request body cannot be empty');
            error.statusCode = 400;
            return next(error);
        }

        if (keys.length > 1) {
            const error = new Error('Only one operation allowed per request');
            error.statusCode = 400;
            return next(error);
        }

        const operation = keys[0];
        const value = body[operation];

        let result;

        switch (operation) {
            case 'fibonacci':
                if (!Number.isInteger(value)) {
                    const error = new Error('Fibonacci input must be an integer');
                    error.statusCode = 400;
                    return next(error);
                }
                if (value < 0) {
                    const error = new Error('Fibonacci input must be non-negative');
                    error.statusCode = 400;
                    return next(error);
                }
                result = calculateFibonacci(value);
                break;

            case 'prime':
                if (!Array.isArray(value)) {
                    const error = new Error('Prime input must be an array');
                    error.statusCode = 400;
                    return next(error);
                }
                if (value.length === 0) {
                    const error = new Error('Prime array cannot be empty');
                    error.statusCode = 400;
                    return next(error);
                }
                result = filterPrimes(value);
                break;

            case 'lcm':
                if (!Array.isArray(value)) {
                    const error = new Error('LCM input must be an array');
                    error.statusCode = 400;
                    return next(error);
                }
                if (value.length === 0) {
                    const error = new Error('LCM array cannot be empty');
                    error.statusCode = 400;
                    return next(error);
                }
                result = calculateLCM(value);
                break;

            case 'hcf':
                if (!Array.isArray(value)) {
                    const error = new Error('HCF input must be an array');
                    error.statusCode = 400;
                    return next(error);
                }
                if (value.length === 0) {
                    const error = new Error('HCF array cannot be empty');
                    error.statusCode = 400;
                    return next(error);
                }
                result = calculateHCF(value);
                break;

            case 'AI':
                if (typeof value !== 'string') {
                    const error = new Error('AI input must be a string');
                    error.statusCode = 400;
                    return next(error);
                }
                if (value.trim() === '') {
                    const error = new Error('AI question cannot be empty');
                    error.statusCode = 400;
                    return next(error);
                }
                result = await getAIAnswer(value);
                break;

            default:
                const error = new Error('Invalid operation. Allowed: fibonacci, prime, lcm, hcf, AI');
                error.statusCode = 400;
                return next(error);
        }

        res.status(200).json({
            is_success: true,
            official_email: officialEmail,
            data: result
        });

    } catch (error) {
        error.statusCode = error.statusCode || 500;
        next(error);
    }
}

function handleHealth(req, res) {
    res.status(200).json({
        is_success: true,
        official_email: officialEmail
    });
}

module.exports = { handleBfhl, handleHealth };
