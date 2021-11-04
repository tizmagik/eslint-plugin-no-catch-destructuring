/**
 * @fileoverview Avoid destructuring in catch block
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Avoid destructuring in catch blocks to workaround critical Safari <=v13 ES6 bug",
      // category: "Fill me in",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"

    schema: [],

    messages: {
      avoidCatchDestructuring:
        "Avoid destructuring in catch blocks to workaround critical Safari <=v13 ES6 bug",
    },
  },

  create: function (context) {
    return {
      CatchClause(node) {
        if (node.param && node.param.type === "ObjectPattern") {
          context.report({
            node,
            messageId: "avoidCatchDestructuring",
          });
        }
      },
    };
  },
};
