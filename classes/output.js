/**
 * @class Output
 * @description This class is responsible for collecting and structuring the data from the left aside menus
 * into a JSON object format. It gathers information from various menu options and fields, organizing them
 * into a hierarchical structure that represents the configuration of pages, posts, global settings, and more.
 * The resulting JSON object can be used for saving configurations, exporting settings, or further processing.
 */
class Output {
    constructor() {
        this.output = {};
    }

    /**
     * Update Output
     * @description Collects data from the left aside menus and structures it into a JSON object.
     * The method traverses through menus, options, and fields, extracting values and organizing them
     * into a nested object format. It handles special cases for pages and posts, including sections
     * with layouts and components. After updating the output, it also triggers updates to the preview
     * if the preview object is defined.
     * @return {void}
     */
    update() {
        const left_aside = document.getElementById('aside__left');
            if (!left_aside) { console.error('Left aside not found'); return; }
        const data_menus = left_aside.querySelectorAll('[data-menu]');
            if (data_menus === null || data_menus.length === 0) { console.error('No data menus found in left aside');  return; }
        this.output = {};

        // Menus --------------------------------------------------------------------------------
        for (let i = 0; i < data_menus.length; i++) {
            const menu = data_menus[i];
                if (menu === null) continue; 
            const menu_slug = menu.getAttribute('data-menu');
            this.output[menu_slug] = {};
            const data_menu_options = menu.querySelectorAll('[data-menu-option]');
                if (data_menu_options === null || data_menu_options.length === 0) { console.warn('No data menu options found in menu', menu); continue; }

            // Options ----------------------------------------------------------------------------
            for (let j = 0; j < data_menu_options.length; j++) {
                const option = data_menu_options[j];
                    if (option === null) continue;
                const option_slug = option.getAttribute('data-menu-option');
                let option_title = '';
                if (menu_slug === 'pages' || menu_slug === 'posts') {
                    option_title = option.querySelector('[data-menu-page-title]').textContent;
                }
                this.output[menu_slug][option_slug] = {}; 
                const data_menu_option_fields = option.querySelectorAll('[data-menu-option-field]');
                    if (data_menu_option_fields === null || data_menu_option_fields.length === 0) { console.error('No data menu option fields found in option', option); continue; }
                let fields;
                if (menu_slug === 'pages' || menu_slug === 'posts') {
                    fields = { 
                        title: option_title,
                        sections: [],
                    };
                } else {
                    fields = {}; 
                }

                // Fields --------------------------------------------------------------------------
                for (let k = 0; k < data_menu_option_fields.length; k++) {
                    const field = data_menu_option_fields[k];
                        if (field === null) continue;
                    const field_slug = field.getAttribute('data-menu-option-field');
                        if (!field_slug) { console.error('Field slug not found for field:', field); continue;}
                    const value = field.querySelector('input, select, textarea');
                    if (value) {
                        if (menu_slug === 'pages' || menu_slug === 'posts') {
                            if (value.value.startsWith('layouts_')) {
                                let layout_obj = {
                                    type: 'layout',
                                    slug: value.value,
                                    columns: []
                                };
                                const subfields = field.querySelectorAll('[data-menu-subfields]');

                                // subfields ----------------------------------------------------------
                                if (subfields && subfields.length > 0) {
                                    for (let l = 0; l < subfields.length; l++) {
                                        const subfield = subfields[l];
                                        let column_components = [];
                                        if (subfield) {
                                            const subfields = subfield.querySelectorAll('[data-menu-subfield]');
                                            if (subfields && subfields.length > 0) {
                                                for (let m = 0; m < subfields.length; m++) {
                                                    const subfield_item = subfields[m];
                                                    if (subfield_item) {
                                                        const subfield_value = subfield_item.querySelector('input, select, textarea');
                                                        if (subfield_value) {
                                                            column_components.push(subfield_value.value);
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        layout_obj.columns.push(column_components);
                                    }
                                }
                                fields.sections.push(layout_obj);
                            } else {
                                let layout_obj = {
                                    type: 'component',
                                    slug: value.value
                                };
                                fields.sections.push(layout_obj);
                            }
                        } else {
                            fields[field_slug] = value.value !== undefined ? value.value : value.textContent;
                        }
                        this.output[menu_slug][option_slug] = fields; 
                    }
                }
            }
            
        }

        // Update preview
        if (typeof preview !== 'undefined') {
            preview.update_header(this.output.global.header.header_layout);
            preview.update_page(this.output.pages);
            preview.update_footer(this.output.global.footer.footer_layout);
            preview.update_css(this.output);
        }
        // Debug
        //console.log('Output updated:', this.output);
    }

    /**
     * Get Output
     * @description Returns the current output as a formatted JSON string.
     * @returns {string|null} - The formatted JSON string.
     */
    get_output() {
        if (Object.keys(this.output).length === 0) { console.error('Output is empty. Please run update() first.'); return null; }
        const json = JSON.stringify(this.output, null, 0);
        return json;
    }
}