# Stratum.js — Masonry Grid Library

> version 1.0.2

### Table of contents

 - [How to install](#how-to-install)
 - [How to use](#how-to-use)
 - [Additional information](#additional-information)
 - [Future updates](#future-updates)
 - [Copyright and license](#copyright-and-license)
 - [Changes history](#changes-history)

### How to install

 - Using [NPM](https://www.npmjs.com/package/stratum.js)
  
    ```
    npm i stratum.js
    ```

 - or download [the latest .min version](https://rawgit.com/zaxoavoki/stratum.js/master/dist/stratum.min.js)

### How to use
 
You can create a grid using `stratum()` function. It gets object as
parameter with three options:

#### `padding:`

 - Set padding gaps between grid items. You can put *number* or *string* in such format: `padding: '15px 10px 20px 30px'`, which means 
 that you want to set padding-top with **15px**, padding-bottom with **20px** and etc.
 
#### `columns:`

 - Set an amount of columns in grid. Can be only a *number*.

#### `smart:`

 -  Accept *boolean* value `true` or `false`. Makes the grid more flexible and more compact.
 > **Notice**: Using this option script will set grid items in not right order. 
 
 If you need to add one or a few grid elements and it must be invisible then just specify `display: none;` or add class with this CSS rule to this block.
### Additional information
 
 This project is independent of any other packages. That's why it's light weight and is only
 ~**1.7KiB** for minimized version and ~**7.4KiB** for normal.
 
### Future updates
 
 - Add support of old browsers
 
### Copyright and license

Code and documentation copyright 2018. Code released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

##### Work together

You can improve this plugin with your ideas. Just tell me or send pull request.

### Changes history

`v1.0.2` - Added sliding effect for grid elements.  
`v1.0.1` - Initiated project. 