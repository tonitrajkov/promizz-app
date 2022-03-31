import { LookupItem } from "../../shared";

export const PromiseViewFilter: LookupItem<number> [] = [
    {
        Key: 1,
        Value: 'All promises',
        IsSelected: true
    },
    {
        Key: 2,
        Value: 'Promises to me',
        IsSelected: false
    },
    {
        Key: 3,
        Value: 'Promises by me',
        IsSelected: false
    }
];
