# Stratum.js — Masonry Grid Library

> version 1.0.1

### Table of contents

 - [How to use](https://github.com/zaxoavoki/stratum.js#how-to-use)
 - [Additional information](https://github.com/zaxoavoki/stratum.js#additional-information)
 - [Future updates](https://github.com/zaxoavoki/stratum.js#future-updates)
 - [Copyright and license](https://github.com/zaxoavoki/stratum.js#copyright-and-license)

### How to use

 - You can download it with [stratum.js CDN](https://cdn.rawgit.com/zaxoavoki/stratum.js/31373231/dist/stratum.min.js);

You can create a grid using `stratum()` function. It gets object as
parameter with three options:

#### `padding:`

 - Set padding gaps between grid items. You can put *number* or *string* in such format: `padding: '15px 10px 20px 30px'`, which means 
 that you want to set padding-top with **15px**, padding-bottom with **20px** and etc.
 
#### `columns:`

 - Set an amount of columns in grid. Can be only a *number*.

#### `smart:`

 -  Accept *boolean* value `true` or `false`. Makes the grid more flexible and more compact.
 > **Notice** Using this option script will set grid items in not right order. 

### Additional information
 
 You may need to add a grid element once, but you do not want it to be visible. In this case, simply specify for the child element to have `display: none` or add class with this CSS rule.
 
### Future updates
 
 - Older browsers' supports;
 - Add stratum.js stylesheet;
 - Pass hidden grid items;
 - Package in the [npm](https://www.npmjs.com/) catalog *(after version 1.5.0)*;

### Copyright and license

Code and documentation copyright 2018. Code released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

##### Work together

You can improve this plugin with your ideas. Just tell me or send pull request.