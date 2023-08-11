/**
 * Clamps a value between a minimum and maximum number.
 *
 * @function
 * @param {number} value - The number to clamp.
 * @param {number} min - The value it can't go under.
 * @param {number} max - The value it can't go above.
 * @returns {number} The clamped value.
 */
export default function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}
