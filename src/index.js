(function ($) {

    $.fn.stratum = function (args) {

        // Default options.
        let options = $.extend({
            padding: 10,
            columns: 3,
            smart: false
        }, args);

        let $this = $(this);
        let grid = $this, sizes;

        // Set amount of columns and padding gaps for more readability.
        let columns = options.columns;
        let padding = options.padding;
        let smart   = options.smart;

        // Default positions.
        let top   = 0,
            left  = 0;

        // Iterate and reformat each matched element.
        return this.each(function () {

            function init() {

                // Clear an array before using.
                sizes = [];

                // Set relative option for grid.
                grid.css('position', 'relative');

                // Iterate each grid child item and set new changes.
                let gridPseudoItems = grid.children();
                gridPseudoItems.each(function (i, object) {

                    let gridPseudoItem = $(object), gridItem;

                    // Create wrapper only one time when initialize for children element.
                    if (gridPseudoItem.data('grid-item') !== undefined) {
                        gridItem = gridPseudoItem;
                        console.log('works');
                    } else {
                        gridItem = gridPseudoItem.wrap('<div data-grid-item></div>').parent();
                    }

                    // Set width and others main CSS rules.
                    gridItem.css({
                        position: 'absolute',
                        width: 100 / columns + '%',
                        padding: padding
                    });

                    let outerHeight = gridItem.outerHeight(true);

                    // If SS (smart system) is activated.
                    if (smart) {
                        let index, minTop = 0;
                        if (sizes.length >= columns) {
                            let minHeight = Math.min.apply(null, sizes); // Find min value = min height.
                            index = sizes.indexOf(minHeight);            // Find index of column.
                            top = minHeight;
                            sizes[index] += outerHeight;                 // Add new height to next circle.
                        } else {
                            top = minTop; // Is 0 while array has only {columns} elements.
                            index = i;
                            sizes.push(outerHeight);
                        }

                        left = 100 / columns * (index % columns);
                    } else {
                        i % columns === 0 ? left = 0 : left += 100 / columns;

                        // Add old height value in each iteration.
                        if (sizes.length < columns) {
                            top = 0;
                            sizes.push(outerHeight);
                        } else {
                            top = sizes[i % columns];
                            sizes[i % columns] += outerHeight;
                        }
                    }

                    gridItem.css({
                        left: left + '%',
                        top: top
                    });
                });

                // Set grid height.
                grid.css('height', Math.max.apply(null, sizes));
            }

            $(window).on('load resize', init);
        });
    };

}(jQuery));
