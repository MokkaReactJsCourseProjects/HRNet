/**
 * Translates a Date object into a formatted string in the format "YYYY/MM/DD".
 *
 * @function
 * @param {Date} date - The date to be translated.
 * @returns {string} The translated date string in "YYYY/MM/DD" format.
 */
export default function translateDate(date: Date): string {
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    const year = String(date.getFullYear());
    return `${year}/${month.length === 1 ? `0${month}` : month}/${
        day.length === 1 ? `0${day}` : day
    }`;
}
