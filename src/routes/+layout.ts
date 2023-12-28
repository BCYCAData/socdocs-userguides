import { createKitDocsLoader } from '@svelteness/kit-docs';

export const prerender = true;

export const load: import('./$types').LayoutLoad = createKitDocsLoader({
  sidebar: {
    '/': null,
    '/faqs': '/faqs',
    '/recording-your-data': '/recording-your-data',
    '/using-your-data': '/using-your-data',
    '/messaging': '/messaging',
  },
});