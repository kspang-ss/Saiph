// Fields
new Fields(menu_data, document.getElementById('aside__left'));

// update font selectors
const fonts = new Fonts([
    document.querySelector('[data-menu-option-field="typography_body_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h1_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h2_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h3_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h4_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h5_font"] select'),
    document.querySelector('[data-menu-option-field="typography_h6_font"] select')
]);

// preview
const preview = new Preview(library_data);

// filter
new Filter(library_data.components);

// Library
new Library(library_data.headers, 'headers');
new Library(library_data.footers, 'footers');
new Library(library_data.layouts, 'layouts');
new Library(library_data.components, 'components');

// Flex Fields
new FieldsFlex(library_data.layouts, 'pages', 'Pages', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>');
new FieldsFlex(library_data.layouts, 'posts', 'Posts', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>');

// Clipboard
new Clipboard();

const output = new Output();
// add custom event to trigger output update
document.addEventListener('updateOutput', function() {
    output.update();
});

const r = document.querySelector(':root');

/**
 * Toggle View
 * @param {string} slug - The slug of the view to toggle.
 * @returns {void} 
*/
const toggle_view = (slug) => {
    const views = {
        preview: {
            menu_element: document.querySelector('[data-toggle="preview"]'),
            container_element: document.querySelector('#preview'),
            has_subheader: true,
            has_filter: false,
        },
        headers: {
            menu_element: document.querySelector('[data-toggle="headers"]'),
            container_element: document.querySelector('#headers'),
            has_subheader: false,
            has_filter: false
        },
        footers: {
            menu_element: document.querySelector('[data-toggle="footers"]'),
            container_element: document.querySelector('#footers'),
            has_subheader: false,
            has_filter: false
        },
        layouts: {
            menu_element: document.querySelector('[data-toggle="layouts"]'),
            container_element: document.querySelector('#layouts'),
            has_subheader: false,
            has_filter: false
        },
        components: {
            menu_element: document.querySelector('[data-toggle="components"]'),
            container_element: document.querySelector('#components'),
            has_subheader: false,
            has_filter: true
        }
    }
    for (const key in views) {
        if (views.hasOwnProperty(key)) {
            const view = views[key];
            const app_subheader = document.querySelector('#saiph__subheader');
            if (key === slug) {
                view.menu_element.classList.add('saiph__active');
                view.container_element.classList.remove('saiph__hidden');
                if (view.has_filter) {
                    document.querySelector('#aside__right').style.padding = '2rem 1rem';
                    r.style.setProperty('--saiph-right-aside', '12.5rem');
                } else {
                    document.querySelector('#aside__right').style.padding = '2rem 0rem';
                    r.style.setProperty('--saiph-right-aside', '0rem');
                }
                if (view.has_subheader) {
                    app_subheader.style.maxHeight = '100%';
                    app_subheader.style.borderColor = 'var(--saiph-color-shade-8)';
                    r.style.setProperty('--saiph-body-height-subtract', '9.2294rem');
                } else {
                    app_subheader.style.maxHeight = '0';
                    app_subheader.style.borderColor = 'transparent';
                    r.style.setProperty('--saiph-body-height-subtract', '7.3419rem');
                }
            } else {
                view.menu_element.classList.remove('saiph__active');
                view.container_element.classList.add('saiph__hidden');
            }
        }
    }
}
toggle_view_menu_buttons = document.querySelectorAll('[data-toggle]');
if (toggle_view_menu_buttons.length > 0) {
    for (let i = 0; i < toggle_view_menu_buttons.length; i++) {
        toggle_view_menu_buttons[i].addEventListener('click', function() {
            const slug = this.dataset.toggle;
            toggle_view(slug);
        });
        toggle_view_menu_buttons[i].addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault(); // Prevent default action
                const slug = this.dataset.toggle;
                toggle_view(slug);
            }
        });
    }
}

// Toggle left aside
let aside_left_active = true;
function toggle_aside_left() {
    if (aside_left_active) {
        this.classList.add('saiph_closed');
        r.style.setProperty('--saiph-left-aside', '0rem');
        aside_left_active = false;
    } else {
        this.classList.remove('saiph_closed');
        r.style.setProperty('--saiph-left-aside', '28rem');
        aside_left_active = true;
    }
}
const toggle_left_aside = document.getElementById('toggle_aside_left');
if (toggle_left_aside) {
    toggle_left_aside.addEventListener('click', toggle_aside_left);
}


//input change
const inputs = document.querySelectorAll('[data-menu-option-field] input, [data-menu-option-field] select');
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function() {
        document.dispatchEvent(new CustomEvent('updateOutput'));
    });
}

// color input sync
const color_text_inputs = document.querySelectorAll('input[data-color-text]');
for (let i = 0; i < color_text_inputs.length; i++) {
    color_text_inputs[i].addEventListener('change', function() {
        const color_swatch_input = document.querySelector(`input[data-color-swatch="${this.dataset.colorText}"]`);
        if (color_swatch_input) color_swatch_input.value = this.value;
        document.dispatchEvent(new CustomEvent('updateOutput'));
    });
}
const color_swatch_inputs = document.querySelectorAll('input[data-color-swatch]');
for (let i = 0; i < color_swatch_inputs.length; i++) {
    color_swatch_inputs[i].addEventListener('input', function() {
        const color_text_input = document.querySelector(`input[data-color-text="${this.dataset.colorSwatch}"]`);
        if (color_text_input) color_text_input.value = this.value;
        document.dispatchEvent(new CustomEvent('updateOutput'));
    });
}

//drag and drop text into input
const drag_el = document.querySelectorAll('[data-drag]');
for (let i = 0; i < drag_el.length; i++) {
    drag_el[i].addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.dataset.drag);
        cc_is_dragging = true;
    });
    drag_el[i].addEventListener('dragend', function(event) {
        cc_is_dragging = false;
    });
}

// run
const button_run = document.querySelector('.saiph__button_run');
if (button_run) {
    button_run.addEventListener('click', function() {
        document.dispatchEvent(new CustomEvent('updateOutput'));
        document.querySelector('#preview .saiph__body').classList.remove('saiph__hidden');
        const json_output = output.get_output(); // get the output after update
        const footer_output_field = document.querySelector('#footer__output input'); // find the footer output element
        if (footer_output_field) {
            if (json_output) {
                footer_output_field.value = json_output; // set the output in the footer
                toggle_view('preview');
                if (aside_left_active) {
                    toggle_aside_left.call(toggle_left_aside); // toggle the left aside if it's active
                }
            } else {
                footer_output_field.value = 'No output generated.';
            }
        } else {
            console.error('Footer output field not found.');
        }
    });
}

// add hotkey for run
// document.addEventListener('keydown', function(event) {
//     // Check if Ctrl/Cmd + R or Ctrl/Cmd + shift + R is pressed
//     if ((event.ctrlKey || event.metaKey) && (event.key === 'r' || (event.shiftKey && event.key === 'R'))) {
//         event.preventDefault(); // Prevent default browser refresh
//         document.querySelector('.saiph__button_run').click(); // Trigger the run button click
//     }
// });


