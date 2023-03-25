import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

// https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss
export async function get(context: APIContext) {
  const allBlogPosts = await getCollection('blog');

  return rss({
    title: "Ben Stolovitz's blog",
    description: 'Yet another blog',
    site: context.site?.toString(),
    items: allBlogPosts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.publishDate,
      link: `/posts/${p.slug}/`
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}