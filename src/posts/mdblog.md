---
path: /blog/mdblog
title: How I made this non-blog
description: How to create a static website using Markdown and webpack.
author: Ahmad Game
date: 2018-12-25
---

# DIY static website builder

## Let's start with Why
A number of years ago I listened to a talk by [Scott Hanselman][1] where he spoke about the reason he started blogging. He said, and I paraphrase, _"It's a great way for me to remember stuff, because I can google my past thoughts."_

That really stuck with me for some reason and I thought it was a very simple, unpretentious reason to start writing stuff on the internet.
I never thought I would do the same thing myself because, well, I don't have that many thoughts to begin with. Certainly nothing worth googling.

Recently however, it has been more common for me to have thoughts like _"Hmm, I think I've read something about that somewhere."_ or _"I think I've solved this exact problem before."_. Suddenly I realized that I might have the same problem Hanselman had.

## Then what?
In order for me to start writing things down at all I had to make it super easy for myself. It had to be as easy as opening a text file and just writing things down.

I already use [Markdown][2] for most of my notes which translates well into HTML so it seemed like a good choice.
However I felt like most of the available static website builders like [Jekyll][4] and [Hexo][3] were a bit too much overhead.

After a bit of googling I stumbled upon [this post by Omar Delarosa][5] which solves my exact problem using [webpack][6]. I already had a personal website built with webpack so adding the rendering of Markdown looked to be the easiest way forward.
So without further due, here is...

## How I made this non-blog

So the basic problems we want to solve are:
1. Take some Markdown and convert it into HTML.
Which is exactly what [marked][7] does.

   _Note: I'm using [meta-marked][8] to do this because it allows you to add metadata, like title, author and description in the Markdown file as well as the actual content._

2. Then we want to take that HTML code and put that into an `.html` file together with any `<style>`, `<link>`, `<script>` and metadata we want to include.
Which is exactly what [html-webpack-plugin][9] does.

So in order for us to be able to create a website with multiple different pages, there are two key features in `html-webpack-plugin` that we need:

### 1. Generating multiple `.html` pages
You can add as many instances of the `HtmlWebpackPlugin` as you want to the `plugins` array to generate multiple pages.

<div class="code-filename">webpack.config.js</div>

```js
module.exports = {
  entry: {
    index: 'index.js',
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      // All of your bundle loaders should go here...
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'template1.html',
          title: 'Page 1'
      }),
      new HtmlWebpackPlugin({
          template: 'template2.html',
          title: 'Page 2'
      })
  ]
};
```

Or use the [spread operator][13] to do the same thing with less code.

<div class="code-filename">webpack.config.js</div>

```js
// returns an array of HtmlWebpackPlugin
const createPages = () => [1, 2].map(n => createPage(n)));

const createPage = (n) => new HtmlWebpackPlugin({
    template: `template${n}`,
    title: `Page ${n}`
});

module.exports = {
  // ...

  plugins: [
      // Spread the result into the plugins array
      ...createPages()
  ]
};
```

### 2. Extending the [`options`][10] object to inject our Markdown
The `html-webpack-plugin` allows for quite a few options for customizing the generated `.html` file, like setting the title of the page, favicon or use a certain template for the page.
Here is an example of using the `options` object:

<div class="code-filename">webpack.config.js</div>

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //...
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Hello World!',
          template: 'template.html'
      })
  ]
};
```

<div class="code-filename">template.html</div>

```html
<!DOCTYPE html>
<html>

<head>
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
</head>

<body>
</body>

</html>
```
And the result will be an `.html` file with the title 'Hello World'.

The neat thing about this is that you can extend the `options` object with whatever you want, and use those "custom" values in your template.

<div class="code-filename">webpack.config.js</div>

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //...
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Hello World!',
          template: 'template.html',
          myCustomValue: 'Cool like Fonzy'
      })
  ]
};
```

<div class="code-filename">template.html</div>

```html
<!DOCTYPE html>
<html>

<head>
  <title>
    <%= htmlWebpackPlugin.options.title %>
  </title>
</head>

<body>
    <h1><%= htmlWebpackPlugin.options.myCustomValue %></h1>
</body>

</html>
```

And the result will look like this:

<div class="code-filename">template.html</div>

```html
<!DOCTYPE html>
<html>

<head>
  <title>
    Hello World
  </title>
</head>

<body>
    <h1>Cool like Fonzy</h1>
</body>

</html>
```

This feature is the key to injecting the converted Markdown content into the generated `.html` file.

### Now let's combine the two features

<div class="code-filename">webpack.config.js</div>

```js
// This is just an example.
// The actual files will probably be
// loaded from .md files
const myMarkdownFiles = [
  {
    name: 'index.md',
    content: '# Hello World'
  }
];
const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require('meta-marked');

const createPage = (markdownFile) => {
  // Convert markdown content to HTML
  const content = marked(markdownFile.content);

  return new HtmlWebpackPlugin(/*options:*/{
    // Standard options found in the documentation
    // https://github.com/jantimon/html-webpack-plugin#options
    filename: `${markdownFile.name}.html`,
    template: 'template.html',
    title: content.meta.title,
    // This is an arbitrary extension to the options object
    // used to inject the converted markdown content.
    content: content.html
  });
};

module.exports = {
  //...
  plugins: [
    // Spread the returned HtmlWebpackPlugin config
    // objects into the plugins array.
    // You can pass as many as you want.
    ...myMarkdownFiles.map(markdownFile => createPage(markdownFile))
  ]
};
```

Voilà, now you have a static website, build with Markdown

I've compiled an MVP to create a static website using this method that you can [check out here.][11]
For a slightly more advanced setup combining my original website and the newer Markdown parts you can check out the source code of this very website, [which is available here.][12]

[1]: https://www.hanselman.com/
[2]: https://daringfireball.net/projects/markdown/
[3]: https://hexo.io/
[4]: https://jekyllrb.com/
[5]: https://www.omardelarosa.com/posts/making-a-markdown-blog-using-webpack.html
[6]: https://webpack.js.org/
[7]: https://marked.js.org/#/README.md
[8]: https://github.com/j201/meta-marked
[9]: https://github.com/jantimon/html-webpack-plugin
[10]: https://github.com/jantimon/html-webpack-plugin#options
[11]: https://github.com/a-game/markdown-website
[12]: https://github.com/a-game/a-game.github.io
[13]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax