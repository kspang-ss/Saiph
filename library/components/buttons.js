const components_buttons = {
    'primary': {
        slug: 'components_buttons_primary',
        title: 'Button Primary',
        tags: ['primary', 'buttons'],
        src_path: 'library/components/buttons/primary',
        card_thumbnail_name: 'components_buttons_primary.jpg',
        preview_html: `<button class="button button_primary components_buttons_primary">Primary Button</button>`,
    },
    'primary-icon': {
        slug: 'components_buttons_primary-icon',
        title: 'Button Primary w/ Icon',
        tags: ['primary', 'buttons'],
        src_path: 'library/components/buttons/primary-icon',
        card_thumbnail_name: 'components_buttons_primary-icon.jpg',
        preview_html: `
            <style>
                .components_buttons_primary-icon {
                    overflow: hidden;
                    position: relative;
                }
                .components_buttons_primary-icon::before {
                    content: '';
                    position: absolute;
                    background-color: var(--buttons-primary-text-color);
                    width: 0%;
                    height: 0%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: var(--border-radius);
                    transition: width var(--transition), height var(--transition);

                }
                .components_buttons_primary-icon:hover {
                    background-color: var(--buttons-primary-background-color);
                }
                .components_buttons_primary-icon:hover::before {
                    width: 105%;
                    height: 105%;
                }
            </style>
            <button class="button button_primary flex items-center gap-3 components_buttons_primary-icon">
                <svg class="z-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
                <span class="z-1">Primary Button</span>
            </button>
        `,
    },
    'primary-arrow': {
        slug: 'components_buttons_primary-arrow',
        title: 'Button Primary w/ Arrow',
        tags: ['primary', 'buttons'],
        src_path: 'library/components/buttons/primary-arrow',
        card_thumbnail_name: 'components_buttons_primary-arrow.jpg',
        preview_html: `
            <style>
                .components_buttons_primary-arrow .components_buttons_primary-arrow__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_primary-arrow svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translateX(-100%);
                }
                .components_buttons_primary-arrow:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translateX(0%);
                }
            </style>
            <button class="button button_primary flex items-center gap-2 components_buttons_primary-arrow">
                <span>Read More</span>
                <div class="flex components_buttons_primary-arrow__arrow-mask">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
            </button>
        `,
    },
    'primary-arrow-up-right': {
        slug: 'components_buttons_primary-arrow-up-right',
        title: 'Button Primary w/ Arrow (up right)',
        tags: ['primary', 'buttons'],
        src_path: 'library/components/buttons/primary-arrow-up-right',
        card_thumbnail_name: 'components_buttons_primary-arrow-up-right.jpg',
        preview_html: `
            <style>
                .components_buttons_primary-arrow-up-right .components_buttons_primary-arrow-up-right__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_primary-arrow-up-right svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translate(-100% , 0%);
                }
                .components_buttons_primary-arrow-up-right:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translate(0% , -100%);
                }
            </style>
            <button class="button button_primary flex items-center gap-2 components_buttons_primary-arrow-up-right">
                <span>Read More</span>
                <div class="grid grid-cols-2 components_buttons_primary-arrow-up-right__arrow-mask">
                    <svg class="col-span-2 col-start-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                </div>
            </button>
        `,
    },
    'secondary': {
        slug: 'components_buttons_secondary',
        title: 'Button Secondary',
        tags: ['secondary', 'buttons'],
        src_path: 'library/components/buttons/secondary',
        card_thumbnail_name: 'components_buttons_secondary.jpg',
        preview_html: `<button class="button button_secondary components_buttons_secondary">Secondary Button</button>`,
    },
    'secondary-icon': {
        slug: 'components_buttons_secondary-icon',
        title: 'Button Secondary w/ Icon',
        tags: ['primary', 'buttons'],
        src_path: 'library/components/buttons/secondary-icon',
        card_thumbnail_name: 'components_buttons_secondary-icon.jpg',
        preview_html: `
            <style>
                .components_buttons_secondary-icon {
                    overflow: hidden;
                    position: relative;
                }
                .components_buttons_secondary-icon::before {
                    content: '';
                    position: absolute;
                    background-color: var(--buttons-secondary-text-color);
                    width: 0%;
                    height: 0%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: var(--border-radius);
                    transition: width var(--transition), height var(--transition);

                }
                .components_buttons_secondary-icon:hover {
                    opacity: 1;
                }
                .components_buttons_secondary-icon span, .components_buttons_secondary-icon svg {
                    transition: filter var(--transition);
                }
                .components_buttons_secondary-icon:hover span, .components_buttons_secondary-icon:hover svg {
                    filter: invert(100%);
                }
                .components_buttons_secondary-icon:hover::before {
                    width: 105%;
                    height: 105%;
                }
            </style>
            <button class="button button_secondary flex items-center gap-3 components_buttons_secondary-icon">
                <svg class="z-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
                <span class="z-1">Secondary Button</span>
            </button>
        `,
    },
    'secondary-arrow': {
        slug: 'components_buttons_secondary-arrow',
        title: 'Button Secondary w/ Arrow',
        tags: ['secondary', 'buttons'],
        src_path: 'library/components/buttons/secondary-arrow',
        card_thumbnail_name: 'components_buttons_secondary-arrow.jpg',
        preview_html: `
            <style>
                .components_buttons_secondary-arrow .components_buttons_secondary-arrow__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_secondary-arrow svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translateX(-100%);
                }
                .components_buttons_secondary-arrow:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translateX(0%);
                }
            </style>
            <button class="button button_secondary flex items-center gap-2 components_buttons_secondary-arrow">
                <span>Read More</span>
                <div class="flex components_buttons_secondary-arrow__arrow-mask">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
            </button>
        `,
    },
    'secondary-arrow-up-right': {
        slug: 'components_buttons_secondary-arrow-up-right',
        title: 'Button Secondary w/ Arrow (up right)',
        tags: ['secondary', 'buttons'],
        src_path: 'library/components/buttons/secondary-arrow-up-right',
        card_thumbnail_name: 'components_buttons_secondary-arrow-up-right.jpg',
        preview_html: `
            <style>
                .components_buttons_secondary-arrow-up-right .components_buttons_secondary-arrow-up-right__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_secondary-arrow-up-right svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translate(-100% , 0%);
                }
                .components_buttons_secondary-arrow-up-right:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translate(0% , -100%);
                }

            <button class="button button_secondary flex items-center gap-2 components_buttons_secondary-arrow-up-right">
                <span>Read More</span>
                <div class="grid grid-cols-2 components_buttons_secondary-arrow-up-right__arrow-mask">
                    <svg class="col-span-2 col-start-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                </div>
            </button>
        `,
    },
    'tertiary': { 
        slug: 'components_buttons_tertiary',
        title: 'Button Tertiary',
        tags: ['tertiary', 'buttons'],
        src_path: 'library/components/buttons/tertiary',
        card_thumbnail_name: 'components_buttons_tertiary.jpg',
        preview_html: `<button class="button button_tertiary components_buttons_tertiary">Tertiary Button</button>`,
    },
    'tertiary-icon': { 
        slug: 'components_buttons_tertiary-icon',
        title: 'Button Tertiary w/ Icon',
        tags: ['tertiary', 'buttons'],
        src_path: 'library/components/buttons/tertiary-icon',
        card_thumbnail_name: 'components_buttons_tertiary-icon.jpg',
        preview_html: `
            <style>
                .components_buttons_tertiary-icon {
                    overflow: hidden;
                    position: relative;
                }
                .components_buttons_tertiary-icon::before {
                    content: '';
                    position: absolute;
                    background-color: var(--color-shade-4);
                    width: 0%;
                    height: 0%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: var(--border-radius);
                    transition: width var(--transition), height var(--transition);

                }
                .components_buttons_tertiary-icon:hover::before {
                    width: 105%;
                    height: 105%;
                }
            </style>
            <button class="button button_tertiary flex items-center gap-3 components_buttons_tertiary-icon">
                <svg class="z-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
                <span class="z-1">Tertiary Button</span>
            </button>
        `,
    },
    'tertiary-arrow': { 
        slug: 'components_buttons_tertiary-arrow',
        title: 'Button Tertiary w/ Arrow',
        tags: ['tertiary', 'buttons'],
        src_path: 'library/components/buttons/tertiary-arrow',
        card_thumbnail_name: 'components_buttons_tertiary-arrow.jpg',
        preview_html: `
            <style>
                .components_buttons_tertiary-arrow .components_buttons_tertiary-arrow__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_tertiary-arrow svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translateX(-100%);
                }
                .components_buttons_tertiary-arrow:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translateX(0%);
                }
            </style>
            <button class="button button_tertiary flex items-center gap-2 px-0 components_buttons_tertiary-arrow">
                <span>Read More</span>
                <div class="flex components_buttons_tertiary-arrow__arrow-mask">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
            </button>
        `,
    },
    'tertiary-arrow-up-right': {
        slug: 'components_buttons_tertiary-arrow-up-right',
        title: 'Button Tertiary w/ Arrow (up right)',
        tags: ['secondary', 'buttons'],
        src_path: 'library/components/buttons/tertiary-arrow-up-right',
        card_thumbnail_name: 'components_buttons_tertiary-arrow-up-right.jpg',
        preview_html: `
            <style>
                .components_buttons_tertiary-arrow-up-right .components_buttons_tertiary-arrow-up-right__arrow-mask {
                    width: 1.25rem;
                    height: 1.25rem;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .components_buttons_tertiary-arrow-up-right svg {
                    width: 1.25rem;
                    flex-shrink: 0;
                    transform: translate(-100% , 0%);
                }
                .components_buttons_tertiary-arrow-up-right:hover svg {
                    transition: transform var(--transition), width var(--transition);
                    transform: translate(0% , -100%);
                }

            <button class="button button_tertiary flex items-center gap-2 px-0 components_buttons_tertiary-arrow-up-right">
                <span>Read More</span>
                <div class="grid grid-cols-2 components_buttons_tertiary-arrow-up-right__arrow-mask">
                    <svg class="col-span-2 col-start-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10M7 17 17 7"/></svg>
                </div>
            </button>
        `,
    },
}
