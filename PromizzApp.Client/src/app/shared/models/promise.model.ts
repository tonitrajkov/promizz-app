import { LookupItem, UserModel, TagItem } from '../.';

export class PromiseModel {
    public Id: number;
    public UserId: number;
    public Title: string = '';
    public Description: string = '';
    public State: LookupItem<number>;
    public Color: string = '';
    public EndDate: Date;
    public Promisee: UserModel;
    public Tags: TagItem[];

    public constructor(init?: Partial<PromiseModel>) {
        Object.assign(this, init);
    }
}

export class PromiseAddModel {
    public Title: string = '';
    public Description: string = '';
    public Promisees: Array<number>;
    public Color: string = '';
    public EndDate: Date;

    public constructor(init?: Partial<PromiseAddModel>) {
        Object.assign(this, init);
    }
}
