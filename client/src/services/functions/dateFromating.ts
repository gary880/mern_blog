export function convertDate(date: string) {
    const newDate = new Date(date);
    if (isNaN(newDate.getTime()) || date === "") {
        return "";
    }
    return newDate.toDateString().split(" ").slice(1).join(" ");
}