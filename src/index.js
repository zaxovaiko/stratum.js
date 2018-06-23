(function ($) {

    $.fn.stratum = function (options) {

        let settings = $.extend({
            padding: 15,
            columns: 3
        }, options);

        let grid = $(this);
        let heights = [];

        // Count of the columns and default padding gap
        let columns = settings.columns;
        let padding = settings.padding;

        // Default positions
        let top   = 0;
        let left  = -100 / columns;

        // Iterate and reformat each matched element
        return this.each(function () {

            // Initialize stratum function
            function init() {
                grid.css({
                    position: 'relative'
                });

                //
                // Main cycle: there we will check current coordinates
                grid.children().each(function (i, obj) {

                    let gridItem = $(obj);

                    if (gridItem.attr('class') !== "grid_item") {
                        gridItem.wrap('<div class="grid_item"></div>');
                    }

                    i % columns === 0 ? left = 0 : left += 100 / columns;

                    // Set width and others CSS rules
                    gridItem.parent().css({
                        position: 'absolute',
                        width: 100 / columns + '%',
                        left: left + '%',
                        padding: padding
                    });

                    // Save height value in main array to check top positions
                    heights.push(gridItem.parent().outerHeight(true));

                    // Update and set new position values
                    gridItem.parent().css({
                        top: getTopPosition(gridItem, i)
                    });
                });
            }

            function resize() {
                heights = [];
                top = 0;

                grid.children().each(function (i, obj) {
                    let gridItem = $(obj);

                    heights.push(gridItem.outerHeight(true));

                    // Update and set new position values
                    gridItem.css({
                        top: getTopPosition(gridItem, i)
                    });
                });
            }

            //
            // Get current top position value
            function getTopPosition(obj, index) {
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

            $(window).on('load', function () {
                init();
            }).on('resize', function () {
                resize();
            });
        });
    };

}(jQuery));
