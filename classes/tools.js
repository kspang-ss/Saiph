/**
 * @class Tools
 * @description A utility class providing methods for rounding numbers, converting pixels to rem units, calculating CSS clamp functions, and logarithmic compression.
 */
class Tools {

    /**
     * Round to 3 decimal places
     * @param {float} value
     */
    round(value) {
        return Math.round(value * 1000) / 1000;
    }

    /**
     * Convert px to rem
     * @param {int} value in px 
     * @returns {float} value in rem
     */
    px_to_rem(px) {
        return this.round((px / 16));
    }

    /**
     * Calculate css clamp function  
     * @param {int} min_value 
     * @param {int} max_value 
     * @param {int} min_viewport 
     * @param {int} max_viewport 
     * @returns {string} 
     */
    calculate_clamp(min_value, max_value, min_viewport, max_viewport) {
        const slope = (max_value - min_value) / (max_viewport - min_viewport);
        const y_intercept = (-1 * min_viewport) * slope + min_value;

        const m = min_value;
        const M = max_value;
        const S = this.round((slope * 100));
        const B = this.round(y_intercept);

        return `clamp(${m}rem, ${B}rem + ${S}vw, ${M}rem)`;
    }

    /**
     * Calculate mobile size using logarithmic compression
     * @param {number} value in rem
     * @returns {number} compressed value in rem
     */
    log_compressor(value) {
        if (value < 0) {
            return 0;
        }
        return this.round(Math.log2(value + 1));
    }

}