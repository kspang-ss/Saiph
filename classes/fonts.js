/**
 * @class Fonts
 * @description A class to manage Google Fonts integration. Called in menu.js.
 * @param {array} font_fields - An array of select elements where font options will be appended.
 */
class Fonts {
    constructor(font_fields = []) {
        this.google_fonts_api_key = 'AIzaSyAuHZt4e-DNYGHIqNYmjbycu-PBepjNqGA';
        this.font_fields = font_fields;
        this.append_font_field_options();
    }

    /**
     * Get All Google Fonts
     * @description Fetches all Google Fonts using the Google Fonts API.
     * @returns {Promise<array>} - A promise that resolves to an array of font objects.
     */
    async get_all_google_fonts() {
        try {
            const response = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${this.google_fonts_api_key}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.items;
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    /**
     * Get Fallback Fonts
     * @description Returns a fallback font based on the font category.
     * @param {string} category - The font category (e.g., 'serif', 'sans-serif', 'monospace', etc.).
     * @returns {Promise<string>} - A promise that resolves to a fallback font string.
     */
    async get_fallback_fonts(category) {
        switch (category) {
            case 'serif':
                return 'serif';
            case 'sans-serif':
                return 'sans-serif';
            case 'monospace':
                return 'monospace';
            case 'display':
                return 'sans-serif';
            case 'handwriting':
                return 'cursive';
            default:
                return 'sans-serif';
        }   
    }

    /**
     * Append Font Field Options
     * @description Appends font options to all select elements in font_fields.
     * @returns {Promise<void>}
     */
    async append_font_field_options() {
        const fonts = await this.get_all_google_fonts();    
        if (!fonts) return;
        for (const font of fonts) {
            const option = document.createElement('option');
            option.value = '"' + font.family + '"'
            if (font.category !== undefined) {
                option.value += ', ' + await this.get_fallback_fonts(font.category);
            }
            option.textContent = font.family;
            if (this.font_fields.length > 0) {
                for (let i = 0; i < this.font_fields.length; i++) {
                    this.font_fields[i].appendChild(option.cloneNode(true));
                }
            }
        }
    }

    /**
     * Append Head Link
     * @description Appends a link element to the document head to load the selected Google Font.
     * @param {string} font_family - The font family to load (e.g., "Roboto").
     * @param {string} location - A unique identifier for the link element (e.g., "header", "body").
     * @returns {void}
     */
    append_head_link(font_family, location) {   
        const header_link_element = document.querySelector('[data-google-fonts-' + location + ']');
        if (header_link_element) {
            header_link_element.remove();
        }
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${font_family}`;
        link.rel = 'stylesheet';
        link.setAttribute('data-google-fonts-' + location, '');
        document.head.appendChild(link);
    }
}

// Example of the JSON structure returned by the Google Fonts API
// {
//     "family": "Amiri Quran",
//     "variants": [
//         "regular"
//     ],
//     "subsets": [
//         "arabic",
//         "latin"
//     ],
//     "version": "v17",
//     "lastModified": "2025-03-03",
//     "files": {
//         "regular": "https://fonts.gstatic.com/s/amiriquran/v17/_Xmo-Hk0rD6DbUL4_vH8Zq5t7Cycsu-2.ttf"
//     },
//     "category": "serif",
//     "kind": "webfonts#webfont",
//     "menu": "https://fonts.gstatic.com/s/amiriquran/v17/_Xmo-Hk0rD6DbUL4_vH8Zp5s5ig.ttf",
//     "colorCapabilities": [
//         "COLRv0",
//         "SVG"
//     ]
// }