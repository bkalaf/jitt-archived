import { capitalizeWord } from './capitalizeWord';

export function capitalize(s: string) {
    return s.split(' ').map(capitalizeWord).join(' ');
}
