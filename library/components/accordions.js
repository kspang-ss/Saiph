const components_accordions = {
    'default': {
        slug: 'components_accordions_default',
        title: 'Accordion',
        tags: ['accordions'],
        src_path: 'library/components/accordions/default',
        card_thumbnail_name: 'components_accordions_default.jpg',
        preview_html: `
            <style>
                .components_accordions_default [data-dgaccordion-panel] {
                    transition: grid-template-rows var(--transition);
                }

                .components_accordions_default [data-dgaccordion-trigger] .accordion_icon path:last-child {
                    transform: rotate(0deg);
                    transform-origin: 10px 10px;
                    transition: transform var(--transition);
                    will-change: transform;
                }

                .components_accordions_default [data-dgaccordion-trigger][aria-expanded="true"] .accordion_icon path:last-child {
                    transform: rotate(90deg);
                }
            </style>
            <div class="components_accordions_default" data-dgaccordion>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_1" id="accordion_1" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 1</span>
                        <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,10 L18,10"/>
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10,2 L10,18"/>
                        </svg>
                </button>
                <div class="border-b" id="panel_1" role="region" aria-labelledby="accordion_1" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_2" id="accordion_2" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 2</span>
                        <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,10 L18,10"/>
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10,2 L10,18"/>
                        </svg>
                </button>
                <div class="border-b" id="panel_2" role="region" aria-labelledby="accordion_2" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_3" id="accordion_3" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 3</span>
                        <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20">
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,10 L18,10"/>
                            <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10,2 L10,18"/>
                        </svg>
                </button>
                <div id="panel_3" role="region" aria-labelledby="accordion_3" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
    },
    'arrow': {
        slug: 'components_accordions_arrow',
        title: 'Accordion w/ Arrows',
        tags: ['accordions'],
        src_path: 'library/components/accordions/arrow',
        card_thumbnail_name: 'components_accordions_arrow.jpg',
        preview_html: `
            <style>
                .components_accordions_arrow [data-dgaccordion-panel] {
                    transition: grid-template-rows var(--transition);
                }

                .components_accordions_arrow [data-dgaccordion-trigger] .accordion_icon path {
                    transition: d var(--transition);
                }

                .components_accordions_arrow [data-dgaccordion-trigger][aria-expanded="true"] .accordion_icon path {
                    d: path("M2,14 L10,6 L18,14");
                }
            </style>
            <div class="components_accordions_arrow" data-dgaccordion>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_1" id="accordion_1" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 1</span>
                    <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,6 L10,14 L18,6"/></svg>
                </button>
                <div class="border-b" id="panel_1" role="region" aria-labelledby="accordion_1" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_2" id="accordion_2" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 2</span>
                    <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,6 L10,14 L18,6"/></svg>
                </button>
                <div class="border-b" id="panel_2" role="region" aria-labelledby="accordion_2" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <button class="w-full flex justify-between items-center py-2" type="button" aria-expanded="false" aria-controls="panel_3" id="accordion_3" data-dgaccordion-trigger>
                    <span class="h6">Accordion Title 3</span>
                    <svg class="svg-stroke-color accordion_icon" viewBox="0 0 20 20" width="20" height="20"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2,6 L10,14 L18,6"/></svg>
                </button>
                <div id="panel_3" role="region" aria-labelledby="accordion_3" aria-hidden="true" data-dgaccordion-panel>
                    <div>
                        <div class="pt-2 pr-2 pb-4 pl-2">
                            <p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
    }
}
