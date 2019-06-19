export class UserModel {
    public Id: number = 0;
    public Firstname: string = '';
    public Lastname: string = '';
    public UserName: string = '';
    public Fullname: string = '';
    public Initials: string = '';
    public Email: string = '';
    public Avatar: string = '';
    public Bio: string = '';
    public Active: boolean = true;
    public Password: string = '';
    public Token: string = '';

    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}
