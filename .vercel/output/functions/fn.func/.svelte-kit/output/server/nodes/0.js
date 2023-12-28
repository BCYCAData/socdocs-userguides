import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5q6dG5gF.js","_app/immutable/chunks/contexts.JBvVPhDF.js","_app/immutable/chunks/index.rBajJ9mv.js","_app/immutable/chunks/scheduler.Q2oRtGFl.js","_app/immutable/chunks/index.fY_4XAxg.js","_app/immutable/chunks/stores.6XwcVT7J.js","_app/immutable/chunks/singletons.bOxwbogp.js","_app/immutable/chunks/paths.xiBtOcvy.js","_app/immutable/chunks/kit-docs.tsFGliE6.js"];
export const stylesheets = ["_app/immutable/assets/0.5nkt_NPr.css"];
export const fonts = ["_app/immutable/assets/Inter-VF.roman-latin.r-rvtcCH.woff2","_app/immutable/assets/Inter-VF.italic-latin.CMhJtbL9.woff2","_app/immutable/assets/FiraCode-VF.NdT2gfpk.woff2","_app/immutable/assets/FiraCode-VF.S9RXSyIe.woff"];
