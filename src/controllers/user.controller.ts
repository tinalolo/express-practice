import { Request, Response } from 'express';
import UserService from '../services/user.service';

// 設計 Controller
const UserController = {
    getAllUsers: (req: Request, res: Response) => {
        const users = UserService.getAllUsers();
        res.json(users);
    },
    getUserById: (req: Request, res: Response) => {
        const userId = parseInt(req.params.userId);
        const user = UserService.getUserById(userId);
        res.json(user);
    },
    searchUsers: (req: Request, res: Response) => {
        const { sort, name } = req.body;
        const users = UserService.searchUsers(sort, name);
        res.json(users);
    },
};

export default UserController;
