export default interface IDataType<Kind, T> {
    _type: Kind;
    value: T;
}
