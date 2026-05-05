const headers_left = {
    'default': {
        slug: 'headers_left_default',
        title: 'Header (left)',
        description: 'A basic header with a left aligned menu.',
        tags: ['aligned left'],
        src_path: 'library/headers/left/default',
        card_thumbnail_name: 'headers_left_default.jpg',
        preview_html: `
            <style>
                .headers_left_default .logo span {
                    color: var(--header-color);
                }
                .headers_left_default .nav_link {
                    position: relative;
                }
                .headers_left_default .nav_link::after {
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
                .headers_left_default .nav_link:hover::after, .headers_left_default .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_left_default [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_left_default .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_left_default .nav_takeover_toggle_icon::before, .headers_left_default .nav_takeover_toggle_icon::after {
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
                .headers_left_default .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_left_default [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_left_default [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_left_default [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_left_default [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
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
            <header class="header headers_left_default">
                <div class="container w-full flex justify-between items-center">
                    <div class="flex items-center">
                        <a href="#" class="a flex items-center gap-2 logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                        <nav class="nav flex items-center ml-7">
                            <ul class="flex items-center gap-7 hide-sm-down">
                                <li><a href="#" class="nav_link a py-3">Work</a></li>
                                <li><a href="#" class="nav_link a py-3">About</a></li>
                                <li><a href="#" class="nav_link a py-3">Blog</a></li>
                                <li><a href="#" class="nav_link a py-3">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center">
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 hide-sm-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </div>
                </div>
            </header>
        `,
    },
    'cta': {
        slug: 'headers_left_cta',
        title: 'Header w/ CTA Button (left)',
        description: 'A header with a left aligned menu with a right aligned call to action button.',
        tags: ['aligned left', 'cta'],
        src_path: 'library/headers/left/cta',
        card_thumbnail_name: 'headers_left_cta.jpg',
        preview_html: `
            <style>
                .headers_left_cta .logo span {
                    color: var(--header-color);
                }
                .headers_left_cta .nav_link {
                    position: relative;
                }
                .headers_left_cta .nav_link::after {
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
                .headers_left_cta .nav_link:hover::after, .headers_left_cta .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_left_cta [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_left_cta .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_left_cta .nav_takeover_toggle_icon::before, .headers_left_cta .nav_takeover_toggle_icon::after {
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
                .headers_left_cta .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_left_cta [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_left_cta [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_left_cta [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_left_cta [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
            </style>
            <header class="header headers_left_cta">
                <div class="container w-full flex justify-between items-center">
                    <div class="flex items-center">
                        <a href="#" class="a flex items-center gap-2 logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                        <nav class="nav flex items-center ml-7">
                            <ul class="flex items-center gap-7 hide-sm-down">
                                <li><a href="#" class="nav_link a py-3">Work</a></li>
                                <li><a href="#" class="nav_link a py-3">Proccess</a></li>
                                <li><a href="#" class="nav_link a py-3">About</a></li>
                                <li><a href="#" class="nav_link a py-3">Blog</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center">
                        <ul class="hide-sm-down">
                            <li><a href="#" class="button button_primary">Contact</a></li>
                        </ul>
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 hide-sm-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </div>
                </div>
            </header>
        `,
    },
    'account': {
        slug: 'headers_left_account',
        title: 'Header w/ Account Buttons (left)',
        description: 'A header with a left aligned menu with a right aligned log in and sign up.',
        tags: ['aligned left', 'account'],
        src_path: 'library/headers/left/account',
        card_thumbnail_name: 'headers_left_account.jpg',
        preview_html: `
            <style>
                .headers_left_account .logo span {
                    color: var(--header-color);
                }
                .headers_left_account .nav_link {
                    position: relative;
                }
                .headers_left_account .nav_link::after {
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
                .headers_left_account .nav_link:hover::after, .headers_left_account .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_left_account [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_left_account .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_left_account .nav_takeover_toggle_icon::before, .headers_left_account .nav_takeover_toggle_icon::after {
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
                .headers_left_account .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_left_account [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_left_account [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_left_account [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_left_account [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
            </style>
            <header class="header headers_left_account">
                <div class="container w-full flex justify-between items-center">
                    <div class="flex items-center">
                        <a href="#" class="a flex items-center gap-2 logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                        <nav class="nav flex items-center ml-7">
                            <ul class="flex items-center gap-7 hide-md-down">
                                <li><a href="#" class="nav_link a py-3">Products</a></li>
                                <li><a href="#" class="nav_link a py-3">Solutions</a></li>
                                <li><a href="#" class="nav_link a py-3">Resources</a></li>
                                <li><a href="#" class="nav_link a py-3">Pricing</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center">
                        <ul class="flex items-center gap-2 hide-sm-down">
                            <li><a href="#" class="button button_secondary hide-md-down">Log in</a></li>
                            <li><a href="#" class="button button_primary">Sign up</a></li>
                        </ul>
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 ml-4 hide-md-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </div>
                </div>
            </header>
        `,
    }, 
    'search': {
        slug: 'headers_left_search',
        title: 'Header w/ Search Field (left)',
        description: 'A header with a right aligned search field and a left aligned menu.',
        tags: ['aligned left', 'search', 'ecommerce'],
        src_path: 'library/headers/left/search',
        card_thumbnail_name: 'headers_left_search.jpg',
        preview_html: `
            <style>
                .headers_left_search .logo span {
                    color: var(--header-color);
                }
                .headers_left_search .input {
                    color: var(--header-color);
                    padding-left: 2.25rem;
                }
                .headers_left_search .input::placeholder {
                    color: var(--header-color);
                    opacity: 0.5;
                }
                .headers_left_search .nav_link {
                    position: relative;
                }
                .headers_left_search .nav_link::after {
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
                .headers_left_search .nav_link:hover::after, .headers_left_search .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_left_search [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_left_search .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_left_search .nav_takeover_toggle_icon::before, .headers_left_search .nav_takeover_toggle_icon::after {
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
                .headers_left_search .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_left_search [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_left_search [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_left_search [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_left_search [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
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
            <header class="header headers_left_search">
                <div class="container w-full flex justify-between items-center gap-6">
                    <div class="flex items-center gap-7">
                        <a href="#" class="a flex items-center gap-2 logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                        <nav class="nav flex items-center hide-md-down">
                            <ul class="flex items-center gap-7">
                                <li>
                                    <a href="#" class="flex items-center gap-2 nav_link a py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-color" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                                        <span>Shop</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-2 nav_link a py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-color" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                                        <span>Account</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="flex items-center gap-2 nav_link a py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-color" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                                        <span class="hide-sm-down">Cart</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="flex items-center gap-5">
                        <div class="relative w-full search-container hide-sm-down">
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-color absolute top-2 left-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
                            <input type="text" class="input" placeholder="Search...">
                        </div>
                        <div class="hide-md-up">
                            <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3">
                                <span>Menu</span>
                                <i class="nav_takeover_toggle_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        `,
    }
}
