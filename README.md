# 🏗 stratum.js — Masonry Grid Library

> Current stable version 1.0.4

This project is independent of any other packages. That's why it's light weight and is only
 **1.7KiB** for production version.

## 📝 Table of contents

 - [How to install](#-installation)
 - [How to use](#-usage)
 - [Copyright and license](#-copyright-and-license)
 - [Changes history](#-changes-history)

## 📥 Installation

 With [npm](https://www.npmjs.com/package/stratum.js)
  
```
npm i stratum.js
```

 or download [the latest statum.min.js version](https://rawgit.com/zaxoavoki/stratum.js/master/dist/stratum.min.js)
 
 Include stratum.js in your page:
 
 ```
 <script src="../dist/stratum.min.js"></script>
 ```

## 🚀 Usage
 
You can create a grid using `stratum()` function. It gets object as
parameter with three options:

#### `padding:`

 - Set padding gaps between grid items. Padding option uses CSS-like syntax. [See more about it](https://developer.mozilla.org/en-US/docs/Web/CSS/padding#Syntax).  
 Example: `padding: "15px 10px 20px 30px"`.  
 Data type: `String`
 
#### `columns:`

 - Set a number of columns in grid.    
 Data type: `String` or `Number`.

#### `smart:`

 - Makes the grid more flexible and more compact.  
 Data type: `Boolean`  
 
 > **Notice**: Using this option script will set grid items in not right order. 
 
If you need to add one or a few grid elements and it has to be invisible then just specify `display: none;` or add class with this CSS rule to this block.
 
## 👨🏻‍🎓 Copyright and license

Code and documentation copyright 2018. Code released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

## 🕵🏻 Changes history

 - `1.0.4` - Changed README & updated Babel support.  
 - `1.0.3` - Fixed bug with padding gap between items.  
 - `1.0.2` - Added sliding effect for grid elements. 
 - `1.0.1` - Initiated project. 