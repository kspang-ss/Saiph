/**
 * @class Sizes
 * @description A class to handle responsive sizes using CSS clamp function.
 * @param {number} max_viewport_width - The maximum viewport width in pixels. 
 * @param {number} min_viewport_width - The minimum viewport width in pixels.
 */
class Sizes extends Tools { 
    constructor(
        max_viewport_width = 1500,
        min_viewport_width = 300,
    ) {
        super();
        this.max_viewport_width = parseInt(max_viewport_width);
        this.min_viewport_width = parseInt(min_viewport_width);
        this.sidebar_width = 30; // rem
    }

    /**
     * PX to REM
     * @description Converts pixels to rem units based on a root font size of 16px.
     * @param {number} px_value - The pixel value to convert.
     * @returns {number} - The equivalent value in rem units.
     */
    get_size(px_value) {
        const Ms = this.px_to_rem(px_value);
        if (Ms > 1) {
            const mv = this.px_to_rem(this.min_viewport_width) + this.sidebar_width; // compensate for app sidebar
            const Mv = this.px_to_rem(this.max_viewport_width) + this.sidebar_width; // compensate for app sidebar
            const ms = this.log_compressor(this.px_to_rem(px_value));
            return this.calculate_clamp(ms, Ms, mv, Mv);
        } else {
            return Ms + 'rem';
        }
    }
}