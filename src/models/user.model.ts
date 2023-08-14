export class UserModel {
    private static users = [{
        id: 1,
        name: 'jack',
    }, {
        id: 2,
        name: 'bob',
    }, {
        id: 3,
        name: 'emily',
    }, {
        id: 4,
        name: 'robin',
    }];

    public static getAll() {
        return this.users;
    }
}
