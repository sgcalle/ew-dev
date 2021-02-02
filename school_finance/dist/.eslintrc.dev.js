"use strict";

module.exports = {
  "env": {
    "commonjs": true,
    "es6": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": false,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends": "eslint:recommended",
  "rules": {
    "array-bracket-spacing": ["warn", "never"],
    "brace-style": "warn",
    "camelcase": ["warn", {
      "properties": "never"
    }],
    "comma-dangle": ["off"],
    "comma-spacing": ["warn", {
      "before": false,
      "after": true
    }],
    "curly": ["warn"],
    "eol-last": ["error"],
    "eqeqeq": ["warn", "smart"],
    "indent": ["off", 4, {
      "SwitchCase": 1
    }],
    "key-spacing": ["warn"],
    "keyword-spacing": ["warn"],
    "linebreak-style": 0,
    // ["error", "unix"],
    "no-console": ["warn", {
      "allow": ["warn", "error"]
    }],
    "no-empty": ["warn"],
    "no-multi-spaces": ["warn"],
    "no-redeclare": ["warn"],
    "no-unused-expressions": ["warn"],
    "no-unused-vars": ["warn", {
      "args": "none"
    }],
    "no-use-before-define": ["warn", "nofunc"],
    "object-curly-spacing": ["warn", "never"],
    "quotes": ["off", "double"],
    "semi": ["error", "always"],
    "semi-spacing": ["warn", {
      "before": false,
      "after": true
    }],
    "space-before-blocks": ["warn"],
    "space-before-function-paren": ["warn", {
      "anonymous": "always",
      "named": "never"
    }],
    "space-infix-ops": ["warn"],
    "space-in-parens": ["warn", "never"]
  },
  "globals": {
    "openerp": true,
    "odoo": true,
    "CKEDITOR": true,
    "we3": true,
    "Backbone": true,
    "_": true,
    "$": false,
    "jQuery": false,
    "google": false,
    "window": false,
    "setTimeout": false,
    "clearTimeout": false,
    "document": false,
    "console": false,
    "QUnit": false,
    "moment": false,
    "FileReader": false,
    "nv": false,
    "d3": false,
    "ace": false,
    "Option": false,
    "py": false,
    "XMLHttpRequest": false,
    "setInterval": false,
    "clearInterval": false,
    "Image": false,
    "jstz": false,
    "ZeroClipboard": false,
    "sessionStorage": false,
    "Node": false,
    "history": false,
    "gapi": false,
    "Event": false,
    "Gravitec": false,
    "navigator": false,
    "OneSignal": false,
    "PDFJS": false,
    "ClipboardJS": false,
    "PDFSlidesViewer": false,
    "MutationObserver": false,
    "Element": false,
    "URL": false
  }
};