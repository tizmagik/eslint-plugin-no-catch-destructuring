# eslint-plugin-no-catch-destructuring

Avoid Safari10 ES6 bug by not destructuring in catch blocks

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
