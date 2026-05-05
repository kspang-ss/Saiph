/**
 * @class Typography
 * @description A class to manage typography settings and generate responsive font sizes using CSS clamp.
 * @param {number} font_body_size - The base font size in pixels (default is 16).
 * @param {string} font_scale - The scale multiplier key (default is 'md').
 * @param {number} max_viewport_width - The maximum viewport width in pixels (default is 1500).
 * @param {number} min_viewport_width - The minimum viewport width in pixels (default is 300).
 */
class Typography extends Tools { 
    constructor(
        font_body_size = 16,
        font_scale = 'md',
        max_viewport_width = 1500,
        min_viewport_width = 300,
    ) {
        super();
        this.multiplier_map = { // Set default values
            'xs': 1.067,
            'sm': 1.125,
            'md': 1.200,
            'lg': 1.250,
            'xl': 1.333,
            '2xl': 1.414,
            '3xl': 1.500,
            '4xl': 1.618,
        };
        this.font_types = { // [min_value, max_value, css_clamp]
            'small': [0, 0, ''],
            'p': [0, 0, ''],
            'h6': [0, 0, ''],
            'h5': [0, 0, ''],
            'h4': [0, 0, ''],
            'h3': [0, 0, ''],
            'h2': [0, 0, ''],
            'h1': [0, 0, ''],
        };
        this.font_body_size = parseInt(font_body_size);
        this.font_scale = font_scale;
        this.font_multiplier = this.multiplier_map[font_scale];
        this.max_viewport_width = parseInt(max_viewport_width);
        this.min_viewport_width = parseInt(min_viewport_width);
        this.sidebar_width = 30; // rem

        // Run
        this.update_font_types();
    }
    

    /**
     * Update Font Types
     * @description Updates the font sizes for different text elements (small, p, h1-h6) based on the base font size, scale multiplier, and viewport widths.
     * The sizes are calculated using a logarithmic compression for the minimum size and a linear scale for the maximum size, and are formatted as CSS clamp functions.
     * @returns {void}
     */
    update_font_types() {
        let b = this.px_to_rem(this.font_body_size); // buffer
        const m = this.font_multiplier;
        const mv = this.px_to_rem(this.min_viewport_width) + this.sidebar_width; // compensate for app sidebar
        const Mv = this.px_to_rem(this.max_viewport_width) + this.sidebar_width; // compensate for app sidebar
        this.font_types['small'] = this.round((b / m)) + 'rem';
        this.font_types['p'] = this.round((b)) + 'rem';
        b = this.round((b * m));
        for (let i = 6; i >= 1; i--) {
            const ms = this.log_compressor(b), Ms = b;
            if (Ms > 1) {
                this.font_types['h' + i] = this.calculate_clamp(ms, Ms, mv, Mv);
            } else {
                this.font_types['h' + i] = Ms;
            }
            b = this.round((b * m));
        }
    }

}
