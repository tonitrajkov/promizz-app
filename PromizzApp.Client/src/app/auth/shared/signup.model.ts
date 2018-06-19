export class SignUp {
    public FullName: string = '';
    public UserName: string = '';
    public Email: string = '';

    public constructor(init?:Partial<SignUp>) {
        Object.assign(this, init);
    }
}