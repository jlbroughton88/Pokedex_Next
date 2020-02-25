webpackHotUpdate("static/development/pages/poke/[name].js",{

/***/ "./pages/poke/[name].js":
/*!******************************!*\
  !*** ./pages/poke/[name].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_pokemonSingle_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/css/pokemonSingle.scss */ "./public/static/css/pokemonSingle.scss");
/* harmony import */ var _public_static_css_pokemonSingle_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_pokemonSingle_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/header */ "./pages/comps/header.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/footer */ "./pages/comps/footer.js");
var _jsxFileName = "/Users/JacobBroughton/coding/projects/Pokedex_Next/pages/poke/[name].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // import styled from "styled-components";

var PokeSummary = function PokeSummary(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(); //   const [paramName, setParamName] = useState(router.query.name);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: 0,
    name: "",
    sprites: [],
    abilities: [],
    base_experience: 0,
    forms: [],
    game_showings: [],
    held_items: [],
    moves: [],
    stats: [],
    types: [],
    weight: 0,
    height: 0
  }),
      pokemon = _useState[0],
      setPokemon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchData(router.query.name);
  }, [router.query.name]);

  var fetchData = function fetchData(nameP) {
    fetch("https://pokeapi.co/api/v2/pokemon/".concat(nameP)).then(function (res) {
      return res.json();
    }).then(function (data) {
      return setPokemon({
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        abilities: data.abilities,
        base_experience: data.base_experience,
        forms: data.forms,
        game_showings: data.game_indices,
        held_items: data.held_items,
        moves: data.moves,
        stats: data.stats,
        types: data.types,
        weight: data.weight,
        height: data.height
      });
    });
  };

  var id = pokemon.id,
      name = pokemon.name,
      sprites = pokemon.sprites,
      abilities = pokemon.abilities,
      base_experience = pokemon.base_experience,
      forms = pokemon.forms,
      game_showings = pokemon.game_showings,
      held_items = pokemon.held_items,
      moves = pokemon.moves,
      types = pokemon.types,
      weight = pokemon.weight,
      height = pokemon.height,
      stats = pokemon.stats;
  return __jsx("div", {
    className: "motherDivSingle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_comps_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "nameId",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "nameDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h2", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, capitalizeFirstLetter(name))), __jsx("div", {
    className: "idDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "#", id))), __jsx("div", {
    className: "spritesDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("div", {
    className: "defaultDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("h4", {
    className: "defaultH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Default"), __jsx("img", {
    src: sprites.front_default,
    alt: sprites.front_default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("img", {
    src: sprites.back_default,
    alt: sprites.back_default,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx("div", {
    className: "shinyDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "shinyH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Shiny"), __jsx("img", {
    src: sprites.front_shiny,
    alt: sprites.front_shiny,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("img", {
    src: sprites.back_shiny,
    alt: sprites.back_shiny,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))), __jsx("div", {
    className: "heightWeight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "heightDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Height: ", height / 2, "ft")), __jsx("div", {
    className: "weightDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Weight: ", weight, "lbs"))), __jsx("div", {
    className: "abilityType",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "abilityDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("h4", {
    className: "abilitiesH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Abilities:"), abilities.map(function (ablty) {
    return __jsx("span", {
      className: "ability",
      key: ablty.ability.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, capitalizeFirstLetter(ablty.ability.name), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "typesDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "typesH",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Types:"), types.map(function (typ) {
    return __jsx("span", {
      className: "type",
      id: typ.type.name,
      key: typ.type.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, capitalizeFirstLetter(typ.type.name));
  }))), __jsx("div", {
    className: "statsDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, stats.map(function (stt) {
    return __jsx("span", {
      className: "stat",
      id: stt.stat.name,
      key: stt.stat.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, capitalizeFirstLetter(stt.stat.name), ": ", stt.base_stat, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }));
  }))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PokeSummary);

/***/ })

})
//# sourceMappingURL=[name].js.236ac62c377a18119c93.hot-update.js.map