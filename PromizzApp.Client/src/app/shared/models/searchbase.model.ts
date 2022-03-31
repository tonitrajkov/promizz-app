export class SearchBaseModel {
    public PageNumber: number = 0;
    public PageSize: number = 15;
    public TotalElements: number = 0;
    public TotalPages: number = 0;
    public OrderBy: string = '';
    public OrderDir: string = 'asc';
    public SearchText: string = '';

    public constructor(init?: Partial<SearchBaseModel>) {
        Object.assign(this, init);
    }
}

export class SearchResult<T> {
    public data: Array<T>;
}
