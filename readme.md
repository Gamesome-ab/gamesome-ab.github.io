# Gamesome company website.

Hosted on: github pages.
Url: gamesome.io

# Dev
You need to set the `SASS_PATH` environment variable for the build to work. This is due to the Switch material component.

This only has to be set once, so I'm documenting it in case I forget.

```bash
$ export SASS_PATH=./node_modules
$ npm start
```

# Build

```bash
$ npm run build
```

# Publish

```
npm run publish
```