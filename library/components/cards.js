const components_cards = {
    'default': {
        slug: 'components_cards_default',
        title: 'Card',
        tags: ['cards'],
        src_path: 'library/components/cards/default',
        card_thumbnail_name: 'components_cards_default.jpg',
        preview_html: `
            <style>
                .components_cards_default .components_cards_default__button svg {
                    position: relative;
                    transition: transform var(--transition);
                }
                .components_cards_default .components_cards_default__button:hover svg {
                    transform: translateX(var(--size-2))
                }
            </style>
            <div class="border rounded py-7 px-6 h-full components_cards_default">
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col">
                        <h4 class="h4 mb-4">This is a H4</h4>
                        <p class="p mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a href="#" class="button button_tertiary w-max flex items-center gap-2 pl-0 components_cards_default__button">
                        <span>Tertiary Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                    </a>
                </div>
            </div>
        `,
    },
    'icon': {
        slug: 'components_cards_icon',
        title: 'Card w/ Icon',
        tags: ['cards', 'icon'],
        src_path: 'library/components/cards/icon',
        card_thumbnail_name: 'components_cards_icon.jpg',
        preview_html: `
            <style>
                .components_cards_icon .components_cards_icon__button svg {
                    position: relative;
                    transition: transform var(--transition);
                }
                .components_cards_icon .components_cards_icon__button:hover svg {
                    transform: translateX(var(--size-2))
                }
            </style>
            <div class="border rounded py-7 px-6 h-full components_cards_icon">
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col">
                        <h4 class="order-1 h4 mb-4">This is a H4</h4>
                        <p class="order-2 p mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <svg class="order-0 mb-4 svg-stroke-color" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.333 5a3.333 3.333 0 0 0 -3.333 3.333"/><path d="M31.667 5a3.333 3.333 0 0 1 3.333 3.333"/><path d="M35 31.667a3.333 3.333 0 0 1 -3.333 3.333"/><path d="M8.333 35a3.333 3.333 0 0 1 -3.333 -3.333"/><path d="M15 5h1.667"/><path d="M15 35h1.667"/><path d="M23.333 5h1.667"/><path d="M23.333 35h1.667"/><path d="M5 15v1.667"/><path d="M35 15v1.667"/><path d="M5 23.333v1.667"/><path d="M35 23.333v1.667"/></svg>
                    </div>
                    <a href="#" class="button button_tertiary w-max flex items-center gap-2 pl-0 components_cards_icon__button">
                        <span>Tertiary Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                    </a>
                </div>
            </div>
        `,
    },
    'eyebrow': {
        slug: 'components_cards_eyebrow',
        title: 'Card w/ Eyebrow',
        tags: ['cards', 'eyebrow'],
        src_path: 'library/components/cards/eyebrow',
        card_thumbnail_name: 'components_cards_eyebrow.jpg',
        preview_html: `
            <style>
                .components_cards_eyebrow .components_cards_eyebrow__button svg {
                    position: relative;
                    transition: transform var(--transition);
                }
                .components_cards_eyebrow .components_cards_eyebrow__button:hover svg {
                    transform: translateX(var(--size-2))
                }
            </style>
            <div class="border rounded py-7 px-6 h-full components_cards_eyebrow">
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col">
                        <div class="small font-bold uppercase text-shade-8 mb-2">Eyebrow</div>
                        <h4 class="h4 mb-4">This is a H4</h4>
                        <p class="p mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a href="#" class="button button_tertiary w-max flex items-center gap-2 pl-0 components_cards_eyebrow__button">
                        <span>Tertiary Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                    </a>
                </div>
            </div>
        `,
    },
    'image': {
        slug: 'components_cards_image',
        title: 'Card w/ Image',
        tags: ['cards', 'image'],
        src_path: 'library/components/cards/image',
        card_thumbnail_name: 'components_cards_image.jpg',
        preview_html: `
            <style>
                .components_cards_image .components_cards_image__button svg {
                    position: relative;
                    transition: transform var(--transition);
                }
                .components_cards_image .components_cards_image__button:hover svg {
                    transform: translateX(var(--size-2))
                }
            </style>
            <div class="border rounded p-5 h-full components_cards_image">
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col">
                        <div class="w-full h-11 rounded border bg-shade-2 mb-5 components_cards_image__image"></div>
                        <h4 class="h4 mb-4">This is a H4</h4>
                        <p class="p mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <a href="#" class="button button_tertiary w-max flex items-center gap-2 pl-0 components_cards_image__button">
                        <span>Tertiary Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                    </a>
                </div>
            </div>
        `,
    },
    'tag': {
        slug: 'components_cards_tag',
        title: 'Card w/ Tags',
        tags: ['cards', 'tag'],
        src_path: 'library/components/cards/tag',
        card_thumbnail_name: 'components_cards_tag.jpg',
        preview_html: `
            <style>
                .components_cards_tag .components_cards_tag__button svg {
                    position: relative;
                    transition: transform var(--transition);
                }
                .components_cards_tag .components_cards_tag__button:hover svg {
                    transform: translateX(var(--size-2))
                }
            </style>
            <div class="border rounded p-5 h-full components_cards_tag">
                <div class="flex flex-col justify-between h-full">
                    <div class="flex flex-col">
                        <div class="order-1 h4 mb-4">This is a H4</div>
                        <p class="order-2 p mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div class="order-0 flex justify-end flex-wrap gap-2 mb-4">
                            <div class="small bg-primary text-shade-0 rounded px-2 py-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.838 1.909a8.75 8.75 0 0 1 3.325 0"/><path d="M12.163 19.091a8.75 8.75 0 0 1 -3.325 0"/><path d="M15.408 3.256a8.75 8.75 0 0 1 2.354 2.363"/><path d="M1.909 12.163a8.75 8.75 0 0 1 0 -3.325"/><path d="M17.744 15.408a8.75 8.75 0 0 1 -2.363 2.354"/><path d="M19.091 8.838a8.75 8.75 0 0 1 0 3.325"/><path d="M3.256 5.592a8.75 8.75 0 0 1 2.363 -2.354"/><path d="M5.592 17.744a8.75 8.75 0 0 1 -2.354 -2.363"/></svg>
                                <span class="leading-none">Event</span>
                            </div>
                            <div class="small bg-secondary text-shade-10 rounded px-2 py-1 flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.838 1.909a8.75 8.75 0 0 1 3.325 0"/><path d="M12.163 19.091a8.75 8.75 0 0 1 -3.325 0"/><path d="M15.408 3.256a8.75 8.75 0 0 1 2.354 2.363"/><path d="M1.909 12.163a8.75 8.75 0 0 1 0 -3.325"/><path d="M17.744 15.408a8.75 8.75 0 0 1 -2.363 2.354"/><path d="M19.091 8.838a8.75 8.75 0 0 1 0 3.325"/><path d="M3.256 5.592a8.75 8.75 0 0 1 2.363 -2.354"/><path d="M5.592 17.744a8.75 8.75 0 0 1 -2.354 -2.363"/></svg>
                                <span class="leading-none">Remote</span>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="button button_tertiary w-max flex items-center gap-2 pl-0 components_cards_image__button">
                        <span>Tertiary Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg> 
                    </a>
                </div>
            </div>
        `,
    }
}

