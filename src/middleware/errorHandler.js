function errorHandler(err, req, res, next) {
    const officialEmail = process.env.OFFICIAL_EMAIL || 'arsh0383.be23@chitkara.edu.in';

    console.error('Error:', err.message);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        is_success: false,
        official_email: officialEmail,
        error: err.message
    });
}

module.exports = errorHandler;
