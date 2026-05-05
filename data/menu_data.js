/**
 * Menu data for the application.
 * @type {Array}
 * 
 * Only use number fields for px values
 * Be mindful of the action type (see preview.js > update_css)
 */
const menu_data = [
    {
        'name': 'Variables',
        'slug': 'variables',
        'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-variable-icon lucide-variable"><path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>',
        'options': [
            {
                'name': 'Colors',
                'slug': 'colors',
                'fields': [
                    {
                        'name': 'Primary',
                        'slug': 'color_primary',
                        'placeholder': '#4a90e2',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Secondary',
                        'slug': 'color_secondary',
                        'placeholder': '#e2de50',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Tertiary',
                        'slug': 'color_tertiary',
                        'placeholder': '#9013fe',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 0',
                        'slug': 'color_shade_0',
                        'placeholder': '#ffffff',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 2',
                        'slug': 'color_shade_2',
                        'placeholder': '#f5f5f5',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 4',
                        'slug': 'color_shade_4',
                        'placeholder': '#eeeeee',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 6',
                        'slug': 'color_shade_6',
                        'placeholder': '#cccccc',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 8',
                        'slug': 'color_shade_8',
                        'placeholder': '#777777',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Shade 10',
                        'slug': 'color_shade_10',
                        'placeholder': '#000000',
                        'format': 'hex',
                        'type': 'color',
                        'action': 'css_variable'
                    }
                ]
            },
            {
                'name': 'Sizes',
                'slug': 'sizes',
                'fields': [
                    {
                        'name': '1',
                        'slug': 'size_1',
                        'placeholder': '4',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                        
                    },
                    {
                        'name': '2',
                        'slug': 'size_2',
                        'placeholder': '8',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '3',
                        'slug': 'size_3',
                        'placeholder': '12',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '4',
                        'slug': 'size_4',
                        'placeholder': '16',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '5',
                        'slug': 'size_5',
                        'placeholder': '20',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '6',
                        'slug': 'size_6',
                        'placeholder': '28',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '7',
                        'slug': 'size_7',
                        'placeholder': '40',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '8',
                        'slug': 'size_8',
                        'placeholder': '60',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '9',
                        'slug': 'size_9',
                        'placeholder': '100',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '10',
                        'slug': 'size_10',
                        'placeholder': '160',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '11',
                        'slug': 'size_11',
                        'placeholder': '240',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    },
                    {
                        'name': '12',
                        'slug': 'size_12',
                        'placeholder': '320',
                        'format': 'px',
                        'type': 'number',
                        'action': 'size_calc'
                    }
                ]
            },
            {
                'name': 'Typography',
                'slug': 'typography',
                'fields': [
                    // Body ----------------------------------------------------
                    {
                        'name': 'Body Size',
                        'slug': 'typography_body_size',
                        'placeholder': '16',
                        'format': 'px',
                        'type': 'number',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Body Font',
                        'slug': 'typography_body_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'Body Weight',
                        'slug': 'typography_body_weight',
                        'placeholder': '400',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Body Line Height',
                        'slug': 'typography_body_line_height',
                        'placeholder': '1.6',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Body Color',
                        'slug': 'typography_body_color',
                        'placeholder': 'shade_8',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Heading Scale',
                        'slug': 'typography_heading_scale',
                        'placeholder': 'md',
                        'format': 'sizes',
                        'type': 'select',
                        'options': [
                            {'name': 'Extra Small', 'value': 'xs'},
                            {'name': 'Small', 'value': 'sm'},
                            {'name': 'Medium', 'value': 'md'},
                            {'name': 'Large', 'value': 'lg'},
                            {'name': 'Extra Large', 'value': 'xl'},
                            {'name': '2X Large', 'value': '2xl'},
                            {'name': '3X Large', 'value': '3xl'},
                            {'name': '4X Large', 'value': '4xl'}
                        ],
                        'action': 'typography_scale_calc',
                    },

                    // H1 ----------------------------------------------------
                    {
                        'name': 'H1 Font',
                        'slug': 'typography_h1_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H1 Weight',
                        'slug': 'typography_h1_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H1 Line Height',
                        'slug': 'typography_h1_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H1 Color',
                        'slug': 'typography_h1_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // H2 ----------------------------------------------------
                    {
                        'name': 'H2 Font',
                        'slug': 'typography_h2_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H2 Weight',
                        'slug': 'typography_h2_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H2 Line Height',
                        'slug': 'typography_h2_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H2 Color',
                        'slug': 'typography_h2_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // H3 ----------------------------------------------------
                    {
                        'name': 'H3 Font',
                        'slug': 'typography_h3_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H3 Weight',
                        'slug': 'typography_h3_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H3 Line Height',
                        'slug': 'typography_h3_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H3 Color',
                        'slug': 'typography_h3_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // H4 ----------------------------------------------------
                    {
                        'name': 'H4 Font',
                        'slug': 'typography_h4_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H4 Weight',
                        'slug': 'typography_h4_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H4 Line Height',
                        'slug': 'typography_h4_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H4 Color',
                        'slug': 'typography_h4_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // H5 ----------------------------------------------------
                    {
                        'name': 'H5 Font',
                        'slug': 'typography_h5_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H5 Weight',
                        'slug': 'typography_h5_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H5 Line Height',
                        'slug': 'typography_h5_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H5 Color',
                        'slug': 'typography_h5_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // H6 ----------------------------------------------------
                    {
                        'name': 'H6 Font',
                        'slug': 'typography_h6_font',
                        'placeholder': 'Arial, Helvetica, sans-serif',
                        'format': 'family',
                        'type': 'select',
                        'options': [
                            {'name': 'Arial', 'value': 'Arial, Helvetica, sans-serif'},
                            {'name': 'Georgia', 'value': 'Georgia, serif'},
                            {'name': 'Times New Roman', 'value': 'Times New Roman, Times, serif'},
                            {'name': 'Courier New', 'value': 'Courier New, Courier, monospace'},
                            {'name': 'Verdana', 'value': 'Verdana, sans-serif'}
                        ],
                        'action': 'load_font'
                    },
                    {
                        'name': 'H6 Weight',
                        'slug': 'typography_h6_weight',
                        'placeholder': '600',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': '100', 'value': '100'},
                            {'name': '200', 'value': '200'},
                            {'name': '300', 'value': '300'},
                            {'name': '400', 'value': '400'},
                            {'name': '500', 'value': '500'},
                            {'name': '600', 'value': '600'},
                            {'name': '700', 'value': '700'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H6 Line Height',
                        'slug': 'typography_h6_line_height',
                        'placeholder': '1.2',
                        'format': 'float',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'H6 Color',
                        'slug': 'typography_h6_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    // Links ----------------------------------------------------
                    {
                        'name': 'Inline Link Color',
                        'slug': 'typography_link_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    }
                ]
            },
            {
                'name': 'Buttons',
                'slug': 'buttons',
                'fields': [
                    {
                        'name': 'Primary Text Color',
                        'slug': 'buttons_primary_text_color',
                        'placeholder': 'shade_0',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Primary Background Color',
                        'slug': 'buttons_primary_background_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Primary Border Color',
                        'slug': 'buttons_primary_border_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Secondary Text Color',
                        'slug': 'buttons_secondary_text_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Secondary Background Color',
                        'slug': 'buttons_secondary_background_color',
                        'placeholder': 'transparent',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Secondary Border Color',
                        'slug': 'buttons_secondary_border_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Tertiary Text Color',
                        'slug': 'buttons_tertiary_text_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Tertiary Background Color',
                        'slug': 'buttons_tertiary_background_color',
                        'placeholder': 'transparent',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': "Transparent", "value": "transparent"}
                        ],
                        "action": "css_get_color",
                    },
                    {
                        "name": "Tertiary Border Color",
                        "slug": "buttons_tertiary_border_color",
                        "placeholder": "transparent",
                        "format": "color",
                        "type": "select",
                        "options": [
                            {"name": "Primary", "value": "primary"},
                            {"name": "Secondary", "value": "secondary"},
                            {"name": "Tertiary", "value": "tertiary"},
                            {"name": "Shade 0", "value": "shade_0"},
                            {"name": "Shade 2", "value": "shade_2"},
                            {"name": "Shade 4", "value": "shade_4"},
                            {"name": "Shade 6", "value": "shade_6"},
                            {"name": "Shade 8", "value": "shade_8"},
                            {"name": "Shade 10", "value": "shade_10"},
                            {"name": 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    }
                ]
            },
            {
                'name': 'Borders',
                'slug': 'borders',
                'fields': [
                    {
                        'name': 'Color',
                        'slug': 'border_color',
                        'placeholder': 'shade_6',
                        'format': 'hex',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': "Transparent", "value": "transparent"}
                        ],
                        "action": "css_get_color",
                    },
                    {
                        'name': "Width",
                        "slug": "border_width",
                        "placeholder": "1",
                        "format": "px",
                        "type": "number",
                        "action": "css_variable"
                    },
                    {
                        "name": "Radius",
                        "slug": "border_radius",
                        "placeholder": "6",
                        "format": "px",
                        "type": "number",
                        "action": "css_variable"
                    },
                    {
                        'name': 'Style',
                        'slug': 'border_style',
                        'placeholder': 'solid',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': 'None', 'value': 'none'},
                            {'name': 'Solid', 'value': 'solid'},
                            {'name': 'Dashed', 'value': 'dashed'},
                            {'name': 'Dotted', 'value': 'dotted'},
                            {'name': 'Double', 'value': 'double'},
                            {'name': 'Groove', 'value': 'groove'},
                            {'name': 'Ridge', 'value': 'ridge'},
                            {'name': 'Inset', 'value': 'inset'},
                            {'name': 'Outset', 'value': 'outset'}
                        ],
                        'action': 'css_variable'
                    }
                ]
            },
            {
                'name': 'Inputs',
                'slug': 'inputs',
                'fields': [
                    {
                        'name': 'Text Color',
                        'slug': 'inputs_text_color',
                        'placeholder': 'shade_10',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': "Transparent", "value": "transparent"}
                        ],
                        "action": "css_get_color",
                    },
                    {
                        'name': 'Background Color',
                        'slug': 'inputs_background_color',
                        'placeholder': 'transparent',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': "Shade 10", "value": "shade_10"},
                            {'name': "Transparent", "value": "transparent"}
                        ],
                        "action": "css_get_color",
                    },
                    {
                        "name": "Placeholder Color",
                        "slug": "inputs_placeholder_color",
                        "placeholder": "shade_8",
                        "format": "color",
                        "type": "select",
                        "options": [
                            {"name": "Primary", "value": "primary"},
                            {"name": "Secondary", "value": "secondary"},
                            {"name": "Tertiary", "value": "tertiary"},
                            {"name": "Shade 0", "value": "shade_0"},
                            {"name": "Shade 2", "value": "shade_2"},
                            {"name": "Shade 4", "value": "shade_4"},
                            {"name": "Shade 6", "value": "shade_6"},
                            {"name": "Shade 8", "value": "shade_8"},
                            {"name": "Shade 10", "value": "shade_10"},
                            {"name": 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                ]    
            },
            {
                'name': 'Miscellaneous',
                'slug': 'miscellaneous',
                'fields': [
                    {
                        'name': 'SVG Fill Color',
                        'slug': 'svg_fill_color',
                        'placeholder': 'shade_10',
                        'format': 'hex',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'SVG Stroke Color',
                        'slug': 'svg_stroke_color',
                        'placeholder': 'shade_10',
                        'format': 'hex',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Transition Duration',
                        'slug': 'transition_duration',
                        'placeholder': '0.3s',
                        'format': 'seconds',
                        'type': 'text',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Transition Timing Function',
                        'slug': 'transition_timing_function',
                        'placeholder': 'ease',
                        'format': 'text',
                        'type': 'select',
                        'options': [
                            {'name': 'Ease', 'value': 'ease'},
                            {'name': 'Linear', 'value': 'linear'},
                            {'name': 'Ease-in', 'value': 'ease-in'},
                            {'name': 'Ease-out', 'value': 'ease-out'},
                            {'name': 'Ease-in-out', 'value': 'ease-in-out'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Box Shadow',
                        'slug': 'box_shadow',
                        'placeholder': 'light',
                        'format': 'intensity',
                        'type': 'select',
                        'options': [
                            {'name': 'None', 'value': 'none'},
                            {'name': 'Light', 'value': 'box-shadow-light'},
                            {'name': 'Medium', 'value': 'box-shadow-medium'},
                            {'name': 'Heavy', 'value': 'box-shadow-heavy'} 
                        ],
                        'action': 'css_variable'
                    },
                ]
            },
            {
                'name': 'Breakpoints',
                'slug': 'breakpoints',
                'fields': [
                    {
                        'name': 'Extra Small',
                        'slug': 'breakpoint_xs',
                        'placeholder': '400',
                        'format': 'px',
                        'type': 'number',
                        'action': 'breakpoint_calc'
                    },
                    {
                        'name': 'Small',
                        'slug': 'breakpoint_sm',
                        'placeholder': '600',
                        'format': 'px',
                        'type': 'number',
                        'action': 'breakpoint_calc'
                    },
                    {
                        'name': 'Medium',
                        'slug': 'breakpoint_md',
                        'placeholder': '1100',
                        'format': 'px',
                        'type': 'number',
                        'action': 'breakpoint_calc'
                    },
                    {
                        'name': 'Large',
                        'slug': 'breakpoint_lg',
                        'placeholder': '1500',
                        'format': 'px',
                        'type': 'number',
                        'action': 'breakpoint_calc'
                    },
                    {
                        'name': 'Extra Large',
                        'slug': 'breakpoint_xl',
                        'placeholder': '1700',
                        'format': 'px',
                        'type': 'number',
                        'action': 'breakpoint_calc'
                    }
                ]
            }
        ]
    },
    {
        'name': 'Global',
        'slug': 'global',
        'icon': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        'options': [
            {
                'name': 'Meta',
                'slug': 'meta',
                'fields': [
                    {
                        'name': 'Website Title',
                        'slug': 'meta_title',
                        'placeholder': 'Company Name',
                        'format': 'text',
                        'type': 'text',
                        'action': 'none'
                    }
                ]
            },
            {
                'name': 'Body',
                'slug': 'body',
                'fields': [
                    {
                        'name': 'Max Width',
                        'slug': 'body_max_width',
                        'placeholder': '1200',
                        'format': 'px',
                        'type': 'number',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Background Color',
                        'slug': 'body_background_color',
                        'placeholder': 'shade_0',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                ]
            },
            {
                'name': 'Header',
                'slug': 'header',
                'fields': [
                    {
                        'name': 'Layout',
                        'slug': 'header_layout',
                        'placeholder': '',
                        'format': 'cc',
                        'type': 'text',
                        'action': 'none'
                    },
                    {
                        'name': 'Position',
                        'slug': 'header_position',
                        'placeholder': 'fixed',
                        'format': 'value',
                        'type': 'select',
                        'options': [
                            {'name': 'Fixed', 'value': 'fixed'},
                            {'name': 'Static', 'value': 'static'},
                            {'name': 'Directional', 'value': 'directional'}
                        ],
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Height',
                        'slug': 'header_height',
                        'placeholder': '60',
                        'format': 'px',
                        'type': 'number',
                        'action': 'css_variable'
                    },
                    {
                        'name': 'Menu Item Color',
                        'slug': 'header_color',
                        'placeholder': 'shade_10',
                        'format': 'hex',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Background Color',
                        'slug': 'header_background_color',
                        'placeholder': 'shade_0',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                ]
            },
            {
                'name': 'Footer',
                'slug': 'footer',
                'fields': [
                    {
                        'name': 'Layout',
                        'slug': 'footer_layout',
                        'placeholder': '',
                        'format': 'cc',
                        'type': 'text',
                        'action': 'none'
                    },
                    {
                        'name': 'Menu Item Color',
                        'slug': 'footer_color',
                        'placeholder': 'shade_10',
                        'format': 'hex',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    },
                    {
                        'name': 'Background Color',
                        'slug': 'footer_background_color',
                        'placeholder': 'shade_0',
                        'format': 'color',
                        'type': 'select',
                        'options': [
                            {'name': 'Primary', 'value': 'primary'},
                            {'name': 'Secondary', 'value': 'secondary'},
                            {'name': 'Tertiary', 'value': 'tertiary'},
                            {'name': 'Shade 0', 'value': 'shade_0'},
                            {'name': 'Shade 2', 'value': 'shade_2'},
                            {'name': 'Shade 4', 'value': 'shade_4'},
                            {'name': 'Shade 6', 'value': 'shade_6'},
                            {'name': 'Shade 8', 'value': 'shade_8'},
                            {'name': 'Shade 10', 'value': 'shade_10'},
                            {'name': 'Transparent', 'value': 'transparent'}
                        ],
                        'action': 'css_get_color',
                    }
                ]
            },
        ]
    }
]