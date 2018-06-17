
let $ = require("jquery"); // Import jQuery

$(document).ready(function () {

    let grid = $('[data-grid]');     // Get all grids
    let columns = grid.data('grid'); // Count of the columns

    // Set default value if user does not set count of the columns
    if (columns === undefined || !columns) {
        columns = 3;
    }

    grid.css({
        position: 'relative'
    });

    let items = [];            // Array with item's height and width
    let top = 0,               // Initial values
        left = -100 / columns; // Left and top positions

    //
    // Main cycle: there we will check current coordinates
    grid.children().each(function (i) {

        i % columns === 0 ? left = 0 : left += 100 / columns; // Set left position for every nth block

        // Set width and left position the first
        $(this).css({
            position : 'absolute',
            width : 100 / columns + '%',
            left: left + '%'
        });

        items.push($(this).outerHeight(true)); // Save height value in main array to check top positions

        // Set top position
        if (items[i - columns] === undefined) {
            top = 0;
        } else {
            let itemNumber = i;
            top = 0;
            while (itemNumber >= columns) {
                top += items[itemNumber - columns];
                itemNumber -= columns;
            }
        }

        // Update and set new position values
        $(this).css({
            top: top
        });
    });
});