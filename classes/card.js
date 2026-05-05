/**
 * @class Card
 * @description creating reusable card components for use in the library preview.
 * @param {string} slug - The unique identifier for the header, footer, component or layout (E.g., "components_typography_h1").
 * @param {string} title - The display title of the card (e.g., "Heading 1").
 * @param {array} tags (optional) - An array of tags associated with the card for filtering purposes (e.g., ["typography", "header", "h1"]).
 * @param {string} thumbnail (optional) - The filename of the thumbnail image for the card (e.g., "components_typography_h1.jpg").
 * @param {array} column_classes (optional) - An array of classes to create a column layout preview (e.g., ["basis-50-50", "basis-50-50"]).
 * @param {number} size (optional) - A number reprensting the spacer size, it is used to create a spacer preview (e.g., 4).
 */

class Card {
    constructor(slug, title, tags, thumbnail, column_classes = [], size = 0) {
        this.slug = slug;
        this.title = title;
        this.tags = this.sanitize_tags(tags);
        this.tags_string = this.tags.join(', ');
        (thumbnail) ? this.thumbnail_path = 'assets/library_thumbnails/' + thumbnail : this.thumbnail_path = null;
        this.html = '';
        this.column_classes = column_classes;
        this.size = size;
        this.set_html();
    }

    /**
     * Sanitize Tags
     * @description Sanitizes an array of tag strings by replacing spaces with hyphens and converting to lowercase.
     * @param {array} tags - An array of tag strings. 
     * @returns {array} - An array of sanitized tag strings.
     */
    sanitize_tags(tags) {
        if (Array.isArray(tags)) {
            return tags.map(tag => tag.replace(/\s+/g, '-').toLowerCase());
        }
        return [];
    }

    /**
     * Set HTML
     * @description Generates the HTML structure for the card and assigns it to the html property.
     * @return {void}
     */
    set_html() {
        let html = '';
        html = '<div class="saiph__card" data-filter-tags="' + this.tags_string + '" draggable="true" data-drag="' + this.slug + '">';
            html += '<div class="saiph__h2 saiph__card_title">' + this.title + '</div>';
            html += '<div class="saiph__card_tags saiph__flex_center">';
                if (this.tags.length > 0) {
                    for (const tag of this.tags) {
                        html += '<span class="saiph__tag saiph__tag_' + tag + '">' + tag + '</span>';
                    }
                }
            html += '</div>';
            html += '<div class="saiph__card_image">';
                if (this.thumbnail_path) {
                    html += '<img src="' + this.thumbnail_path + '" alt="' + this.title + '" draggable="false">';
                } else if (this.size > 0) {
                    const height = (this.size * 0.825) * 10;
                    html += '<div style="width: 100%; margin-left: var(--saiph-size-sm); margin-right: var(--saiph-size-sm); border-radius: var(--saiph-radius); background-color: #f8f8f8; height: ' + height + '%"></div>';
                } else if (this.column_classes.length > 0) {
                    html += '<div style="display: flex; width: 100%; height: 100%; gap: var(--saiph-size-sm);">';
                    for (const col_class of this.column_classes) {
                        html += '<div class="' + col_class + '" style="background-color: #f8f8f8; border-radius: var(--saiph-radius);"></div>';
                    }
                    html += '</div>';
                }
            html += '</div>';
            html += '<div class="saiph__card_code saiph__flex_center saiph__flex_justify">';
                html += '<div class="saiph__code">';
                    html += '<code>' + this.slug + '</code>';
                html += '</div>';
                html += '<button class="saiph__button saiph__flex_center saiph__card_copy" data-copy="copy_' + this.slug + '">';
                    html += '<input type="text" class="saiph__hidden" data-copy-text="copy_' + this.slug + '" value="' + this.slug + '">';
                    html += '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>';
                html += '</button>';
            html += '</div>';
        html += '</div>';
        this.html = html;
    }

}