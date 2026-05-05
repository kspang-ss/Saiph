class Preview {
    constructor(library_data) {
        this.library_data = library_data
        this.max_viewport_width = parseInt(document.querySelector('[data-menu-option-field="body_max_width"] input').value || 0);
        this.min_viewport_width = parseInt(document.querySelector('[data-menu-option-field="breakpoint_xs"] input').value || 0);
        this.sizes = new Sizes(this.max_viewport_width, this.min_viewport_width);
    }

    show_page(index) {
        const pages = document.querySelectorAll('.saiph__page');
        const subheader_items = document.querySelectorAll('.saiph__subheader_item');
        pages.forEach((page, i) => {
            if (i === index) {
                page.classList.add('saiph__page_active');
            } else {
                page.classList.remove('saiph__page_active');
            }
        });
        subheader_items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('saiph__subheader_item_active');
            } else {
                item.classList.remove('saiph__subheader_item_active');
            }
        });
    }

    get_components(slug) {
        if (!slug) return null
         // split slug into theme and component
        const parts = slug.split('_')
        if (parts.length < 3) {
            console.error('Invalid component slug format:', slug)
            return null
        }
        const component_type = parts[0];
        const component_category = parts[1];
        const component_slug = parts[2];

        if (!this.library_data[component_type][component_category][component_slug]) {
            console.error('Component not found:', slug)
            return null
        }
        const component = this.library_data[component_type][component_category][component_slug]
        // Return the component HTML
        return {
            html: component.preview_html,
            options: component.options || {},
        }
    }

    get_layouts(slug, column_components = []) {
        if (!slug) return null
        // split slug into theme and section
        const parts = slug.split('_')
        if (parts.length < 3) {
            console.error('Invalid layout slug format:', slug)
            return null
        }
        const layout_type = parts[0];
        const layout_category = parts[1];
        const layout_slug = parts[2];

        if (!this.library_data[layout_type][layout_category][layout_slug]) {
            console.error('Layout not found:', slug)
            return null
        }
        const layout = this.library_data[layout_type][layout_category][layout_slug]
        // Return the section HTML
        

        let columns_html = [];
        for (let i = 0; i < column_components.length; i++) {
            const column = column_components[i];
            if (column && Array.isArray(column) && column.length > 0) {
                const column_html = [];
                for (const component_slug of column) {
                    const component = this.get_components(component_slug);
                    if (component && component.html) {
                        column_html.push(component.html);
                    } else {
                        console.warn('Component not found:', component_slug);
                    }
                }
                columns_html.push(column_html.join(''));
            }
        }

        return {
            html: layout.preview_html(columns_html),
            options: layout.options || {},
        }
    }
        

    update_header(cc) {
        if (!cc) return;
        const preview_container = document.querySelector('#header')
        if (preview_container === null) return 
        const object = this.get_components(cc);
        if (!object || !object.html) return; 
        preview_container.innerHTML = object.html;
    }

    update_page(pages) {
        if (!pages) return
        const preview_container = document.querySelector('#preview #main')
        const subheader = document.querySelector('#saiph__subheader')
        if (subheader === null) return
        if (preview_container === null) return
        let page_html = '';
        let subheader_html = '';
        let page_index = 0;
        for (const page_key in pages) {
            const page = pages[page_key]
            if (!page) continue
            const page_title = page_key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()); 
            const page_active = (page_index === 0) ? ' saiph__page_active' : '';
            const tab_active = (page_index === 0) ? ' saiph__subheader_item_active' : '';
            page_html += '<div class="saiph__page' + page_active + '" data-page-index="' + page_index + '">';
            if (page.sections && Array.isArray(page.sections)) {
                for (const section of page.sections) {
                    let html_obj = null;
                    if (section.type  === 'layout') {
                        html_obj = this.get_layouts(section.slug, section.columns);
                    } else if (section.type === 'component') {
                        html_obj = this.get_components(section.slug);
                    }
                    if (html_obj && html_obj.html) {
                        page_html += html_obj.html
                    }
                }
            }
            page_html += '</div>';
            subheader_html += '<small class="saiph__subheader_item' + tab_active + '" data-page-index="' + page_index + '">' + page_title + '</small>';
            page_index++
        }
        preview_container.innerHTML = page_html;
        if (subheader_html !== '') {
            subheader.innerHTML = subheader_html;
        }

        // Add event listeners to subheader items
        const subheader_items = subheader.querySelectorAll('.saiph__subheader_item');
        subheader_items.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.show_page(index);
            });
        });
    }

    update_footer(cc) {
        if (!cc) return;
        const preview_container = document.querySelector('#footer');
        if (preview_container === null) return;
        const object = this.get_components(cc);
        if (!object || !object.html) return; 
        preview_container.innerHTML = object.html;
    }

    update_css(output_object) {
        const left_aside = document.getElementById('aside__left');
        const r = document.querySelector(':root');
        if (!left_aside) {
            console.error('Left aside not found'); return;
        }

        const data_menus = left_aside.querySelectorAll('[data-menu]');
        if (data_menus === null || data_menus.length === 0) {
            console.error('No data menus found in left aside'); 
            return;
        }

        this.output = {};

        for (let i = 0; i < data_menus.length; i++) {
            const menu = data_menus[i];
            if (menu === null) continue; // skip if menu is null
            const menu_slug = menu.getAttribute('data-menu');

            this.output[menu_slug] = {};

            const data_menu_options = menu.querySelectorAll('[data-menu-option]');
            if (data_menu_options === null || data_menu_options.length === 0) {
                console.warn('No data menu options found in menu', menu); 
                continue; // skip to next menu
            }
            for (let j = 0; j < data_menu_options.length; j++) {
                const option = data_menu_options[j];
                if (option === null) continue; // skip if option is null
                const option_slug = option.getAttribute('data-menu-option');
                const option_fields = option.querySelectorAll('[data-menu-option-field]');
                if (option_fields === null || option_fields.length === 0) {
                    console.error('No data menu option fields found in option', option); 
                    continue; // skip to next option
                }
                for (let k = 0; k < option_fields.length; k++) {
                    const field = option_fields[k];
                    if (field === null) continue; // skip if field is null
                    const field_action = field.getAttribute('data-menu-action');
                    if (field_action === 'none') continue; // skip if field action is null
                    const field_slug = field.getAttribute('data-menu-option-field');
                    const field_type = field.getAttribute('data-menu-type');
                    const css_variable = '--' + field_slug.replace(/_/g, '-');
                    let field_value = '';
                    let field_label = '';
                    if (field_type === 'number') {
                        field_value = field.querySelector('input').value;
                        if (field_action === 'css_variable') {
                            field_value = String(field_value / 16) + 'rem';
                            r.style.setProperty(css_variable, field_value);
                        } else if (field_action === 'size_calc') {
                            field_value = parseInt(field_value);
                            const size = this.sizes.get_size(field_value);
                            r.style.setProperty(css_variable, size);
                            
                        }
                    } else if (field_type === 'text' || field_type === 'color') {
                        field_value = field.querySelector('input').value;
                        if (field_action === 'css_variable') {
                            r.style.setProperty(css_variable, field_value);
                        }
                    } else if (field_type === 'select') {
                        const select_input = field.querySelector('select');
                        field_value = select_input.value;
                        field_label = select_input.options[select_input.selectedIndex].text; 
                        if (field_action === 'css_variable') {
                            r.style.setProperty(css_variable, field_value); 
                        } else if (field_action === 'css_get_color') {
                            const hex = output_object['variables']['colors']['color_' + field_value];
                            if (hex !== undefined) {
                                r.style.setProperty(css_variable, hex);
                            } else if (field_value === 'transparent') {
                                r.style.setProperty(css_variable, 'transparent');
                            }
                        } else if (field_action === 'typography_scale_calc') {
                            const font_body_size = parseInt(document.querySelector('[data-menu-option-field="typography_body_size"] input').value || 0);
                            const font_scale = field_value;
                            if (font_body_size === 0 || font_scale === '' || this.max_viewport_width === 0 || this.min_viewport_width === 0) {
                                console.error('Font size, scale, or viewport width is not set');
                                continue;
                            }
                            const typography = new Typography(font_body_size, font_scale, this.max_viewport_width, this.min_viewport_width);
                            const fonts = typography.font_types;
                            for (const font in fonts) {
                                r.style.setProperty('--typography-scale-' + font, fonts[font]);
                            }  
                        } else if (field_action === 'load_font') {
                            r.style.setProperty(css_variable, field_value);
                            const location = field_slug.split('_')[1];
                            fonts.append_head_link(field_label, location);
                        }
                    } else {
                        //console.warn('Unknown field type:', field_type);
                        continue;
                    }
                    //if (field_value === '') continue; // skip if field value is empty
                    

                }
            }
        }
    }
}

