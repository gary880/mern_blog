export function convertDate(date: string) {
    const newDate = new Date(date);
    return newDate.toDateString().split(" ").slice(1).join(" ");
}