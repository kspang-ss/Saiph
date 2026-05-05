/**
 * @class Library
 * @description A class to manage and render the items (e.g., headers, footers, components, layouts) in each library view.
 * @param {object} library_data - An object containing the library items data. See app/data/library_data.js.
 * @param {string} slug - The slug identifier for the library view (e.g., "components", "headers", "footers", "layouts").
 */
class Library {
    constructor(library_data, slug) {
        this.slug = slug;
        this.items = library_data;
        this.render_items();
    }

    /**
     * Render Items
     * @description Renders the library items into the corresponding HTML container based on the slug.
     * @return {void}
     */
    render_items() {
        const items_container = document.getElementById(this.slug);
        let html = '<div class="saiph__view_container">';
        for (const item_name in this.items) {
            const item = this.items[item_name];

            for (const section_slug in item) {          
                const slug = item[section_slug].slug;
                const title = item[section_slug].title;
                const tags = item[section_slug].tags;
                const thumbnail = item[section_slug].card_thumbnail_name;
                const column_classes = item[section_slug].column_classes || [];
                const size = item[section_slug].size || 0;
                const card = new Card(slug, title, tags, thumbnail, column_classes, size);
                html += card.html;
            }
        }
        html += '</div>';
        items_container.innerHTML = html;
    }
}