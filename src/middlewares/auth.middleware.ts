import { Request, Response, NextFunction } from 'express';

// 5. 設計一個驗證用的 Middleware 來限制以上 API 的存取
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers['authorization'];
    if (authToken !== 'auth-token') {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
};

export default authMiddleware;
