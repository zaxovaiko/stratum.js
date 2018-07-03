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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function ($) {

    $.fn.stratum = function (args) {

        // Default options.
        var options = $.extend({
            padding: 15,
            columns: 3,
            smart: false
        }, args);

        var $this = $(this);
        var grid = $this,
            heights = [],
            arr = [];

        // Set amount of columns and padding gaps for more readability.
        var columns = options.columns;
        var padding = options.padding;
        var smart = options.smart;

        // Default positions.
        var top = 0,
            left = -100 / columns;

        // Iterate and reformat each matched element.
        return this.each(function () {

            function init() {
                // Set relative option for grid.
                grid.css('position', 'relative');

                // Iterate each grid child item and set new changes.
                var gridPseudoItems = grid.children();
                gridPseudoItems.each(function (i, object) {

                    var gridPseudoItem = $(object),

                    // Create wrapper only one time when initialize for children element.
                    gridItem = gridPseudoItem.wrap('<div class="grid-item"></div>').parent();

                    // Set width and others main CSS rules.
                    gridItem.css({
                        position: 'absolute',
                        width: 100 / columns + '%',
                        padding: padding
                    });

                    var outerHeight = gridItem.outerHeight(true);

                    if (smart) {
                        var index = void 0,
                            minTop = 0;
                        if (arr.length >= columns) {
                            var minHeight = Math.min.apply(null, arr); // Find min value = min height
                            index = arr.indexOf(minHeight); // Find number of column
                            top = minHeight;
                            arr[index] += outerHeight; // Add new height to next circle
                        } else {
                            top = minTop; // Is 0 while array has only {columns} elements
                            index = i;
                            arr.push(outerHeight);
                        }
                        left = 100 / columns * (index % columns);
                    } else {
                        // Save height value in main array to check top positions.
                        heights.push(outerHeight);

                        // Count left position for each element.
                        i % columns === 0 ? left = 0 : left += 100 / columns;
                        top = getTopPosition(i);
                    }

                    gridItem.css({
                        left: left + '%',
                        top: top
                    });
                });

                if (smart) {
                    grid.css('height', Math.max.apply(null, arr));
                } else {
                    setGridHeight(heights);
                }
            }

            // Count grid height value.
            function setGridHeight(array) {
                var maxSectionHeight = 0,
                    sectionHeight = void 0;

                // Count max total gridItem height
                for (var col = 0; col < columns; col++) {
                    sectionHeight = 0;
                    for (var i = col; i < array.length; i += columns) {
                        sectionHeight += array[i];
                    }

                    if (maxSectionHeight < sectionHeight) {
                        maxSectionHeight = sectionHeight;
                    }
                }

                grid.css('height', maxSectionHeight);
            }

            // Rewrite top position value while resizing.
            function resize() {
                heights = [];
                top = 0;

                var gridItems = grid.children();
                gridItems.each(function (i, object) {
                    var gridItem = $(object);

                    heights.push(gridItem.outerHeight(true));

                    gridItem.css('top', getTopPosition(i)); // Update and set new position values.
                });

                setGridHeight(heights);
            }

            // Get current top position value.
            function getTopPosition(index) {
                var top = void 0;
                if (heights[index - columns] === undefined) {
                    top = 0;
                } else {
                    var itemNumber = index;
                    top = 0;
                    while (itemNumber >= columns) {
                        top += heights[itemNumber - columns];
                        itemNumber -= columns;
                    }
                }
                return top;
            }

            $(window).on('load', init).on('resize', resize);
        });
    };
})(jQuery);

/***/ })
/******/ ]);