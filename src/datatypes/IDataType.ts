export interface IDataType<Kind, T> {
    _type: Kind;
    value: T;
}
