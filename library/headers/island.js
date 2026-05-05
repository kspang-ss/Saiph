const headers_island = {
    'left': {
        slug: 'headers_island_left',
        title: 'Header Island (left)',
        description: 'A basic left aligned island header with call to action.',
        tags: ['aligned left', 'island', 'cta'],
        src_path: 'library/headers/island/left',
        card_thumbnail_name: 'headers_island_left.jpg',
        preview_html: `
            <style>
                .headers_island_left {
                    position: absolute;
                    width: fit-content;
                    top: var(--size-3);
                    left: var(--size-5);
                    border: var(--border);
                    border-radius: var(--border-radius); 
                    height: var(--header-height);
                    transition: height var(--transition);
                }
                .headers_island_left .container {
                    padding: 0 var(--size-3);
                }
                @media (max-width: 600px) {
                    .headers_island_left {
                        display: unset;
                        align-items: unset;
                        width: calc(100% - var(--size-4) * 2);
                        height: 50px;
                        left: var(--size-4);
                    }
                }
                .headers_island_left .logo span {
                    color: var(--header-color);
                }
                .headers_island_left .nav_link {
                    position: relative;
                }
                .headers_island_left .nav_link::after {
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
                .headers_island_left .nav_link:hover::after, .headers_island_left .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_island_left [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_island_left .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_island_left .nav_takeover_toggle_icon::before, .headers_island_left .nav_takeover_toggle_icon::after {
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
                .headers_island_left .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_island_left [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_island_left [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_island_left [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_island_left [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
                [data-dgtakeover-menu] {
                    width: 100%;
                    height: 0;
                    background-color: var(--header-background-color);
                    overflow: hidden;
                    border-radius: var(--border-radius); 
                    transition: height var(--transition);
                }
                [data-dgtakeover-menu] .takeover__content {
                    height: calc(100vh - (var(--header-height) + var(--size-3) * 2));
                    padding-bottom: var(--size-3);
                    opacity: 0;
                    transition: opacity var(--transition);
                }
                [data-dgtakeover-menu].takeover__opening {
                    height: calc(100vh - (var(--header-height) + var(--size-3) * 2));
                }
                [data-dgtakeover-menu].takeover__open .takeover__content {
                    opacity: 1;
                }
                [data-dgtakeover-menu] .nav_link::after {
                    bottom: var(--size-2);
                }
            </style>
            <header class="header headers_island_left">
                <div class="container w-full flex justify-center sm:justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav flex items-center ml-7">
                        <ul class="flex items-center gap-7 hide-sm-down">
                            <li><a href="#" class="nav_link a py-3">Work</a></li>
                            <li><a href="#" class="nav_link a py-3">Proccess</a></li>
                            <li><a href="#" class="nav_link a py-3">About</a></li>
                            <li><a href="#" class="nav_link a py-3">Blog</a></li>
                            <li><a href="#" class="button button_primary">Contact</a></li>
                        </ul>
                    </nav>
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
    'center': {
        slug: 'headers_island_center',
        title: 'Header Island (center)',
        description: 'A basic center aligned island header with call to action.',
        tags: ['aligned center', 'island', 'cta'],
        src_path: 'library/headers/island/center',
        card_thumbnail_name: 'headers_island_center.jpg',
        preview_html: `
            <style>
                .headers_island_center {
                    position: absolute;
                    width: fit-content;
                    top: var(--size-3);
                    left: 50%;
                    transform: translateX(-50%);
                    border: var(--border);
                    border-radius: var(--border-radius); 
                    height: var(--header-height);
                    transition: height var(--transition);
                }
                .headers_island_center .container {
                    padding: 0 var(--size-3);
                }
                @media (max-width: 600px) {
                    .headers_island_center {
                        display: unset;
                        align-items: unset;
                        width: calc(100% - var(--size-4) * 2);
                        height: 50px;
                    }
                }
                .headers_island_center .logo span {
                    color: var(--header-color);
                }
                .headers_island_center .nav_link {
                    position: relative;
                }
                .headers_island_center .nav_link::after {
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
                .headers_island_center .nav_link:hover::after, .headers_island_center .nav_link.nav_link_current::after {
                    right: auto;
                    left: 0;
                    width: 100%;
                }
                .headers_island_center [data-dgtakeover-toggle] {
                    cursor: pointer;
                }
                .headers_island_center .nav_takeover_toggle_icon {
                    display: block;
                    width: 16px;
                    height: 25px;
                    position: relative;
                }
                .headers_island_center .nav_takeover_toggle_icon::before, .headers_island_center .nav_takeover_toggle_icon::after {
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
                .headers_island_center .nav_takeover_toggle_icon::before {
                    transform: translateY(15.5px);
                }
                .headers_island_center [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px); 
                }
                .headers_island_center [data-dgtakeover-toggle].takeover__opening .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px);
                }
                .headers_island_center [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::before {
                    transform: translateY(11.5px) rotate(45deg);
                }
                .headers_island_center [data-dgtakeover-toggle].takeover__open .nav_takeover_toggle_icon::after {
                    transform: translateY(11.5px) rotate(-45deg);
                }
                [data-dgtakeover-menu] {
                    width: 100%;
                    height: 0;
                    background-color: var(--header-background-color);
                    overflow: hidden;
                    border-radius: var(--border-radius); 
                    transition: height var(--transition);
                }
                [data-dgtakeover-menu] .takeover__content {
                    height: calc(100vh - (var(--header-height) + var(--size-3) * 2));
                    padding-bottom: var(--size-3);
                    opacity: 0;
                    transition: opacity var(--transition);
                }
                [data-dgtakeover-menu].takeover__opening {
                    height: calc(100vh - (var(--header-height) + var(--size-3) * 2));
                }
                [data-dgtakeover-menu].takeover__open .takeover__content {
                    opacity: 1;
                }
                [data-dgtakeover-menu] .nav_link::after {
                    bottom: var(--size-2);
                }
            </style>
            <header class="header headers_island_center">
                <div class="container w-full flex justify-center sm:justify-between items-center">
                    <div class="logo">
                        <a href="#" class="a flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a90e2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path>
                            </svg>
                            <span class="font-bold">Saiph</span>
                        </a>
                    </div>
                    <nav class="nav flex items-center ml-7">
                        <ul class="flex items-center gap-7 hide-sm-down">
                            <li><a href="#" class="nav_link a py-3">Work</a></li>
                            <li><a href="#" class="nav_link a py-3">Proccess</a></li>
                            <li><a href="#" class="nav_link a py-3">About</a></li>
                            <li><a href="#" class="nav_link a py-3">Blog</a></li>
                            <li><a href="#" class="button button_primary">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="flex items-center">
                        <a data-dgtakeover-toggle="nav_takeover" class="nav_takeover_toggle a flex items-center gap-2 py-3 hide-sm-up">
                            <span>Menu</span>
                            <i class="nav_takeover_toggle_icon"></i>
                        </a>
                    </div>
                </div>
            </header>
        `,
    }
}
