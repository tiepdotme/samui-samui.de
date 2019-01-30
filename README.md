# installation

- run `npm install` to install packages
- run `./scripts/copy-files.sh` to copy used library to the assets folder

# youtube thumbnail

- run `./scripts/convert youtube VIDEOID` to load video thumbnail into static folder

# setup and update algolia search

- copy `.env.sample` to `.env`
- fill in the info from https://www.algolia.com/apps &gt; API keys
- run `npm install -g atomic-algolia` to install globally 
- run `npm run algolia` or `atomic-algolia` whenever there are updates to the content
