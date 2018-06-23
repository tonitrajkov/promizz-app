export class PromiseModel {
    public Id: string = '';
    public Title: string = '';
    public Description: string = '';
    public Creator: string = '';

    public constructor(init?:Partial<PromiseModel>) {
        Object.assign(this, init);
    }
}