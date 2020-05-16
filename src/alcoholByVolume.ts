/**
 * calculates the alcohol by volume based on the original and final gravity
 * @param {Number} originalGravity original specific gravity value (1.050 for example)
 * @param {Number} finalGravity final specific gravity value (1.015 for example)
 * @returns {Number} the percentage alcohol 
 */
export default function alcoholByVolume(originalGravity : number, finalGravity: number): number {
	const gravityDelta = originalGravity - finalGravity;

	return (76.08 * gravityDelta / (1.775-originalGravity)) * (finalGravity / 0.794);
}