import { UserModel } from '../models/user.model';

class UserService {
    getAllUsers() {
        return UserModel.getAll();
    }

    getUserById(userId: number) {
        return UserModel.getById(userId);
    }

    searchUsers(sort: string, name: string) {
        return UserModel.search(sort, name);
    }
}

export default new UserService();
