export function leftpad(s: string, n: number, char: string = " "): string {
    const count = (n - s.length);
    return (count > 0)
        ? char.repeat(count) + s
        : s;
}

export function shortDate(d: Date): string {
    return `${d.getFullYear()}/${leftpad((d.getMonth() + 1).toString(), 2, "0")}/${leftpad((d.getDate() + 1).toString(), 2, "0")}`;
}