/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function ($) {
  $.fn.stratum = function (args) {
    // Default options
    var options = $.extend({
      padding: 10,
      columns: 3,
      smart: false
    }, args);
    var $this = $(this);
    var grid = $this,
        sizes; // Set amount of columns and padding gaps for more readability

    var columns = parseInt(options.columns);
    var padding = options.padding;
    var smart = options.smart; // Default positions

    var top = 0,
        left = 0; // Iterate and reformat each matched element

    return this.each(function () {
      var init = function init() {
        sizes = []; // Clear an array before using

        grid.css('position', 'relative'); // Set relative option for grid
        // Iterate each grid child item and set new changes

        var gridPseudoItems = grid.children();
        gridPseudoItems.each(function (i, element) {
          console.log(i);
          var gridPseudoItem = $(element),
              gridItem; // Create wrapper only one time when initialize for children element.

          if (gridPseudoItem.data('grid-item') !== undefined) {
            gridItem = gridPseudoItem;
          } else {
            gridItem = gridPseudoItem.wrap('<div data-grid-item></div>').parent();
          } // If block is hidden then don't set padding gap for it.
          // Set width and others main CSS rules.


          if (gridItem.children().css('display') !== 'none') {
            gridItem.css({
              position: 'absolute',
              width: 100 / columns + '%',
              padding: padding
            });
          }

          var outerHeight = gridItem.outerHeight(true); // If SS (smart system) is activated.

          if (smart) {
            var index,
                minTop = 0;

            if (sizes.length >= columns) {
              var minHeight = Math.min.apply(null, sizes); // Find min value = min height.

              index = sizes.indexOf(minHeight); // Find index of column.

              top = minHeight;
              sizes[index] += outerHeight; // Add new height to next circle.
            } else {
              top = minTop; // Is 0 while array has only {columns} elements.

              index = i;
              sizes.push(outerHeight);
            }

            left = 100 / columns * (index % columns);
          } else {
            i % columns === 0 ? left = 0 : left += 100 / columns; // Add old height value in each iteration.

            if (sizes.length < columns) {
              top = 0;
              sizes.push(outerHeight);
            } else {
              top = sizes[i % columns];
              sizes[i % columns] += outerHeight;
            }
          }

          gridItem.css({
            transition: 'ease .4s',
            left: left + '%',
            top: top
          });
        });
        grid.css('height', Math.max.apply(null, sizes)); // Set grid height
      };

      $(window).on('load resize', init);
    });
  };
})(jQuery);

/***/ })
/******/ ]);