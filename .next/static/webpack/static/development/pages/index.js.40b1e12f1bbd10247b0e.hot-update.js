webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/comps/pokemon.js":
/*!********************************!*\
  !*** ./pages/comps/pokemon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_pokemon_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/css/pokemon.scss */ "./public/static/css/pokemon.scss");
/* harmony import */ var _public_static_css_pokemon_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_pokemon_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/JacobBroughton/coding/projects/Pokedex_Next/pages/comps/pokemon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Pokemon = function Pokemon(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: 0,
    name: "",
    sprites: []
  }),
      pokemon = _useState[0],
      setPokemon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchData();
  }, []);

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  var lowercaseFirstLetter = function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  };

  var fetchData = function fetchData() {
    fetch("https://pokeapi.co/api/v2/pokemon/".concat(props.name)).then(function (res) {
      return res.json();
    }).then(function (data) {
      return setPokemon({
        id: data.id,
        name: capitalizeFirstLetter(data.name),
        sprite: data.sprites.front_default
      });
    });
  }; // Capitalize first letter


  var name = pokemon.name,
      url = pokemon.url;
  var newTo = {
    pathname: "/poke/".concat(lowercaseFirstLetter(name)),
    param1: name
  };
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: newTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: "viewBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, pokemon !== null && __jsx("div", {
    className: "motherDivPokemon",
    key: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "leftDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("p", {
    className: "nameP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, name)), __jsx("img", {
    src: pokemon.sprite,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pokemon);

/***/ })

})
//# sourceMappingURL=index.js.40b1e12f1bbd10247b0e.hot-update.js.map