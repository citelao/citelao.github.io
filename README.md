# ben.stolovitz.com

## Dev

```bash
# Run the dev server
npm run dev

# Regenerate types
npx astro sync
```

## Inspiration

* https://news.ycombinator.com/item?id=34867314
* https://molodtsov.me/2023/02/how-to-start-your-blog-in-2023/
* https://jvns.ca/blog/2016/09/19/getting-things-done/
* https://danluu.com
* https://devblogs.microsoft.com/oldnewthing/
* https://www.joshwcomeau.com
* https://matthewbutterick.com/chron/
* https://montaigne.io
* https://lapcatsoftware.com/articles/

---

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
