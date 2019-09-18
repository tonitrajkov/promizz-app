import { PromiseModel, UserModel } from '../shared';

// User mocks
export const USERS: UserModel[] = [{
    Id: 1,
    Firstname: 'Nathan',
    Lastname: 'Fox',
    Fullname: 'Nathan Fox',
    Initials: 'NF',
    UserName: 'nathanfox',
    Email: 'nathanfox@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-07.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 2,
    Firstname: 'Priscilla',
    Lastname: 'James',
    Fullname: 'Priscilla James',
    Initials: 'PJ',
    UserName: 'priscillajames',
    Email: 'priscillajames@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-08.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 3,
    Firstname: 'Jenet',
    Lastname: 'White',
    Fullname: 'Jenet White',
    Initials: 'JW',
    UserName: 'jenetwhite',
    Email: 'jenetwhite@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-09.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 4,
    Firstname: 'John',
    Lastname: 'Smith',
    Fullname: 'John Smith',
    Initials: 'JS',
    UserName: 'johnsmith',
    Email: 'johnsmith@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-11.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 5,
    Firstname: 'Tony',
    Lastname: 'Nicole',
    Fullname: 'Tony Nicole',
    Initials: 'TN',
    UserName: 'tonynicole',
    Email: 'tonynicole@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-12.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 6,
    Firstname: 'Vanesa',
    Lastname: 'Sinclar',
    Fullname: 'Vanesa Sinclar',
    Initials: 'VS',
    UserName: 'vanesasinclar',
    Email: 'vanesasinclar@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-10.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 7,
    Firstname: 'Adam',
    Lastname: 'Young',
    Fullname: 'Adam Young',
    Initials: 'AY',
    UserName: 'adamyoung',
    Email: 'adamyoung@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-06.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 8,
    Firstname: 'Valerie',
    Lastname: 'Berg',
    Fullname: 'Valerie Berg',
    Initials: 'VB',
    UserName: 'valerieberg',
    Email: 'valerieberg@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-13.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 9,
    Firstname: 'Joshua',
    Lastname: 'Gordon',
    Fullname: 'Joshua Gordon',
    Initials: 'JG',
    UserName: 'joshuagordon',
    Email: 'joshuagordon@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-04.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 9,
    Firstname: 'Anthony',
    Lastname: 'Jones',
    Fullname: 'Anthony Jones',
    Initials: 'AJ',
    UserName: 'anthonyjones',
    Email: 'anthonyjones@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-01.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 10,
    Firstname: 'Isabel',
    Lastname: 'Holmes',
    Fullname: 'Isabel Holmes',
    Initials: 'IH',
    UserName: 'isabelholmes',
    Email: 'isabelholmes@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-15.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
},
{
    Id: 11,
    Firstname: 'Emily',
    Lastname: 'Lawrence',
    Fullname: 'Emily Lawrence',
    Initials: 'EL',
    UserName: 'emilylawrence',
    Email: 'emilylawrence@mail.com',
    Avatar: '../../../assets/images/avatars/avatar-03.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
}];

export const CURRENT_USER: UserModel = {
    Id: 12,
    Firstname: 'Ashton',
    Lastname: 'Colon',
    Fullname: 'Ashton Colon',
    Initials: 'AC',
    UserName: 'ashtoncolon',
    Email: 'ashtoncolon@gmail.com',
    Avatar: '../../../assets/images/avatars/avatar-14.png',
    Bio: '',
    Active: true,
    Token: '',
    Password: ''
};

