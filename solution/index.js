import express from 'express';
import cookieParser from 'cookie-parser';

import postRoutes from './src/features/post/routes/post.routes.js';
import userRoutes from './src/features/user/routes/user.routes.js';
import likeRoutes from './src/features/like/routes/like.routes.js'
import commentRoutes from './src/features/comment/routes/comment.routes.js';
import { errorHandlerMiddleware } from './src/middlewares/errorHandler.js';
import { invalidRoutesHandlerMiddleware } from './src/middlewares/invalidRoutes.middleware.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import jwtAuth from './src/middlewares/jwtAuth.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

// Logger middleware
app.use(loggerMiddleware);

// Routes for post, user, like, comments
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);
app.use('/api/like', jwtAuth, likeRoutes);
app.use('/api/comment', jwtAuth, commentRoutes);

// Invalid Routes Middleware
app.use(invalidRoutesHandlerMiddleware);

// App level Error Handler
app.use(errorHandlerMiddleware);

export default app;
