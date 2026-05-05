class FieldsFlex {
    constructor(library_data, slug, name, icon = '') {
        this.library_data = library_data;
        this.slug = slug;
        this.slug_singular = slug.slice(0, -1);
        this.name = name;
        this.name_singular = name.slice(0, -1);
        this.icon = icon;
        this.icons = {
            plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
            minus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>',
            trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-icon lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
            drag: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>',
        }
        this.aside_left = document.getElementById('aside__left');
        if (this.aside_left !== null && this.menu_element !== null) {
            this.init();
        }
        this.cc_is_dragging = false; // global variable to check if dragging is in progress
        this.section_is_dragging = false; // global variable to check if section dragging is in progress
        this.subfield_is_dragging = false; // global variable to check if subfield dragging is in progress
    }

    auto_complete_slug(input) {
        switch (input) {
            case 'l ': return 'layouts_';
            case 'c ': return 'components_';
            case 's1 ': return 'components_spacers_s1';
            case 's2 ': return 'components_spacers_s2';
            case 's3 ': return 'components_spacers_s3';
            case 's4 ': return 'components_spacers_s4';
            case 's5 ': return 'components_spacers_s5';
            case 's6 ': return 'components_spacers_s6';
            case 's7 ': return 'components_spacers_s7';
            case 's8 ': return 'components_spacers_s8';
            case 's9 ': return 'components_spacers_s9';
            case 's10 ': return 'components_spacers_s10';
            case 's11 ': return 'components_spacers_s11';
            case 's12 ': return 'components_spacers_s12';
            default:
                return input;
        }
    }

    card_is_dragging() {
        //drag and drop text into input
        const drag_el = document.querySelectorAll('[data-drag]');
        var self = this;
        
        for (let i = 0; i < drag_el.length; i++) {
            drag_el[i].addEventListener('dragstart', function(event) {
                event.dataTransfer.setData('text/plain', event.target.dataset.drag);
                self.cc_is_dragging = true;
                
            });
            drag_el[i].addEventListener('dragend', function(event) {
                self.cc_is_dragging = false;
                
            });
        }
    }

    create_element(args) {
        const element = document.createElement(args.tag);
        if (args.attrs) {
            for (const [key, value] of Object.entries(args.attrs)) {
                element.setAttribute(key, value);
            }
        }
        if (args.html) {
            element.innerHTML = args.html;
        }
        return element;
    }

    edit_tile_event(new_item, label, input) {
        label.classList.toggle('saiph__hidden');
        input.classList.toggle('saiph__hidden');
        if (!input.classList.contains('saiph__hidden')) {
 
            // select all text in input
            input.select();
            const update = (event) => {
                if (event.key === 'Enter' || event.type === 'blur') {
                    const newValue = input.value.trim();
                    if (newValue) {
                        label.textContent = newValue;
                        if (new_item) {
                            const new_slug = newValue.toLowerCase().replace(/[^a-z0-9]+/g, '_');
                            new_item.setAttribute('data-menu-option', new_slug); 
                        }
                        input.classList.add('saiph__hidden');
                        label.classList.remove('saiph__hidden');
                    } else {
                        alert('Title cannot be empty.');
                    }
                }
            }
            input.addEventListener('keydown', update);
            input.addEventListener('blur', update);
        }
    }

    add_subfield(add_button) {
        
        var self = this;
        const subfield = this.create_element({
            tag: 'div',
            attrs: { 
                'data-menu-subfield': 'null', 
                'class': 'saiph__flex_center saiph__indent saiph__menu_option_field', 
                'data-menu-subfield-order': ''
            },
            html: `
                <div class="saiph__menu_drag">
                    ${this.icons.drag}
                </div>
                <input class="saiph__input" type="text" value="" placeholder="component_slug" data-drop />
                <button class="saiph__button saiph__menu_remove" tabindex="-1">${this.icons.minus}</button>
            `,
        });

        // add draggable="true" only when mouse is over button
        const menu_drag = subfield.querySelector('.saiph__menu_drag');
        menu_drag.addEventListener('mouseover', function() {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            subfield.setAttribute('draggable', 'true');
        });
        menu_drag.addEventListener('mouseout', function() {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            subfield.removeAttribute('draggable');
        });

        // Remove subfield
        subfield.querySelector('.saiph__menu_remove').addEventListener('click', (e) => {
            self.remove_item(subfield, 'subfield');
        });
        
        // Add drag and drop reordering
        subfield.addEventListener('dragstart', function() {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            self.subfield_is_dragging = true;
            this.classList.add('saiph__dragging');
        });
        subfield.addEventListener('dragend', function() {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            self.subfield_is_dragging = false;
            this.classList.remove('saiph__dragging');
        });
        subfield.addEventListener('dragover', function(e) {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            e.preventDefault();
            
            const dragging = document.querySelector('.saiph__dragging');
            if (dragging && dragging !== this) {
                const rect = this.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset < rect.height / 2) {
                    this.style.paddingTop = '4rem';
                    this.style.paddingBottom = '0.66rem';
                } else if (offset > rect.height / 2) {
                    this.style.paddingTop = '0.66rem';
                    this.style.paddingBottom = '4rem';
                }
            }
        });
        subfield.addEventListener('dragleave', function() {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            this.style.paddingTop = '0.66rem';
            this.style.paddingBottom = '0.66rem';
        });
        subfield.addEventListener('drop', function(e) {
            if (self.cc_is_dragging) return;
            if (self.section_is_dragging) return;
            e.preventDefault();
            const dragging = document.querySelector('.saiph__dragging');
            this.style.paddingTop = '0.66rem';
            this.style.paddingBottom = '0.66rem';
            if (dragging && dragging !== this) {
                const rect = this.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset < rect.height / 2) {
                    this.parentNode.insertBefore(dragging, this);
                } else if (offset > rect.height / 2) {
                    this.parentNode.insertBefore(dragging, this.nextSibling);
                }
            }
        });

        subfield.querySelector('input').addEventListener('input', function() {
            this.value = self.auto_complete_slug(this.value);
        });

        add_button.insertAdjacentElement('beforebegin', subfield);

        subfield.querySelector('input').focus();
    }

    add_subfields(section_field, section_cc) {
        if (section_cc == '' || section_field === null) return;

        const subfield_container = section_field.querySelector('.saiph__menu_option_subfields');
        if (subfield_container === null) return;
        subfield_container.innerHTML = '';
        subfield_container.classList.add('saiph__hidden');

        const parts = section_cc.split('_'); 
        const section_type = parts[0];
        const section_category = parts[1];
        const section_slug = parts[2];
        
        if (section_type !== 'layouts') return;
        if (this.library_data[section_category] === undefined) return;
        if (this.library_data[section_category][section_slug] === undefined) return;
        const section_obj = this.library_data[section_category][section_slug];
        const column_count = section_obj.column_count;
        
        for (let i = 0; i < column_count; i++) {
            const field_label = this.create_element({
                tag: 'div',
                attrs: { 
                    'data-menu-subfields': i + 1,
                    'class': 'saiph__menu_option_field saiph__menu_subfield', 
                },
                html: `
                    <div class="saiph__small saiph__menu_subfield_label">Column ${i + 1}</div>
                `,
            });

            const add_button = this.create_element({
                tag: 'button',
                attrs: { 
                    'class': 'saiph__button saiph__menu_subfield_add saiph__menu_add', 
                    'data-menu-add': section_cc + '__' + (i + 1) 
                },
                html: this.icons.plus,
            });
            add_button.addEventListener('click', (e) => {
                this.add_subfield(add_button);
            });
            field_label.appendChild(add_button);

            subfield_container.appendChild(field_label);
        }
        subfield_container.classList.remove('saiph__hidden');

    }

    add_section(add_button) {
        const section_element = this.create_element({
            tag: 'div',
            attrs: { 
                'data-menu-option-field': 'null', 
                'class': 'saiph__flex_center saiph__indent saiph__menu_option_field', 
                'data-menu-section-order': '' 
            },
            html: `
                <div class="saiph__menu_drag">
                    ${this.icons.drag}
                </div>
                <input class="saiph__input" type="text" value="" placeholder="[layout||component]_slug" data-drop />
                <button class="saiph__button saiph__menu_remove" tabindex="-1">${this.icons.minus}</button>
                <div class="saiph__indent saiph__menu_option_subfields saiph__hidden"></div>
            `,
        });
        var self = this;

        // add draggable="true" only when mouse is over button
        const menu_drag = section_element.querySelector('.saiph__menu_drag');
        menu_drag.addEventListener('mouseover', function() {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            section_element.setAttribute('draggable', 'true');
        });
        menu_drag.addEventListener('mouseout', function() {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            section_element.removeAttribute('draggable');
        });

        // Remove section
        section_element.querySelector('.saiph__menu_remove').addEventListener('click', (e) => {
            this.remove_item(section_element, 'layout');
        });

        // Add drag and drop reordering
        section_element.addEventListener('dragstart', function() {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            self.section_is_dragging = true;
            this.classList.add('saiph__dragging');
        });
        section_element.addEventListener('dragend', function() {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            self.section_is_dragging = false;
            this.classList.remove('saiph__dragging');
        });
        section_element.addEventListener('dragover', function(e) {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;        
            e.preventDefault();
            
            const dragging = document.querySelector('.saiph__dragging');
            if (dragging && dragging !== this) {
                const rect = this.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset < rect.height / 2) {
                    this.style.paddingTop = '4rem';
                    this.style.paddingBottom = '0.66rem';
                } else if (offset > rect.height / 2) {
                    this.style.paddingTop = '0.66rem';
                    this.style.paddingBottom = '4rem';
                }
            }
        });
        section_element.addEventListener('dragleave', function() {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            this.style.paddingTop = '0.66rem';
            this.style.paddingBottom = '0.66rem';
        });
        section_element.addEventListener('drop', function(e) {
            if (self.cc_is_dragging) return;
            if (self.subfield_is_dragging) return;
            e.preventDefault();
            const dragging = document.querySelector('.saiph__dragging');
            this.style.paddingTop = '0.66rem';
            this.style.paddingBottom = '0.66rem';
            if (dragging && dragging !== this) {
                const rect = this.getBoundingClientRect();
                const offset = e.clientY - rect.top;
                if (offset < rect.height / 2) {
                    this.parentNode.insertBefore(dragging, this);
                } else if (offset > rect.height / 2) {
                    this.parentNode.insertBefore(dragging, this.nextSibling);
                }
            }
        });

        section_element.querySelector('input').addEventListener('input', function() {

            // Auto-complete section slug
            this.value = self.auto_complete_slug(this.value);

            // value doesn't start with a valid prefix
            if (!this.value.startsWith('layouts_') && !this.value.startsWith('components_')) return;

            self.add_subfields(section_element, this.value);
        });

        add_button.insertAdjacentElement('beforebegin', section_element);

        section_element.querySelector('input').focus();
    }

    add_item() {
        const new_item_slug = 'null';
        const new_item_name = 'New ' + this.name_singular;
        var self = this;

        // <div class="saiph__indent saiph__menu_option" data-menu-option="' + new_page_slug + '">
        const new_item = this.create_element({tag: 'div', attrs: { 'class': 'saiph__indent saiph__menu_option', 'data-menu-option': new_item_slug,}});

            // <div class="saiph__h4 saiph__flex_center saiph__flex_justify">
            const h4 = this.create_element({tag: 'div', attrs: { 'class': 'saiph__h4 saiph__flex_center saiph__flex_justify' }});
            new_item.appendChild(h4);

                // <div class="saiph__flex_center">
                const flex_center = this.create_element({tag: 'div', attrs: { 'class': 'saiph__flex_center' }});
                h4.appendChild(flex_center);

                    // <label data-menu-page-title>New Page</label>
                    const label = this.create_element({tag: 'label', attrs: { 'data-menu-page-title': '', 'tabindex': '0' }, html: new_item_name});
                    flex_center.appendChild(label);

                    // <input type="text" class="saiph__hidden" value="New Page" placeholder="Page Title" />
                    const input = this.create_element({tag: 'input', attrs: { 'type': 'text', 'class': 'saiph__input saiph__hidden', 'value': new_item_name, 'placeholder': 'Title' }});
                    flex_center.appendChild(input);


                    label.addEventListener('click', (e) => { self.edit_tile_event(new_item, label, input); });
                    label.addEventListener('keydown', (e) => { if (e.key === 'Enter') self.edit_tile_event(new_item, label, input);});

                // <button class="saiph__button saiph__menu_remove"><svg>...</svg></button>
                const remove_button = this.create_element({tag: 'button', attrs: { 'class': 'saiph__button saiph__menu_remove' }, html: this.icons.trash});
                remove_button.addEventListener('click', (e) => {
                    self.remove_item(new_item, self.name_singular);
                });
                h4.appendChild(remove_button);

            // <div data-menu-option-field="add" class="saiph__flex_center indent menu_option_field menu_option_field__add">
            const menu_option_field_add = this.create_element({tag: 'div', attrs: { 'data-menu-option-field': 'add', 'class': 'saiph__flex_center saiph__indent saiph__menu_option_field saiph__menu_option_field__add' }});
            new_item.appendChild(menu_option_field_add);

        // <button class="saiph__button saiph__menu_add"><svg>...</svg></button>
        const menu_add_button = this.create_element({tag: 'button', attrs: { 'class': 'saiph__button saiph__menu_add', 'data-menu-add': this.slug }, html: this.icons.plus});
        menu_add_button.addEventListener('click', (e) => {
            self.add_section(menu_option_field_add);
        });
        menu_option_field_add.appendChild(menu_add_button);

        // Append the new item to the menu
        const menu = document.querySelector(`[data-menu="${this.slug}"]`);
        if (menu) {
            // Insert the new item before the add button
            const menu_add_button = menu.querySelector('.saiph__menu_add[data-menu-add="' + this.slug_singular + '"]');
            if (menu_add_button) {
                menu_add_button.insertAdjacentElement('beforebegin', new_item);
            } else {
                menu.appendChild(new_item);
            }
        }
    }

    remove_item(item, name = 'item') {
        if (item === null) return;
        if (confirm(`Are you sure you want to remove this ${name}?`)) {
            item.remove();
        }
    }


    init() {
        // Create menu
        const menu_item = this.create_element({
            tag: 'div',
            attrs: { 
                'class': 'saiph__menu', 
                'data-menu': this.slug 
            },
            html: `
                <div class="saiph__h1 saiph__flex_center">
                    ${this.icon}
                    <span>${this.name}</span>
                </div>`,
        });

        // create add button
        const menu_add_button = this.create_element({tag: 'button', attrs: { 'class': 'saiph__button saiph__menu_add', 'data-menu-add': this.slug_singular,}, html: this.icons.plus,});
        menu_add_button.addEventListener('click', (e) => {
            e.preventDefault();
            this.add_item();
        });

        // append to menu item
        menu_item.appendChild(menu_add_button);

        // append menu item to aside left
        this.aside_left.appendChild(menu_item);

        this.card_is_dragging();
    }
}