export const PROMISES: PromiseModel[] = [{
    Id: 1,
    UserId: 12,
    Title: 'I will buy you a pizza',
    Description: '',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#65901C',
    EndDate: new Date(),
    Promisee: {
        Id: 1,
        Firstname: 'Nathan',
        Lastname: 'Fox',
        Fullname: 'Nathan Fox',
        Initials: 'NF',
        UserName: 'nathanfox',
        Email: 'nathanfox@mail.com',
        Avatar: '../../../assets/images/avatars/avatar-07.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 2,
    UserId: 12,
    Title: 'I promise to clean my desk tomorrow',
    Description: 'You know, my desk is always a big mess. So I will clean tomorrow.',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#F49423',
    EndDate: new Date(),
    Promisee: {
        Id: 2,
        Firstname: 'Priscilla',
        Lastname: 'James',
        Fullname: 'Priscilla James',
        Initials: 'PJ',
        UserName: 'priscillajames',
        Email: 'priscillajames@mail.com',
        Avatar: '../../../assets/images/avatars/avatar-08.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 3,
    UserId: 3,
    Title: 'I promise you I will learn how to cook',
    Description: 'Cooking is always challenge for me. I will finally learn how to do it.',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#A43C44',
    EndDate: new Date(),
    Promisee: {
        Id: 12,
        Firstname: 'Ashton',
        Lastname: 'Colon',
        Fullname: 'Ashton Colon',
        Initials: 'AC',
        UserName: 'ashtoncolon',
        Email: 'ashtoncolon@gmail.com',
        Avatar: '../../../assets/images/avatars/avatar-14.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 4,
    UserId: 12,
    Title: 'I will keep runing untill end of the month',
    Description: 'I must stay in the better shape.',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#FB3B3D',
    EndDate: new Date(),
    Promisee: {
        Id: 12,
        Firstname: 'Ashton',
        Lastname: 'Colon',
        Fullname: 'Ashton Colon',
        Initials: 'AC',
        UserName: 'ashtoncolon',
        Email: 'ashtoncolon@gmail.com',
        Avatar: '../../../assets/images/avatars/avatar-14.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 5,
    UserId: 12,
    Title: 'I will keep your dog this Friday',
    Description: 'It will be my pleasure to keep your dog, because I love him so much',
    State: {
        Key: 3,
        Value: 'Completed',
        IsSelected: false
    },
    Color: '#B6DC92',
    EndDate: new Date(),
    Promisee: {
        Id: 6,
        Firstname: 'Vanesa',
        Lastname: 'Sinclar',
        Fullname: 'Vanesa Sinclar',
        Initials: 'VS',
        UserName: 'vanesasinclar',
        Email: 'vanesasinclar@mail.com',
        Avatar: '../../../assets/images/avatars/avatar-10.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 6,
    UserId: 4,
    Title: 'I promise you, I will work for you this Tuesday',
    Description: '',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#1BB7F8',
    EndDate: new Date(),
    Promisee: {
        Id: 12,
        Firstname: 'Ashton',
        Lastname: 'Colon',
        Fullname: 'Ashton Colon',
        Initials: 'AC',
        UserName: 'ashtoncolon',
        Email: 'ashtoncolon@gmail.com',
        Avatar: '../../../assets/images/avatars/avatar-14.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 7,
    UserId: 12,
    Title: 'I will wait you at the train station',
    Description: '',
    State: {
        Key: 3,
        Value: 'Completed',
        IsSelected: false
    },
    Color: '#FBDCA7',
    EndDate: new Date(),
    Promisee: {
        Id: 6,
        Firstname: 'Vanesa',
        Lastname: 'Sinclar',
        Fullname: 'Vanesa Sinclar',
        Initials: 'VS',
        UserName: 'vanesasinclar',
        Email: 'vanesasinclar@mail.com',
        Avatar: '../../../assets/images/avatars/avatar-10.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: []
},
{
    Id: 8,
    UserId: 12,
    Title: 'I promise to never lie to you again',
    Description: '',
    State: {
        Key: 2,
        Value: 'In progress',
        IsSelected: false
    },
    Color: '#D15A92',
    EndDate: new Date(),
    Promisee: {
        Id: 8,
        Firstname: 'Valerie',
        Lastname: 'Berg',
        Fullname: 'Valerie Berg',
        Initials: 'VB',
        UserName: 'valerieberg',
        Email: 'valerieberg@mail.com',
        Avatar: '../../../assets/images/avatars/avatar-13.png',
        Bio: '',
        Active: true,
        Token: '',
        Password: ''
    },
    Tags: [{
        Id: 1,
        Name: 'Work',
        Color: '#F1DC66'
    },
    {
        Id: 2,
        Name: 'Sun',
        Color: '#B6DC92'
    }]
}
];
