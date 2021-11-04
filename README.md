# eslint-plugin-no-catch-destructuring

Avoid Safari <=13 ES6 bug by not destructuring in catch blocks

If you're curious, here's the specific bug: https://bugs.webkit.org/show_bug.cgi?id=189914

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-catch-destructuring`:

```sh
npm install eslint-plugin-no-catch-destructuring --save-dev
```

## Usage

Add `no-catch-destructuring` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["no-catch-destructuring"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "no-catch-destructuring/no-catch-destructuring": 2
  }
}
```
