const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*',
    exposedHeaders: ['X-Access-Token']
}

export default corsOptions