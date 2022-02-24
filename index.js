/**
 * Simple asynchronous sleep function
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} Promise that resolves after `ms`
 */
export default (ms) => new Promise((r) => setTimeout(r, ms));
