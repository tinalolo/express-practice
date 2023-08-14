export class UserModel {
    // 使用者資料
    private static users = [
        {
            id: 1,
            name: 'jack',
        },
        {
            id: 2,
            name: 'bob',
        },
        {
            id: 3,
            name: 'emily',
        },
        {
            id: 4,
            name: 'robin',
        },
    ];

    public static getAll() {
        return this.users;
    }

    public static getById(userId: number) {
        return this.users.find((user) => user.id === userId);
    }

    public static search(sort: string, name: string) {
        let users = UserModel.users;

        // 過濾使用者的名稱
        if (name) {
            const keyword = name.toLowerCase();
            users = users.filter((user) => user.name.toLowerCase().includes(keyword));
        }

        // 排序使用者 ID
        if (sort && (sort === 'asc' || sort === 'desc')) {
            users.sort((userA, userB) => {
                if (sort === 'asc') {
                    return userA.id - userB.id;
                } else {
                    return userB.id - userA.id;
                }
            });
        }

        return users;
    }
}
