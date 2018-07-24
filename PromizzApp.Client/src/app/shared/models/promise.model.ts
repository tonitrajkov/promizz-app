export class PromiseModel {
    public Id: number;
    public Title: string = '';
    public Description: string = '';
    public StateId: number;
    public OwnerId: number;
    public Color: string = '';
    public EndDate: Date;
  
    public constructor(init?:Partial<PromiseModel>) {
        Object.assign(this, init);
    }
}