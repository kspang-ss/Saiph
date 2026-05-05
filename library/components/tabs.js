const components_tabs = {
    'default': {
        slug: 'components_tabs_default',
        title: 'Tabs',
        tags: ['tabs'],
        src_path: 'library/components/tabs/default',
        card_thumbnail_name: 'components_tabs_default.jpg',
        preview_html: `
            <style>
                .components_tabs_default [role="tablist"] {
                    line-height: 1;
                    border-bottom: 1px solid lightgray;
                }
                .components_tabs_default [role="tab"],
                .components_tabs_default [role="tab"]:focus,
                .components_tabs_default [role="tab"]:hover {
                    margin-bottom: -1px;
                    border-bottom: 1px solid transparent;
                    transition: border-color 0.3s;
                }

                .components_tabs_default [role="tab"][aria-selected="true"] {
                    border-color: black; 
                }
            </style>
            <div class="components_tabs_default" data-dgtabs>
                <div role="tablist" aria-labelledby="tablist_1">
                    <button class="py-2 mr-4" id="tab_1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel_1">
                        <span class="h6">Tab 1</span>
                    </button>
                    <button class="py-2 mr-4" id="tab_2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel_2" tabindex="-1">
                        <span class="h6">Tab 2</span>
                    </button>
                    <button class="py-2" id="tab_3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel_3" tabindex="-1">
                        <span class="h6">Tab 3</span>
                    </button>
                </div>
                <div class="py-2" id="tabpanel_1" role="tabpanel" tabindex="0" aria-labelledby="tab_1" aria-hidden="false">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="py-2" id="tabpanel_2" role="tabpanel" tabindex="0" aria-labelledby="tab_2" aria-hidden="true">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="py-2" id="tabpanel_3" role="tabpanel" tabindex="0" aria-labelledby="tab_3" aria-hidden="true">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        `,
    },
    'vertical': {
        slug: 'components_tabs_vertical',
        title: 'Tabs (vertical)',
        tags: ['tabs'],
        src_path: 'library/components/tabs/vertical',
        card_thumbnail_name: 'components_tabs_vertical.jpg',
        preview_html: `
            <style>
                .components_tabs_vertical [role="tablist"] {
                    line-height: 1;
                    border-right: var(--border);
                    @media(max-width: 600px) {
                        border-right: none;
                        border-bottom: var(--border);
                    }
                }
                .components_tabs_vertical [role="tab"],
                .components_tabs_vertical [role="tab"]:focus,
                .components_tabs_vertical [role="tab"]:hover {
                    margin: 0 -1px 0 0;
                    border-right: var(--border-width) var(--border-style) transparent;
                    transition: border-color 0.3s;
                    @media(max-width: 600px) {
                        border-right: none;
                        border-bottom: var(--border-width) var(--border-style) transparent;
                        margin: 0 0 -1px 0;
                        padding: var(--size-2) 0;
                    }
                }

                .components_tabs_vertical [role="tab"][aria-selected="true"] {
                    border-color: var(--shade-10); 
                }
            </style>
            <div class="flex sm:flex-col gap-6 components_tabs_vertical" data-dgtabs>
                <div class="flex flex-col sm:flex-row gap-2" role="tablist" aria-labelledby="tablist_1">
                    <button class="py-1 pr-3 w-max" id="tab_1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel_1">
                        <span class="h6">Tab 1</span>
                    </button>
                    <button class="py-1 pr-3 w-max" id="tab_2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel_2" tabindex="-1">
                        <span class="h6">Tab 2</span>
                    </button>
                    <button class="py-1 pr-3 w-max" id="tab_3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel_3" tabindex="-1">
                        <span class="h6">Tab 3</span>
                    </button>
                </div>
                <div id="tabpanel_1" role="tabpanel" tabindex="0" aria-labelledby="tab_1" aria-hidden="false">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="tabpanel_2" role="tabpanel" tabindex="0" aria-labelledby="tab_2" aria-hidden="true">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="tabpanel_3" role="tabpanel" tabindex="0" aria-labelledby="tab_3" aria-hidden="true">
                    <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        `,
    }
}
