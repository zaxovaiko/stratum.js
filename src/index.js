
let $ = require("jquery");          // Require jQuery

$(document).ready(function () {

    let cols = 3;                   // Count of the columns
    let grid = $('[data-grid]');    // Get all grids

    grid.css({
        position: 'relative'
    });

    let items = [];                 // Array with item's height and width
    let top = 0,                    // Initial values
        left = -100 / cols;         // Left and top positions

    //
    // Main cycle: there we will check current coordinates
    grid.children().each(function (i) {

        i % cols === 0 ? left = 0 : left += 100 / cols; // Set left position for every nth block

        // Set width and left position the first
        $(this).css({
            position : 'absolute',
            width : 100 / cols + '%',
            left: left + '%'
        });

        items.push($(this).outerHeight(true));              // Save height value in main array to check top positions

        // Set top position
        if (items[i - cols] === undefined) {
            top = 0;
        } else {
            let itemNumber = i;
            top = 0;
            while (itemNumber >= cols) {
                top += items[itemNumber - cols];
                itemNumber -= cols;
            }
        }

        // Update and set new position values
        $(this).css({
            top: top
        });
    });
});