---
published: true
---

## First fix that sidebar
That giant site title looks cool with a small title like "Hyde", but for someting longer like "justin boyson dot com" it looks ridiculous.

Pretty simple step here. I wanted the sidebar title a _lot_ smaller and not stuck to the bottom. Hyde is a Poole based Jekyll theme so it's styles are split across a few different files.

- hyde.css
- poole.css
- syntax.css

For my purposes I don't need to mess with syntax.css. Just knock the font size down for the title and leads. To stop floating the content to the bottom I just removed the `sidebar-sticky` class from the sidebar.

Muuuuuch better.

## Next fix up these bogus URLs
This turned out to be pretty easy. Info from [here](http://joshualande.com/short-urls-jekyll/), and [here](http://www.davehulihan.com/2012/08/17/jekyll-pages-with-pretty-urls.html) led me to just set the permalinks on each page. I thought about updating `_config.yml` to set each permalink to the title permalink: "/:title", but ultimately I wanted greater control over the urls.