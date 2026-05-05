const footers_base = {
    'default': {
        slug: 'footers_base_default',
        title: 'Defualt footer',
        description: 'A basic footer with a right aligned menu.',
        tags: ['base', 'footer', 'navigation'],
        src_path: 'library/footers/default',
        card_thumbnail_name: 'footers_base_default.jpg',
        preview_html: `
        <footer class="footers_base_default border-t py-9">
            <div class="container flex justify-between">
                <div>
                    <a href="#" class="a flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-color" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
                       <span class="text-xl font-bold">Saiph</span> 
                    </a>
                </div>
                <div class="flex gap-6">
                    <div class="flex flex-col gap-2">
                        <a href="#" class="a font-bold">Company</a>
                        <a href="#" class="a">About us</a>
                        <a href="#" class="a">Careers</a>
                        <a href="#" class="a">Security</a>
                        <a href="#" class="a">Status</a>
                        <a href="#" class="a">Terms & privacy</a>
                    </div>
                    <div class="flex flex-col gap-2">
                        <a href="#" class="a font-bold">Download</a>
                        <a href="#" class="a">iOS & Android</a>
                        <a href="#" class="a">Mac & Windows</a>
                        <a href="#" class="a">Calendar</a>
                        <a href="#" class="a">Web Clipper</a>
                    </div>
                    <div class="flex flex-col gap-2">
                        <a href="#" class="a font-bold">Resources</a>
                        <a href="#" class="a">Help center</a>
                        <a href="#" class="a">Pricing</a>
                        <a href="#" class="a">Blog</a>
                        <a href="#" class="a">Community</a>
                        <a href="#" class="a">Integrations</a>
                        <a href="#" class="a">Templates</a>
                    </div>
                </div>
            </div>
        </footer>
        `,
    },
}