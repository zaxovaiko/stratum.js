(function ($) {

    $.fn.stratum = function (options) {

        let settings = $.extend({
            padding: 15,
            columns: 3
        }, options);

        let grid = $(this);

        // Count of the columns and default padding gap
        let columns = settings.columns;
        let padding = settings.padding;

        // Iterate and reformat each matched element
        return this.each(function () {

            // Initialize stratum function
            function init() {
                grid.css({
                    position: 'relative'
                });

                // Array with items height
                let items = [];
                let top   = 0;
                let left  = -100 / columns;

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
                    items.push(gridItem.parent().outerHeight(true));

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
                    gridItem.parent().css({
                        top: top
                    });
                });
            }

            function resize() {

                // TODO: Create setTopPosition function;

                let items = [], top = 0;

                grid.children().each(function (i, obj) {

                    let gridItem = $(obj);

                    // Save height value in main array to check top positions
                    items.push(gridItem.outerHeight(true));

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
                    gridItem.css({
                        top: top
                    });
                });
            }

            $(window).on('load', function () {
                init();
            }).on('resize', function () {
                resize();
            });
        });
    };

}(jQuery));
