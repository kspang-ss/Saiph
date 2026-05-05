/**
 * @class Filter
 * @description Class for rendering filter options and handling filter functionality. 
 * @param {object} library_data - The library data object containing items to be filtered.
 */
class Filter {
    constructor(library_data) {
        this.items = library_data;
        this.active_filter = null;
        this.render_filter();
    }

    /**
     * Filter Preview
     * @description Filters the preview items based on the selected tag.
     * @param {string|null} tag - The tag to filter by. If null, all items are shown.
     * @return {void}
     */
    filter_preview(tag) {
        const library_items = document.querySelectorAll('#components [data-filter-tags]') || [];
        for (let i = 0; i < library_items.length; i++) {
            const filter_tags = library_items[i].getAttribute('data-filter-tags').split(', ') || []; if (filter_tags.length === 0) continue;
            if (tag === null) { 
                library_items[i].classList.remove('saiph__hidden'); 
                continue;
            }
            if (filter_tags.includes(tag)) {
                library_items[i].classList.remove('saiph__hidden');
            } else {
                library_items[i].classList.add('saiph__hidden');
            }
        }
    }

    /**
     * Add Event Listeners
     * @description Adds click event listeners to filter option fields.
     * @return {void}
     */
    add_event_listeners() {
        const filter_option_fields = document.querySelectorAll('[data-filter-option-field]'), self = this;
        for (let i = 0; i < filter_option_fields.length; i++) {
            filter_option_fields[i].addEventListener('click', () => {
                const tag = filter_option_fields[i].getAttribute('data-filter-option-field') || null; if (tag === null) return;
                if (tag === self.active_filter) {
                    filter_option_fields[i].classList.remove('saiph__active');
                    self.active_filter = null;
                    self.filter_preview(null);
                } else if (self.active_filter !== null) {
                    document.querySelector('[data-filter-option-field="' + self.active_filter + '"]').classList.remove('saiph__active');
                    filter_option_fields[i].classList.add('saiph__active');
                    self.active_filter = tag;
                    self.filter_preview(tag);
                } else {
                    filter_option_fields[i].classList.add('saiph__active');
                    self.active_filter = tag;
                    self.filter_preview(tag);
                }
            });
        }
    }


    /**
     * Render Filter
     * @description Renders the filter options in the aside right element.
     * @return {void}
     */
    render_filter() {
        const aside__right = document.getElementById('aside__right');
        let filter_html = '', tags = [];
        for (const item_name in this.items) {
            const item = this.items[item_name];
            for (const section_slug in item) {
                if (item[section_slug].tags) {
                    for (const tag of item[section_slug].tags) {
                        if (!tags.includes(tag)) {
                            tags.push(tag);
                        }
                    }
                }
            }
        } 
        filter_html += '<div class="saiph__filter">';
            filter_html += '<div class="saiph__h1 saiph__flex_center">';
                filter_html += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-filter-icon lucide-list-filter"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>';
                filter_html += '<span>Filter</span>';
            filter_html += '</div>';
            for (let i = 0; i < tags.length; i++) {
                const 
                    tag_slug = tags[i].toLowerCase().replace(/\s+/g, '-'),
                    tag_title = tags[i].charAt(0).toUpperCase() + tags[i].slice(1);
                filter_html += '<div data-filter-option-field="' + tag_slug + '" class="saiph__flex_center saiph__indent saiph__filter_option_field">';
                    filter_html += '<div class="saiph__p">' + tag_title + '</div>';
                filter_html += '</div>';
            }
        filter_html += '</div>';
        aside__right.innerHTML = filter_html;
        this.add_event_listeners();
    }
}