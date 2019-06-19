import { UserModel } from '../shared/models/user.model';

// User mocks
export const USERS: UserModel[] = [];

export const CURRENT_USER: UserModel = {
    Id: 1,
    Firstname: 'Toni',
    Lastname: 'Trajkov',
    Fullname: 'Toni Trajkov',
    Initials: 'TT',
    UserName: 'trajkovtoni',
    Email: 'trajkovtoni@gmail.com',
    Avatar: 'TT',
    Bio: '',
    Active: true,
    Token: '',
    Password: '123'
};
