/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.width = 1000;\n  canvasEl.height = 700;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXFDO0FBQ1M7QUFFOUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxLQUFLLEdBQUcsSUFBSTtFQUNyQkYsUUFBUSxDQUFDRyxNQUFNLEdBQUcsR0FBRztFQUVyQixNQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0ssVUFBVSxDQUFDLElBQUksQ0FBQztFQUNyQyxNQUFNQyxJQUFJLEdBQUcsSUFBSVYsd0RBQUksRUFBRTtFQUN2QixJQUFJQyw2REFBUSxDQUFDUyxJQUFJLEVBQUVGLEdBQUcsQ0FBQyxDQUFDRyxLQUFLLEVBQUU7QUFDbkMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiO1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgY2FudmFzRWwud2lkdGggPSAxMDAwO1xuICAgIGNhbnZhc0VsLmhlaWdodCA9IDcwMDtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJnYW1lIiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nclass Enemy extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    //this.pos = options.pos;\n\n    options.pos = options.pos || options.game.generateEnemyPosition();\n    options.color = Enemy.COLOR;\n    options.radius = Enemy.RADIUS;\n    super(options);\n  }\n}\n_defineProperty(Enemy, \"COLOR\", \"red\");\n_defineProperty(Enemy, \"RADIUS\", 15);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQztBQUUzQyxNQUFNQyxLQUFLLFNBQVNELHNEQUFZO0VBSzVCRSxXQUFXQSxDQUFBLEVBQWU7SUFBQSxJQUFkQyxPQUFPLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUNwQjs7SUFFQUQsT0FBTyxDQUFDSSxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ksR0FBRyxJQUFJSixPQUFPLENBQUNLLElBQUksQ0FBQ0MscUJBQXFCLEVBQUU7SUFDakVOLE9BQU8sQ0FBQ08sS0FBSyxHQUFHVCxLQUFLLENBQUNVLEtBQUs7SUFDM0JSLE9BQU8sQ0FBQ1MsTUFBTSxHQUFHWCxLQUFLLENBQUNZLE1BQU07SUFDN0IsS0FBSyxDQUFDVixPQUFPLENBQUM7RUFDbEI7QUFHSjtBQUFDVyxlQUFBLENBZktiLEtBQUssV0FFUSxLQUFLO0FBQUFhLGVBQUEsQ0FGbEJiLEtBQUssWUFHUyxFQUFFO0FBY3RCLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzP2UzNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmNsYXNzIEVuZW15IGV4dGVuZHMgTW92aW5nT2JqZWN0e1xuXG4gICAgc3RhdGljIENPTE9SID0gXCJyZWRcIjtcbiAgICBzdGF0aWMgUkFESVVTID0gMTU7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLy90aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgICAgICBcbiAgICAgICAgb3B0aW9ucy5wb3MgPSBvcHRpb25zLnBvcyB8fCBvcHRpb25zLmdhbWUuZ2VuZXJhdGVFbmVteVBvc2l0aW9uKCk7XG4gICAgICAgIG9wdGlvbnMuY29sb3IgPSBFbmVteS5DT0xPUjtcbiAgICAgICAgb3B0aW9ucy5yYWRpdXMgPSBFbmVteS5SQURJVVM7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBFbmVteTsgIl0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIkVuZW15IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zIiwiZ2FtZSIsImdlbmVyYXRlRW5lbXlQb3NpdGlvbiIsImNvbG9yIiwiQ09MT1IiLCJyYWRpdXMiLCJSQURJVVMiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _enemy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy.js */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/scripts/ship.js\");\n/* harmony import */ var _projectile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectile.js */ \"./src/scripts/projectile.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\nclass Game {\n  constructor() {\n    this.enemies = [];\n    this.projectiles = [];\n    this.ships = [];\n    this.addEnemies();\n    // this.addShip();\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.draw(ctx);\n    });\n  }\n  allObjects() {\n    return [].concat(this.ships, this.enemies, this.projectiles);\n  }\n  step(delta) {\n    this.moveObjects(delta);\n    // this.checkCollisions();\n  }\n\n  moveObjects(delta) {\n    this.allObjects().forEach(object => {\n      object.move(delta);\n    });\n  }\n  add(object) {\n    if (object instanceof _enemy_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.enemies.push(object);\n    } else if (object instanceof _projectile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) {\n      this.projectiles.push(object);\n    } else if (object instanceof _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.ships.push(object);\n    } else {\n      throw new Error(\"unknown type of object\");\n    }\n  }\n  addEnemies() {\n    for (let i = 0; i < Game.NUM_ENEMIES; i++) {\n      this.add(new _enemy_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        game: this\n      }));\n    }\n  }\n  addShip() {\n    const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      pos: [500, 600],\n      game: this\n    });\n    this.add(ship);\n    return ship;\n  }\n  generateEnemyPosition() {\n    return [(Game.DIM_X - 20) * Math.random(), 20 + 100 * Math.random()];\n  }\n}\n_defineProperty(Game, \"BG_COLOR\", \"#2B65EC\");\n_defineProperty(Game, \"DIM_X\", 1000);\n_defineProperty(Game, \"DIM_Y\", 700);\n_defineProperty(Game, \"NUM_ENEMIES\", 3);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsSUFBR3VCLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEVBQ2hDLEVBQUUsR0FBRyxHQUFHLEdBQUdELElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQzNCO0VBQ0w7QUFDSjtBQUFDQyxlQUFBLENBM0VLbEMsSUFBSSxjQVNZLFNBQVM7QUFBQWtDLGVBQUEsQ0FUekJsQyxJQUFJLFdBVVMsSUFBSTtBQUFBa0MsZUFBQSxDQVZqQmxDLElBQUksV0FXUyxHQUFHO0FBQUFrQyxlQUFBLENBWGhCbEMsSUFBSSxpQkFhZSxDQUFDO0FBZ0UxQiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZXAtc2VhLWRlc3Ryb3llcnMvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15LmpzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5pbXBvcnQgUHJvamVjdGlsZSBmcm9tIFwiLi9wcm9qZWN0aWxlLmpzXCI7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RpbGVzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRFbmVtaWVzKCk7XG4gICAgICAgLy8gdGhpcy5hZGRTaGlwKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIEJHX0NPTE9SID0gXCIjMkI2NUVDXCI7XG4gICAgc3RhdGljIERJTV9YID0gMTAwMDtcbiAgICBzdGF0aWMgRElNX1kgPSA3MDA7XG5cbiAgICBzdGF0aWMgTlVNX0VORU1JRVMgPSAzO1xuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IEdhbWUuQkdfQ09MT1I7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcblxuICAgICAgICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFsbE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5zaGlwcywgdGhpcy5lbmVtaWVzLCB0aGlzLnByb2plY3RpbGVzKTtcbiAgICB9XG5cbiAgICBzdGVwKGRlbHRhKSB7XG4gICAgICAgIHRoaXMubW92ZU9iamVjdHMoZGVsdGEpO1xuICAgICAgIC8vIHRoaXMuY2hlY2tDb2xsaXNpb25zKCk7XG4gICAgfVxuXG4gICAgbW92ZU9iamVjdHMoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5hbGxPYmplY3RzKCkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBvYmplY3QubW92ZShkZWx0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBhZGQob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBFbmVteSkge1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBQcm9qZWN0aWxlKSB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RpbGVzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZSBvZiBvYmplY3RcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRFbmVtaWVzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEdhbWUuTlVNX0VORU1JRVM7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hZGQobmV3IEVuZW15KHsgZ2FtZTogdGhpcyB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRTaGlwKCkge1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoe1xuICAgICAgICAgICAgcG9zOiBbNTAwLCA2MDBdLFxuICAgICAgICAgICAgZ2FtZTogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZChzaGlwKTtcblxuICAgICAgICByZXR1cm4gc2hpcDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAoR2FtZS5ESU1fWCAtIDIwKSogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgIDIwICsgMTAwICogTWF0aC5yYW5kb20oKVxuICAgICAgICBdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiRW5lbXkiLCJTaGlwIiwiUHJvamVjdGlsZSIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImVuZW1pZXMiLCJwcm9qZWN0aWxlcyIsInNoaXBzIiwiYWRkRW5lbWllcyIsImRyYXciLCJjdHgiLCJjbGVhclJlY3QiLCJESU1fWCIsIkRJTV9ZIiwiZmlsbFN0eWxlIiwiQkdfQ09MT1IiLCJmaWxsUmVjdCIsImFsbE9iamVjdHMiLCJmb3JFYWNoIiwib2JqZWN0IiwiY29uY2F0Iiwic3RlcCIsImRlbHRhIiwibW92ZU9iamVjdHMiLCJtb3ZlIiwiYWRkIiwicHVzaCIsIkVycm9yIiwiaSIsIk5VTV9FTkVNSUVTIiwiZ2FtZSIsImFkZFNoaXAiLCJzaGlwIiwicG9zIiwiZ2VuZXJhdGVFbmVteVBvc2l0aW9uIiwiTWF0aCIsInJhbmRvbSIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nclass GameView {\n  constructor(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n    this.game.addShip();\n  }\n  bindKeyHandlers() {\n    const ship = this.ship;\n    Object.keys(GameView.MOVES).forEach(k => {\n      const move = GameView.MOVES[k];\n      //key(k, () => { ship.power(move); });\n      console.log(\"ship has moved\");\n    });\n\n    //key(\"space\", () => { ship.fireBullet(); });\n  }\n\n  start() {\n    this.bindKeyHandlers();\n    this.lastTime = 0;\n    // start the animation\n    requestAnimationFrame(this.animate.bind(this));\n  }\n  animate(time) {\n    const timeDelta = time - this.lastTime;\n    this.game.draw(this.ctx);\n    this.game.step(timeDelta);\n    this.lastTime = time;\n\n    // every call to animate requests causes another call to animate\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n_defineProperty(GameView, \"MOVES\", {\n  w: [0, -1],\n  a: [-1, 0],\n  s: [0, 1],\n  d: [1, 0]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFFBQVE7RUFDVkMsV0FBV0EsQ0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEVBQUU7SUFDbkIsSUFBSSxDQUFDRCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNELElBQUksQ0FBQ0UsT0FBTyxFQUFFO0VBQ3ZCO0VBU0FDLGVBQWVBLENBQUEsRUFBRztJQUNkLE1BQU1DLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUk7SUFFdEJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUixRQUFRLENBQUNTLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUVDLENBQUMsSUFBSztNQUN2QyxNQUFNQyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ1MsS0FBSyxDQUFDRSxDQUFDLENBQUM7TUFDOUI7TUFDQUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQyxDQUFDOztJQUVGO0VBQ0o7O0VBRUFDLEtBQUtBLENBQUEsRUFBRztJQUNKLElBQUksQ0FBQ1YsZUFBZSxFQUFFO0lBQ3RCLElBQUksQ0FBQ1csUUFBUSxHQUFHLENBQUM7SUFDakI7SUFDQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNsRDtFQUVBRCxPQUFPQSxDQUFDRSxJQUFJLEVBQUU7SUFDVixNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxJQUFJLENBQUNKLFFBQVE7SUFHdEMsSUFBSSxDQUFDZCxJQUFJLENBQUNvQixJQUFJLENBQUMsSUFBSSxDQUFDbkIsR0FBRyxDQUFDO0lBQ3pCLElBQUksQ0FBQ0QsSUFBSSxDQUFDcUIsSUFBSSxDQUFDRixTQUFTLENBQUM7SUFDeEIsSUFBSSxDQUFDTCxRQUFRLEdBQUdJLElBQUk7O0lBRXBCO0lBQ0FILHFCQUFxQixDQUFDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEQ7QUFFSjtBQUFDSyxlQUFBLENBN0NLeEIsUUFBUSxXQU9LO0VBQ1h5QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDVkMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1ZDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDWixDQUFDO0FBbUNMLCtEQUFlNUIsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZXAtc2VhLWRlc3Ryb3llcnMvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lVmlld3tcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGRTaGlwKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIE1PVkVTID0ge1xuICAgICAgICB3OiBbMCwgLTFdLFxuICAgICAgICBhOiBbLTEsIDBdLFxuICAgICAgICBzOiBbMCwgMV0sXG4gICAgICAgIGQ6IFsxLCAwXSxcbiAgICB9O1xuXG4gICAgYmluZEtleUhhbmRsZXJzKCkge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5zaGlwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKEdhbWVWaWV3Lk1PVkVTKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gR2FtZVZpZXcuTU9WRVNba107XG4gICAgICAgICAgICAvL2tleShrLCAoKSA9PiB7IHNoaXAucG93ZXIobW92ZSk7IH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzaGlwIGhhcyBtb3ZlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9rZXkoXCJzcGFjZVwiLCAoKSA9PiB7IHNoaXAuZmlyZUJ1bGxldCgpOyB9KTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iaW5kS2V5SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IDA7XG4gICAgICAgIC8vIHN0YXJ0IHRoZSBhbmltYXRpb25cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKHRpbWUpIHtcbiAgICAgICAgY29uc3QgdGltZURlbHRhID0gdGltZSAtIHRoaXMubGFzdFRpbWU7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICB0aGlzLmdhbWUuc3RlcCh0aW1lRGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RUaW1lID0gdGltZTtcblxuICAgICAgICAvLyBldmVyeSBjYWxsIHRvIGFuaW1hdGUgcmVxdWVzdHMgY2F1c2VzIGFub3RoZXIgY2FsbCB0byBhbmltYXRlXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVWaWV3OyJdLCJuYW1lcyI6WyJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiZ2FtZSIsImN0eCIsImFkZFNoaXAiLCJiaW5kS2V5SGFuZGxlcnMiLCJzaGlwIiwiT2JqZWN0Iiwia2V5cyIsIk1PVkVTIiwiZm9yRWFjaCIsImsiLCJtb3ZlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwibGFzdFRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwiYmluZCIsInRpbWUiLCJ0aW1lRGVsdGEiLCJkcmF3Iiwic3RlcCIsIl9kZWZpbmVQcm9wZXJ0eSIsInciLCJhIiwicyIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/moving_object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving_object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor() {\n    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n    this.game = options.game;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.fillStyle = this.color;\n    ctx.stroke();\n  }\n  move() {\n    let newxPos = this.pos[0] + this.vel[0];\n    let newyPos = this.pos[1] + this.vel[1];\n    //this.pos = this.game.wrap([newxPos, newyPos]);\n    this.pos = [newxPos, newyPos];\n  }\n\n  // isCollidedWith(otherObject) {\n  //     let centerDistance = sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n  //     let sumRadii = this.radius + otherObject.radius;\n\n  //     if (centerDistance < sumRadii) {\n  //         return true;\n  //     } else {\n  //         return false;\n  //     }\n  // }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFDZkMsV0FBV0EsQ0FBQSxFQUFlO0lBQUEsSUFBZEMsT0FBTyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDRyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0ksR0FBRztJQUN0QixJQUFJLENBQUNDLEdBQUcsR0FBR0wsT0FBTyxDQUFDSyxHQUFHO0lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHTixPQUFPLENBQUNNLE1BQU07SUFDNUIsSUFBSSxDQUFDQyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ08sS0FBSztJQUMxQixJQUFJLENBQUNDLElBQUksR0FBR1IsT0FBTyxDQUFDUSxJQUFJO0VBQzVCO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsRUFBRTtJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHTyxJQUFJLENBQUNDLEVBQUUsQ0FBQztJQUM5REosR0FBRyxDQUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDUixLQUFLO0lBQzFCRyxHQUFHLENBQUNNLE1BQU0sRUFBRTtFQUNoQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJQyxPQUFPLEdBQUcsSUFBSSxDQUFDZCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLElBQUljLE9BQU8sR0FBRyxJQUFJLENBQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkM7SUFDQSxJQUFJLENBQUNELEdBQUcsR0FBRyxDQUFDYyxPQUFPLEVBQUVDLE9BQU8sQ0FBQztFQUNqQzs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUo7O0FBRUEsK0RBQWVyQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVlcC1zZWEtZGVzdHJveWVycy8uL3NyYy9zY3JpcHRzL21vdmluZ19vYmplY3QuanM/YzIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpbmdPYmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gb3B0aW9ucy5jb2xvcjtcbiAgICAgICAgdGhpcy5nYW1lID0gb3B0aW9ucy5nYW1lO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbW92ZSgpIHtcbiAgICAgICAgbGV0IG5ld3hQb3MgPSB0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdO1xuICAgICAgICBsZXQgbmV3eVBvcyA9IHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV07XG4gICAgICAgIC8vdGhpcy5wb3MgPSB0aGlzLmdhbWUud3JhcChbbmV3eFBvcywgbmV3eVBvc10pO1xuICAgICAgICB0aGlzLnBvcyA9IFtuZXd4UG9zLCBuZXd5UG9zXTtcbiAgICB9XG5cbiAgICAvLyBpc0NvbGxpZGVkV2l0aChvdGhlck9iamVjdCkge1xuICAgIC8vICAgICBsZXQgY2VudGVyRGlzdGFuY2UgPSBzcXJ0KCh0aGlzLnBvc1swXSAtIG90aGVyT2JqZWN0LnBvc1swXSkgKiogMiArICh0aGlzLnBvc1sxXSAtIG90aGVyT2JqZWN0LnBvc1sxXSkgKiogMik7XG4gICAgLy8gICAgIGxldCBzdW1SYWRpaSA9IHRoaXMucmFkaXVzICsgb3RoZXJPYmplY3QucmFkaXVzO1xuXG4gICAgLy8gICAgIGlmIChjZW50ZXJEaXN0YW5jZSA8IHN1bVJhZGlpKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwiZ2FtZSIsImRyYXciLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJzdHJva2UiLCJtb3ZlIiwibmV3eFBvcyIsIm5ld3lQb3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving_object.js\n");

