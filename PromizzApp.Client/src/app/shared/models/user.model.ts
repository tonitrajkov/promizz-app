export class UserModel {
    public Id: number = 0;
    public FullName: string = '';
    public UserName: string = '';
    public Email: string = '';
    public Avatar: string = '';
    public Bio: string = '';
    public Active: boolean = true;
    public Password: string = '';
    public Token: string = '';

    public constructor(init?:Partial<UserModel>) {
        Object.assign(this, init);
    }
}