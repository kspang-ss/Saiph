/**
 * @class Fields
 * @description Class to handle the generation of form fields in the sidebar menu.
 * @param {object} menu_data - The menu data object. See app/data/menu_data.js for structure.
 * @param {HTMLElement} aside_left - The left aside HTML element where the menu will be rendered.
 */
class Fields {
    constructor(menu_data, aside_left) {
        this.menu_data = menu_data;
        this.aside_left = aside_left;
        if (!this.aside_left !== null) this.init();
    }

    /**
     * Get Field HTML 
     * @param {object} field - field object from menu_data 
     * @returns {string} - HTML string for the field
     */
    get_field_html(field) {     
        let field_html = '';
        switch (field.type) {
            case 'text':
            case 'number':
                field_html += `<input class="saiph__input" type="${field.type}" value="${field.placeholder}" />`;
                break;
            case 'color':   
                field_html += `<div class="saiph__flex_center saiph__color_field">`;
                field_html += `<input class="saiph__input" data-color-text="${field.name}" type="text" value="${field.placeholder}" />`;
                field_html += `<input class="saiph__input" data-color-swatch="${field.name}" type="color" value="${field.placeholder}" />`;
                field_html += `</div>`;
                break;
            case 'select':
                field_html += '<select class="saiph__select">';
                    for (const option of field.options) {
                        field_html += `<option value="${option.value}"${option.value == field.placeholder ? ' selected' : ''}>${option.name}</option>`;
                    }
                field_html += '</select>';
                break;
        }
        return field_html;
    }

    /**
     * Get Menu HTML
     * @param {array} menus - array of menu objects from menu_data
     * @returns {string} - HTML string for the menus
     */
    get_menu_html(menus) {
        let menu_html = '';
        for (const menu of menus) {
            menu_html += `<div class="saiph__menu" data-menu="${menu.slug}">`;
                menu_html += '<div class="saiph__h1 saiph__flex_center">';
                    menu_html += menu.icon;
                    menu_html += `<span>${menu.name}</span>`;
                menu_html += '</div>';
                for (const option of menu.options) {
                    menu_html += `<div class="saiph__indent saiph__menu_option" data-menu-option="${option.slug}">`;
                        menu_html += `<div class="saiph__h4">${option.name}</div>`;
                        for (const field of option.fields) {
                            const field_action = field.action ? field.action : 'none';
                            menu_html += `<div class="saiph__flex_center saiph__indent saiph__menu_option_field" data-menu-option-field="${field.slug}" data-menu-type="${field.type}" data-menu-action="${field_action}">`;
                                menu_html += `<div class="saiph__h6">${field.name}</div>`;
                                    menu_html += this.get_field_html(field);
                                menu_html += `<div class="saiph__small">${field.format}</div>`;
                            menu_html += '</div>';
                        }
                    menu_html += '</div>';
                }
            menu_html += '</div>';
        }
        return menu_html;
    }

    /**
     * Init
     * @description Initializes the Fields class by generating and appending the menu HTML to the aside_left element.
     * @return {void}
     */
    init() {
        let menu_html = this.get_menu_html(this.menu_data);
        if (menu_html) this.aside_left.innerHTML = menu_html;
    }
}