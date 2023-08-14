// 建立相關路由和控制器
import express from 'express';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';
import loggerMiddleware from '../middlewares/logger.middleware';
import userValidation from '../validations/user.validation'; // 引入驗證規則

const router = express.Router();

// 使用記錄 Middleware
router.use(loggerMiddleware);

// 2. 設計一個 GET /users API 取得所有使用者的資料
router.get('/users', authMiddleware, userValidation.getAllUsers, UserController.getAllUsers);
// 3. 設計一個 GET /users/{userId} 的 API 取得指定使用者的資料
router.get('/users/:userId', authMiddleware, userValidation.getUserById, UserController.getUserById);
// 4. 設計一個 POST /users/search 的 API，能夠查詢使用者的資料
router.post('/users/search', authMiddleware, userValidation.searchUsers, UserController.searchUsers);

export default router;
