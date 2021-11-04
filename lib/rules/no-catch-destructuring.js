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
      description: "Avoid destructuring in catch block",
      // category: "Fill me in",
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"

    schema: [],

    messages: {
      avoidCatchDestructuring: "Avoid catch destructuring",
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
