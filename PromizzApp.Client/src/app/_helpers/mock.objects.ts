//import { Promise } from '../promises/shared/promise.model';
import { UserModel } from '../shared/models/user.model';

// User mocks
export const USERS: UserModel[] = [
    { 
        Id: 1, 
        FullName: 'Toni Trajkov', 
        UserName: 'trajkovtoni', 
        Email: 'trajkovtoni@gmail.com', 
        Avatar: 'TT', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '123'
    },
    { 
        Id: 2, 
        FullName: 'Irena Ristovska', 
        UserName: 'irenaristovska', 
        Email: 'ristovskairenna@gmail.com', 
        Avatar: 'IT', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '555'
    },
    { 
        Id: 3, 
        FullName: 'Joe Tyson', 
        UserName: 'tysonjoe', 
        Email: 'tyson@gmail.com', 
        Avatar: 'TJ', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '333'
    },
    { 
        Id: 4, 
        FullName: 'Mike Ribon', 
        UserName: 'mikerib', 
        Email: 'mikerib@gmail.com', 
        Avatar: 'MR', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '222'
    },
    { 
        Id: 5, 
        FullName: 'Eva Lincon', 
        UserName: 'eva', 
        Email: 'eva@gmail.com', 
        Avatar: 'EE', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '111'
    },
    { 
        Id: 6, 
        FullName: 'Simone Klerk', 
        UserName: 'simone', 
        Email: 'simone@gmail.com', 
        Avatar: 'SK', 
        Bio: '', 
        Active: false,
        Token: '',
        Password: 'loo'
    },
    { 
        Id: 7, 
        FullName: 'Adam Sandler', 
        UserName: 'adam', 
        Email: 'adam@gmail.com', 
        Avatar: 'SA', 
        Bio: '', 
        Active: false,
        Token: '',
        Password: 'test'
    },
    { 
        Id: 8, 
        FullName: 'Zack Links', 
        UserName: 'zacklinks', 
        Email: 'zacklinks@gmail.com', 
        Avatar: 'ZL', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: 'avv'
    },
    { 
        Id: 9, 
        FullName: 'Phebee Parker', 
        UserName: 'parker', 
        Email: 'parker@gmail.com', 
        Avatar: 'PP', 
        Bio: '', 
        Active: true,
        Token: '',
        Password: '14r'
    },
    { 
        Id: 10, 
        FullName: 'Rocky Martin', 
        UserName: 'rocky', 
        Email: 'rocky@gmail.com', 
        Avatar: 'RM', 
        Bio: '', 
        Active: false,
        Token: '',
        Password: 'ab1'
    }
];

export const CURRENT_USER: UserModel =     { 
    Id: 1, 
    FullName: 'Toni Trajkov', 
    UserName: 'trajkovtoni', 
    Email: 'trajkovtoni@gmail.com', 
    Avatar: 'TT', 
    Bio: '', 
    Active: true,
    Token: '',
    Password: '123'
};

// Promise mocks
// export const PROMISES: Promise[] = [
//     { Id: 1, Category: 1, Description: '', DueDate: new Date(), Promisee: 'Tony', Promisor: 'Irena', Status: 1, Title: 'Pay date'},
//     { Id: 2, Category: 2, Description: '', DueDate: new Date(), Promisee: 'John', Promisor: 'Carmen', Status: 2, Title: 'Learn Spanish'},
//     { Id: 3, Category: 3, Description: '', DueDate: new Date(), Promisee: 'Irena', Promisor: 'Tony', Status: 1, Title: 'To be a programmer'},
//     { Id: 4, Category: 1, Description: '', DueDate: new Date(), Promisee: 'Eva', Promisor: 'Mark', Status: 3, Title: 'Buy a car'},
//     { Id: 5, Category: 1, Description: '', DueDate: new Date(), Promisee: 'Beth', Promisor: 'Simone', Status: 2, Title: 'Keep a secret'},
//     { Id: 6, Category: 2, Description: '', DueDate: new Date(), Promisee: 'Jack', Promisor: 'Cody', Status: 3, Title: 'Watch movie in cinema'},
//     { Id: 7, Category: 1, Description: '', DueDate: new Date(), Promisee: 'Michael', Promisor: 'Beth', Status: 3, Title: 'Be more productive'},
//     { Id: 8, Category: 3, Description: '', DueDate: new Date(), Promisee: 'Nikky', Promisor: 'Alan', Status: 1, Title: 'Playing FIFA'},
//     { Id: 9, Category: 1, Description: '', DueDate: new Date(), Promisee: 'Serena', Promisor: 'Ralph', Status: 2, Title: 'Learn .Net'},
//     { Id: 10, Category: 2, Description: '', DueDate: new Date(), Promisee: 'Nick', Promisor: 'Philiph', Status: 1, Title: 'No fast food'}
// ];