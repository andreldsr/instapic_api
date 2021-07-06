import cors from 'cors';

const corsOptions = {
    origin: process.env.CORS_ORIGIN || '*'
}

export default cors(corsOptions)