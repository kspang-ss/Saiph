const headers_right = {
    'default': {
        slug: 'headers_right_default',
        title: 'Header (right)',
        description: 'A basic header with a right aligned menu.',
        tags: ['aligned right'],
        src_path: 'library/headers/right/default',
        card_thumbnail_name: 'headers_right_default.jpg',
        preview_html: `
            <style>
                .headers_right_default .logo span {
                    color: var(--header-color);
                }
                .headers_right_default .logo a span {
                    color: var(--header-color);
                }
                .headers_right_default .nav_link {
                    position: relative;
                }
                .headers_right_default .nav_link::after {
                    content: '';
                    position: absolute;
                    bottom: var(--size-1);
                    left: auto;
                    right: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--header-color);
                    transition: width var(--transition);
                }
                .headers_right_default .nav_link:hover::after, .headers_right_default .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_right_default .nav_takeover_toggle {
                    cursor: pointer;
                }
                .headers_right_default .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_right_default .nav_takeover_toggle_icon::before, .headers_right_default .nav_takeover_toggle_icon::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translateY(7.5px);
                    width: 100%;
                    height: 2px;
                    border-radius: 1px;
                    background-color: var(--header-color);
                    transition: transform var(--transition);
                }
                .headers_right_default .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_right_default .nav_takeover_toggle.takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_right_default .nav_takeover_toggle.takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_right_default .nav_takeover_toggle.takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_right_default .nav_takeover_toggle.takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
            </style>
            <header class="header headers_right_default">
                <div class="container w-full flex justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav">
                        <ul class="flex items-center gap-7 hide-md-down">
                            <li><a href="#" class="nav_link a py-3">Products</a></li>
                            <li><a href="#" class="nav_link a py-3">About</a></li>
                            <li><a href="#" class="nav_link a py-3">Blog</a></li>
                            <li><a href="#" class="nav_link a py-3">Contact</a></li>
                        </ul>
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 hide-md-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </nav>
                </div>
            </header>
        `,
    },
    'cta': {
        slug: 'headers_right_cta',
        title: 'Header w/ CTA (right)',
        description: 'A header with a right aligned menu with a call to action button.',
        tags: ['aligned right', 'cta'],
        src_path: 'library/headers/right/cta',
        card_thumbnail_name: 'headers_right_cta.jpg',
        preview_html: `
            <style>
                .headers_right_cta .logo span {
                    color: var(--header-color);
                }
                .headers_right_cta .nav_link {
                    position: relative;
                }
                .headers_right_cta .nav_link::after {
                    content: '';
                    position: absolute;
                    bottom: var(--size-1);
                    left: auto;
                    right: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--header-color);
                    transition: width var(--transition);
                }
                .headers_right_cta .nav_link:hover::after, .headers_right_cta .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_right_cta [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_right_cta .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_right_cta .nav_takeover_toggle_icon::before, .headers_right_cta .nav_takeover_toggle_icon::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translateY(7.5px);
                    width: 100%;
                    height: 2px;
                    border-radius: 1px;
                    background-color: var(--header-color);
                    transition: transform var(--transition);
                }
                .headers_right_cta .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_right_cta [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_right_cta [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_right_cta [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_right_cta [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
            </style>
            <header class="header headers_right_cta">
                <div class="container w-full flex justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav flex items-center">
                        <ul class="flex items-center gap-7 hide-md-down">
                            <li><a href="#" class="nav_link a py-3">Work</a></li>
                            <li><a href="#" class="nav_link a py-3">About</a></li>
                            <li><a href="#" class="nav_link a py-3">Blog</a></li>
                            <li><a href="#" class="button button_primary">Contact</a></li>
                        </ul>
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 hide-md-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </nav>
                </div>
            </header>
        `,
    },
    'mobile': {
        slug: 'headers_right_mobile',
        title: 'Header w/ Takeover Menu Only (right)',
        description: 'A header with a hamberger menu on all breakpoints, no links.',
        tags: ['aligned right', 'mobile'],
        src_path: 'library/headers/right/mobile',
        card_thumbnail_name: 'headers_right_mobile.jpg',
        preview_html: `
            <style>
                .headers_right_mobile .logo span {
                    color: var(--header-color);
                }
                .headers_right_mobile .nav_link {
                    position: relative;
                }
                .headers_right_mobile .nav_link::after {
                    content: '';
                    position: absolute;
                    bottom: var(--size-1);
                    left: auto;
                    right: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--header-color);
                    transition: width var(--transition);
                }
                .headers_right_mobile .nav_link:hover::after, .headers_right_mobile .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_right_mobile [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_right_mobile .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_right_mobile .nav_takeover_toggle_icon::before, .headers_right_mobile .nav_takeover_toggle_icon::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translateY(7.5px);
                    width: 100%;
                    height: 2px;
                    border-radius: 1px;
                    background-color: var(--header-color);
                    transition: transform var(--transition);
                }
                .headers_right_mobile .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_right_mobile [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_right_mobile [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_right_mobile [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_right_mobile [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
                [data-dgtakeover-menu] {
                    width: 100%;
                    height: 0;
                    top: var(--header-height);
                    background-color: var(--header-background-color);
                    overflow: hidden;
                    transition: height var(--transition);
                    position: absolute;
                }
                [data-dgtakeover-menu] .takeover__content {
                    opacity: 0;
                    transition: opacity var(--transition);
                }
                [data-dgtakeover-menu].takeover__opening {
                    height: calc(100vh - var(--header-height));
                }
                [data-dgtakeover-menu].takeover__open .takeover__content {
                    opacity: 1;
                }
                [data-dgtakeover-menu] .nav_link::after {
                    bottom: var(--size-2);
                }
            </style>
            <header class="header headers_right_mobile">
                <div class="container w-full flex justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav flex items-center">
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </nav>
                </div>
            </header>
        `,
    },
    'account': {
        slug: 'headers_right_account',
        title: 'Header w/ Account Buttons (right)',
        description: 'A header with a right aligned menu with log in and sign up.',
        tags: ['aligned right', 'account'],
        src_path: 'library/headers/right/account',
        card_thumbnail_name: 'headers_right_account.jpg',
        preview_html: `
            <style>
                .headers_right_account .logo span {
                    color: var(--header-color);
                }
                .headers_right_account .nav_link {
                    position: relative;
                }
                .headers_right_account .nav_link::after {
                    content: '';
                    position: absolute;
                    bottom: var(--size-1);
                    left: auto;
                    right: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--header-color);
                    transition: width var(--transition);
                }
                .headers_right_account .nav_link:hover::after, .headers_right_account .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_right_account [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_right_account .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_right_account .nav_takeover_toggle_icon::before, .headers_right_account .nav_takeover_toggle_icon::after {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform: translateY(7.5px);
                    width: 100%;
                    height: 2px;
                    border-radius: 1px;
                    background-color: var(--header-color);
                    transition: transform var(--transition);
                }
                .headers_right_account .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_right_account [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_right_account [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_right_account [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_right_account [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
            </style>
            <header class="header headers_right_account">
                <div class="container w-full flex justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav flex items-center">
                        <ul class="flex items-center gap-6 hide-md-down">
                            <li><a href="#" class="nav_link a py-3">Products</a></li>
                            <li><a href="#" class="nav_link a py-3">Solutions</a></li>
                            <li><a href="#" class="nav_link a py-3">Resources</a></li>
                            <li><a href="#" class="nav_link a py-3">Pricing</a></li>
                        </ul>
                        <ul class="flex items-center gap-2 ml-6 hide-sm-down">
                            <li><a href="#" class="button button_secondary hide-md-down">Log in</a></li>
                            <li><a href="#" class="button button_primary">Sign up</a></li>
                        </ul>
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 ml-4 hide-md-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </nav>
                </div>
            </header>
        `,
    }
}