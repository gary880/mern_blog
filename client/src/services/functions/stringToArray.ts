

export function stringToArray(str: string) {
    if (str === "") return [];
    return str.split(",") as string[];
}
