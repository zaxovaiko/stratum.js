/*
 * Stratum.js
 * Grid layout library
 * MIT License
 * by Volodia Zakhovaiko
 */

$(document).ready(function () {

    // Get all grids
    let grid = $('[data-grid]');

    // Count of the columns
    let columns = grid.data('grid');

    // Set default padding gap
    let padding = 15;

    // Set default value if user does not set count of the columns
    if (columns === undefined || !columns) {
        columns = 3;
    }

    grid.css({
        position: 'relative'
    });

    // Array with item's height and width
    let items = [];
    // Initial values: left and top position
    let top = 0, left = -100 / columns;

    //
    //----- Main cycle: there we will check current coordinates -----//
    grid.children().each(function (i) {

        $(this).wrap('<div class="grid-item"></div>div>');

        // Set left position for every nth block
        i % columns === 0 ? left = 0 : left += 100 / columns;

        // Set width and left position the first
        $(this).parent().css({
            position : 'absolute',
            width : 100 / columns + '%',
            left: left + '%',
            padding: padding
        });

        // Save height value in main array to check top positions
        items.push($(this).parent().outerHeight(true));

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
        $(this).parent().css({
            top: top
        });
    });
});