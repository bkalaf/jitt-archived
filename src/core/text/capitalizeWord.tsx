export function capitalizeWord(s: string) {
    const [h, ...t] = s.split('');
    return [h.toUpperCase(), ...t].join('');
}
