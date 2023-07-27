export default function translateDate(date: Date) {
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());
    return `${year}/${month.length === 1 ? `0${month}` : month}/${
        day.length === 1 ? `0${day}` : day
    }`;
}
