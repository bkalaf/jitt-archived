export function composeR<T, U, V>(f: (x: T) => U, g: (x: U) => V) {
    return (item: T) => {
        return g(f(item));
    };
}
