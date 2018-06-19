export class Credentials {
    public Email: string = '';
    public Password: string = '';

    public constructor(init?:Partial<Credentials>) {
        Object.assign(this, init);
    }
}
