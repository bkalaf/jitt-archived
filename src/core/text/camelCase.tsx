import { capitalize } from './capitalize';

export function camelCase(s: string) {
    const [h, ...t] = capitalize(s).split('');
    return [h.toLowerCase(), ...t].join('').split(' ').join('');
}
