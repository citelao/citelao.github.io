import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

// https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss
export function get(context: APIContext) {
  return rss({
    // `<title>` field in output xml
    title: "Ben Stolovitz's blog",
    // `<description>` field in output xml
    description: 'Yet another blog',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: [],
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}