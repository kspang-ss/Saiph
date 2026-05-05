function layouts_preview_html(full_slug, column_components) {
    const slug_parts = full_slug.split('_');
    const slug = slug_parts[2];
    if (!layouts_columns[slug]) {
        console.error(`Layout with slug "${slug}" not found.`);
        return '';
    }
    let html = '<section class="section ' + full_slug + '"><div class="container ' + layouts_columns[slug].section_class + '">';
    for (let i = 0; i < layouts_columns[slug].column_count; i++) {
        if (i < column_components.length) {
            html += `<div class="${layouts_columns[slug].column_classes[i]}">${column_components[i]}</div>`;
        } 
    }
    html += '</div></section>';
    return html;
}

const layouts_columns = {
    '100': {
        slug: 'layouts_columns_100',
        title: '100% Width Layout',
        description: 'A layout that spans the full width of the viewport.',
        tags: ['100', 'full-width', 'columns'],
        src_path: 'library/layouts/columns/100',
        section_class: 'flex',
        column_count: 1,
        column_classes: ['w-full basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_100', column_components); 
        }
    },
    '50-50': {
        slug: 'layouts_columns_50-50',
        title: '50/50 Column Layout',
        description: 'A layout with two equal-width columns.',
        tags: ['50-50', 'columns'],
        src_path: 'library/layouts/columns/50-50',
        section_class: 'flex gap-8 items-center md:items-start md:flex-col',
        column_count: 2,
        column_classes: ['w-full basis-6-12 md:basis-12-12', 'w-full basis-6-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_50-50', column_components); 
        }
    },
    '25-75': {
        slug: 'layouts_columns_25-75',
        title: '25/75 Column Layout',
        description: 'A layout with one narrow column and one wide column.',
        tags: ['25-75', 'columns'],
        src_path: 'library/layouts/columns/25-75',
        section_class: 'flex gap-8 items-center md:items-start md:flex-col',
        column_count: 2,
        column_classes: ['w-full basis-3-12 md:basis-12-12', 'w-full basis-9-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_25-75', column_components); 
        }
    },
    '75-25': {
        slug: 'layouts_columns_75-25',
        title: '75/25 Column Layout',
        description: 'A layout with one wide column and one narrow column.',
        tags: ['75-25', 'columns'],
        src_path: 'library/layouts/columns/75-25',
        section_class: 'flex gap-8 items-center md:items-start md:flex-col',
        column_count: 2,
        column_classes: ['w-full basis-9-12 md:basis-12-12', 'w-full basis-3-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_75-25', column_components); 
        }
    },
    '33-66': {
        slug: 'layouts_columns_33-66',
        title: '33/66 Column Layout',
        description: 'A layout with one narrow column and one wide column, with a 33% width for the first column.',
        tags: ['33-66', 'columns'],
        src_path: 'library/layouts/columns/33-66',
        section_class: 'flex gap-8 items-center md:items-start md:flex-col',
        column_count: 2,
        column_classes: ['w-full basis-4-12 md:basis-12-12', 'w-full basis-8-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_33-66', column_components); 
        }
    },
    '66-33': {
        slug: 'layouts_columns_66-33',
        title: '66/33 Column Layout',
        description: 'A layout with one wide column and one narrow column, with a 66% width for the first column.',
        tags: ['66-33', 'columns'],
        src_path: 'library/layouts/columns/66-33',
        section_class: 'flex gap-8 items-center md:items-start md:flex-col',
        column_count: 2,
        column_classes: ['w-full basis-8-12 md:basis-12-12', 'w-full basis-4-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_66-33', column_components); 
        }
    },
    '33-33-33': {
        slug: 'layouts_columns_33-33-33',
        title: '33/33/33 Column Layout',
        description: 'A layout with three equal-width columns.',
        tags: ['33-33-33', 'columns'],
        src_path: 'library/layouts/columns/33-33-33',
        section_class: 'flex gap-7 items-center md:items-start md:flex-col',
        column_count: 3,
        column_classes: ['w-full basis-4-12 md:basis-12-12', 'w-full basis-4-12 md:basis-12-12', 'w-full basis-4-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_33-33-33', column_components); 
        }
    },
    '50-25-25': {
        slug: 'layouts_columns_50-25-25',
        title: '50/25/25 Column Layout',
        description: 'A layout with one wide column and two narrow columns.',
        tags: ['50-25-25', 'columns'],
        src_path: 'library/layouts/columns/50-25-25',
        section_class: 'flex gap-7 items-center md:items-start md:flex-col',
        column_count: 3,
        column_classes: ['w-full basis-6-12 md:basis-12-12', 'w-full basis-3-12 md:basis-12-12', 'w-full basis-3-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_50-25-25', column_components); 
        }
    },
    '25-50-25': {
        slug: 'layouts_columns_25-50-25',
        title: '25/50/25 Column Layout',
        description: 'A layout with one narrow column, one wide column, and another narrow column.',
        tags: ['25-50-25', 'columns'],
        src_path: 'library/layouts/columns/25-50-25',
        section_class: 'flex gap-7 items-center md:items-start md:flex-col',
        column_count: 3,
        column_classes: ['w-full basis-3-12 md:basis-12-12', 'w-full basis-6-12 md:basis-12-12', 'w-full basis-3-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_25-50-25', column_components); 
        }
    },
    '25-25-50': {
        slug: 'layouts_columns_25-25-50',
        title: '25/25/50 Column Layout',
        description: 'A layout with two narrow columns and one wide column.',
        tags: ['25-25-50', 'columns'],
        src_path: 'library/layouts/columns/25-25-50',
        section_class: 'flex gap-7 items-center md:items-start md:flex-col',
        column_count: 3,
        column_classes: ['w-full basis-3-12 md:basis-12-12', 'w-full basis-3-12 md:basis-12-12', 'w-full basis-6-12 md:basis-12-12'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_25-25-50', column_components); 
        }
    },
    '25-25-25-25': {
        slug: 'layouts_columns_25-25-25-25',
        title: '25/25/25/25 Column Layout',
        description: 'A layout with four equal-width columns.',
        tags: ['25-25-25-25', 'columns'],
        src_path: 'library/layouts/columns/25-25-25-25',
        section_class: 'grid gap-7 grid-cols-4 md:grid-cols-2 sm:grid-cols-1',
        column_count: 4,
        column_classes: ['w-full', 'w-full', 'w-full', 'w-full'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_25-25-25-25', column_components); 
        }
    },
    '20-20-20-20-20': {
        slug: 'layouts_columns_20-20-20-20-20',
        title: '20/20/20/20/20 Column Layout',
        description: 'A layout with five equal-width columns.',
        tags: ['20-20-20-20-20', 'columns'],
        src_path: 'library/layouts/columns/20-20-20-20-20',
        section_class: 'grid gap-7 grid-cols-5 md:grid-cols-2 sm:grid-cols-1',
        column_count: 5,
        column_classes: ['w-full', 'w-full', 'w-full', 'w-full', 'w-full'],
        preview_html: function (column_components) {
            return layouts_preview_html('layouts_columns_20-20-20-20-20', column_components); 
        }
    }
}