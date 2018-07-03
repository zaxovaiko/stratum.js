(function ($) {

    $.fn.stratum = function (args) {

        // Default options.
        let options = $.extend({
            padding: 15,
            columns: 3,
            smart: false
        }, args);

        let $this = $(this);
        let grid = $this, heights = [], arr = [];

        // Set amount of columns and padding gaps for more readability.
        let columns = options.columns;
        let padding = options.padding;
        let smart   = options.smart;

        // Default positions.
        let top   = 0,
            left  = -100 / columns;

        // Iterate and reformat each matched element.
        return this.each(function () {

            function init() {
                // Set relative option for grid.
                grid.css('position', 'relative');

                // Iterate each grid child item and set new changes.
                let gridPseudoItems = grid.children();
                gridPseudoItems.each(function (i, object) {

                    let gridPseudoItem = $(object),
                        // Create wrapper only one time when initialize for children element.
                        gridItem = gridPseudoItem.wrap('<div class="grid-item"></div>').parent();

                    // Set width and others main CSS rules.
                    gridItem.css({
                        position: 'absolute',
                        width: 100 / columns + '%',
                        padding: padding
                    });

                    let outerHeight = gridItem.outerHeight(true);

                    if (smart) {
                        let index, minTop = 0;
                        if (arr.length >= columns) {
                            let minHeight = Math.min.apply(null, arr); // Find min value = min height
                            index = arr.indexOf(minHeight);            // Find number of column
                            top = minHeight;
                            arr[index] += outerHeight;                 // Add new height to next circle
                        } else {
                            top = minTop;          // Is 0 while array has only {columns} elements
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
                let maxSectionHeight = 0,
                    sectionHeight;

                // Count max total gridItem height
                for (let col = 0; col < columns; col++) {
                    sectionHeight = 0;
                    for (let i = col; i < array.length; i += columns) {
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

                let gridItems = grid.children();
                gridItems.each(function (i, object) {
                    let gridItem = $(object);

                    heights.push(gridItem.outerHeight(true));

                    gridItem.css('top', getTopPosition(i)); // Update and set new position values.
                });

                setGridHeight(heights);
            }

            // Get current top position value.
            function getTopPosition(index) {
                let top;
                if (heights[index - columns] === undefined) {
                    top = 0;
                } else {
                    let itemNumber = index;
                    top = 0;
                    while (itemNumber >= columns) {
                        top += heights[itemNumber - columns];
                        itemNumber -= columns;
                    }
                }
                return top;
            }

            $(window)
                .on('load', init)
                .on('resize', resize);
        });
    };

}(jQuery));
