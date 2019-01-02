# installation

- run `npm install` to install tools
- run `grunt default` to build theme/scripts

# setup and update algolia search

- copy `.env.sample` to `.env`
- fill in the info from https://www.algolia.com/apps &gt; API keys
- run `npm install -g atomic-algolia` to install globally 
- run `npm run algolia` or `atomic-algolia` whenever there are updates to the content

# preparing fonts

```
# parse website
DEBUG=glyphhanger* glyphhanger http://localhost:1313 --spider --spider-limit=0 --formats=ttf,woff,woff-zopfli,woff2 --subset=*.ttf --css

https://github.com/filamentgroup/glyphhanger/blob/master/README.md
https://afasterweb.com/2018/03/09/subsetting-fonts-with-glyphhanger/
```

# Relevant Hugo Docs

- shortcodes: https://gohugo.io/content-management/shortcodes/
- references: https://gohugo.io/content-management/cross-references/