/***/ }),

/***/ "./src/scripts/projectile.js":
/*!***********************************!*\
  !*** ./src/scripts/projectile.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nclass Projectile extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.radius = Projectile.RADIUS;\n    super(options);\n    this.isWrappable = false;\n  }\n}\n_defineProperty(Projectile, \"RADIUS\", 2);\n_defineProperty(Projectile, \"SPEED\", 15);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wcm9qZWN0aWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLFVBQVUsU0FBU0Qsc0RBQVksQ0FBQztFQUVsQ0UsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCQSxPQUFPLENBQUNDLE1BQU0sR0FBR0gsVUFBVSxDQUFDSSxNQUFNO0lBQ2xDLEtBQUssQ0FBQ0YsT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDRyxXQUFXLEdBQUcsS0FBSztFQUM1QjtBQUlKO0FBQUNDLGVBQUEsQ0FWS04sVUFBVSxZQVFJLENBQUM7QUFBQU0sZUFBQSxDQVJmTixVQUFVLFdBU0csRUFBRTtBQUdyQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlZXAtc2VhLWRlc3Ryb3llcnMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0aWxlLmpzP2ZmNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmdfb2JqZWN0XCI7XG5cbmNsYXNzIFByb2plY3RpbGUgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnJhZGl1cyA9IFByb2plY3RpbGUuUkFESVVTO1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5pc1dyYXBwYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBSQURJVVMgPSAyO1xuICAgIHN0YXRpYyBTUEVFRCA9IDE1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0aWxlO1xuXG4iXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiUHJvamVjdGlsZSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInJhZGl1cyIsIlJBRElVUyIsImlzV3JhcHBhYmxlIiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/projectile.js\n");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/scripts/moving_object.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nclass Ship extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  // constructor(options){\n  //     this.pos = options.pos;\n  //     this.vel = options.vel;\n  //     this.color = \"blue\";\n  // }\n\n  constructor(options) {\n    options.radius = Ship.RADIUS;\n    options.vel = options.vel || [0, 0];\n    options.color = \"red\"; //options.color || randomColor();\n    super(options);\n  }\n}\n_defineProperty(Ship, \"RADIUS\", 15);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaGlwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRTNDLE1BQU1DLElBQUksU0FBU0Qsc0RBQVk7RUFDM0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQUUsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCQSxPQUFPLENBQUNDLE1BQU0sR0FBR0gsSUFBSSxDQUFDSSxNQUFNO0lBQzVCRixPQUFPLENBQUNHLEdBQUcsR0FBR0gsT0FBTyxDQUFDRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25DSCxPQUFPLENBQUNJLEtBQUssR0FBRyxLQUFLO0lBQ3JCLEtBQUssQ0FBQ0osT0FBTyxDQUFDO0VBQ2xCO0FBSUo7QUFBQ0ssZUFBQSxDQWhCS1AsSUFBSSxZQWNVLEVBQUU7QUFJdEIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwLXNlYS1kZXN0cm95ZXJzLy4vc3JjL3NjcmlwdHMvc2hpcC5qcz81NTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nX29iamVjdFwiO1xuXG5jbGFzcyBTaGlwIGV4dGVuZHMgTW92aW5nT2JqZWN0e1xuICAgIC8vIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xuICAgIC8vICAgICB0aGlzLnBvcyA9IG9wdGlvbnMucG9zO1xuICAgIC8vICAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xuICAgIC8vICAgICB0aGlzLmNvbG9yID0gXCJibHVlXCI7XG4gICAgLy8gfVxuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnJhZGl1cyA9IFNoaXAuUkFESVVTO1xuICAgICAgICBvcHRpb25zLnZlbCA9IG9wdGlvbnMudmVsIHx8IFswLCAwXTtcbiAgICAgICAgb3B0aW9ucy5jb2xvciA9IFwicmVkXCIvL29wdGlvbnMuY29sb3IgfHwgcmFuZG9tQ29sb3IoKTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIFJBRElVUyA9IDE1O1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlNoaXAiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJyYWRpdXMiLCJSQURJVVMiLCJ2ZWwiLCJjb2xvciIsIl9kZWZpbmVQcm9wZXJ0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/ship.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWVwLXNlYS1kZXN0cm95ZXJzLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;