webpackJsonp([48,210],{

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "最简单的用法。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "The simplest usage."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 0,
	    "title": {
	      "zh-CN": "基本",
	      "en-US": "Basic"
	    },
	    "filename": "components/anchor/demo/basic.md",
	    "id": "components-anchor-demo-basic"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Anchor } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Link } <span class=\"token operator\">=</span> Anchor<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Anchor<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#components-anchor-demo-basic\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Basic demo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#components-anchor-demo-fixed\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Fixed demo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#API\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"API\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#Anchor-Props\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Anchor Props\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#Link-Props\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Link Props\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Anchor<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Link = _antd.Anchor.Link;
	  return React.createElement(
	    _antd.Anchor,
	    null,
	    React.createElement(Link, {
	      href: "#components-anchor-demo-basic",
	      title: "Basic demo"
	    }),
	    React.createElement(Link, {
	      href: "#components-anchor-demo-fixed",
	      title: "Fixed demo"
	    }),
	    React.createElement(
	      Link,
	      {
	        href: "#API",
	        title: "API"
	      },
	      React.createElement(Link, {
	        href: "#Anchor-Props",
	        title: "Anchor Props"
	      }),
	      React.createElement(Link, {
	        href: "#Link-Props",
	        title: "Link Props"
	      })
	    )
	  );
	},
	  "style": "\n.code-box-demo .ant-affix {\n  z-index: 11;\n}\n"
	};

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  "content": {
	    "zh-CN": [
	      [
	        "p",
	        "不浮动，状态不随页面滚动变化。"
	      ]
	    ],
	    "en-US": [
	      [
	        "p",
	        "Do not change state when page is scrolling."
	      ]
	    ]
	  },
	  "meta": {
	    "order": 2,
	    "title": {
	      "zh-CN": "固定",
	      "en-US": "Fixed Anchor"
	    },
	    "filename": "components/anchor/demo/fixed.md",
	    "id": "components-anchor-demo-fixed"
	  },
	  "toc": [
	    "ul",
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#zh-CN"
	        },
	        "zh-CN"
	      ]
	    ],
	    [
	      "li",
	      [
	        "a",
	        {
	          "className": "bisheng-toc-h2",
	          "href": "#en-US"
	        },
	        "en-US"
	      ]
	    ]
	  ],
	  "highlightedCode": [
	    "pre",
	    {
	      "lang": "__react",
	      "highlighted": "import { Anchor } from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token keyword\">const</span> { Link } <span class=\"token operator\">=</span> Anchor<span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Anchor affix<span class=\"token operator\">=</span>{<span class=\"token boolean\">false</span>}<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#components-anchor-demo-basic\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Basic demo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#components-anchor-demo-fixed\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Fixed demo\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#API\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"API\"</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#Anchor-Props\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Anchor Props\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>Link href<span class=\"token operator\">=</span><span class=\"token string\">\"#Link-Props\"</span> title<span class=\"token operator\">=</span><span class=\"token string\">\"Link Props\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Anchor<span class=\"token operator\">></span>\n<span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
	    }
	  ],
	  "preview": function bishengPluginReactPreviewer() {
	  var React = __webpack_require__(1);

	  var ReactDOM = __webpack_require__(2);

	  var _antd = __webpack_require__(3);

	  var Link = _antd.Anchor.Link;
	  return React.createElement(
	    _antd.Anchor,
	    {
	      affix: false
	    },
	    React.createElement(Link, {
	      href: "#components-anchor-demo-basic",
	      title: "Basic demo"
	    }),
	    React.createElement(Link, {
	      href: "#components-anchor-demo-fixed",
	      title: "Fixed demo"
	    }),
	    React.createElement(
	      Link,
	      {
	        href: "#API",
	        title: "API"
	      },
	      React.createElement(Link, {
	        href: "#Anchor-Props",
	        title: "Anchor Props"
	      }),
	      React.createElement(Link, {
	        href: "#Link-Props",
	        title: "Link Props"
	      })
	    )
	  );
	}
	};

/***/ },

/***/ 1194:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    'basic': __webpack_require__(726),
	    'fixed': __webpack_require__(727),
	}

/***/ }

});