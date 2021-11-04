const RuleTester = require("eslint").RuleTester;
const rule = require("../../../lib/rules/no-catch-destructuring");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

const errors = [
  {
    type: "CatchClause",
    message:
      "Avoid destructuring in catch blocks to workaround critical Safari <=v13 ES6 bug",
  },
];

const nonDestructuringCode = `try {
  console.log('good code');
} catch (e) {
  console.error(e);
}`;

const destructringInsideBlockCode = `try {
  console.log('good code');
} catch (e) {
  const { message } = e;
  console.error(message);
}`;

const destructuringCode = `try {
  console.log('bad code');
} catch ({ message }) {
  console.error(message);
}`;

ruleTester.run("no-catch-destructuring", rule, {
  valid: [nonDestructuringCode, destructringInsideBlockCode],
  invalid: [
    {
      code: destructuringCode,
      errors,
    },
  ],
});
