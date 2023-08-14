import { Request, Response, NextFunction } from 'express';

// 6. 設計一個記錄用的 Middleware 紀錄 Request 的資訊
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const now = new Date();
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
    next();
};

export default loggerMiddleware;
