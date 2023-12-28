import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async () => {
  redirect(307, '/faqs/faq');
}




