export function uuidv4(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
      let random = Math.random() * 16 | 0; 
      let value = char === "x" ? random : (random % 4 + 8); 
      return value.toString(16);
    });
}

export type GUID = IDataType<'GUID', string>;

export function createGUID(): GUID {
    return {
        _type: 'GUID',
        value: uuidv4()
    }
}

interface IDataType<Kind, T> {
    _type: Kind;
    value: T;
}
function compareDataTypes<T, U extends T>(dt1: IDataType<string, T>, dt2: IDataType<string, U>) {
    return dt1._type === dt2._type && dt1.value === dt2.value;
}
