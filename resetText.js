// 'reset' text to repopulate empty files

module.exports = [
  {
    name: 'basics',
    path: 'css/basics/basics.css',
    text: `/*Create a full-width button class*/
.button {

}

/*Create a class to make fonts bold*/
.bold {

}

/** Create a class
*   that sets background color to blue
*   do not use the built-in css color names
**/
.blue-background {

}`,
  },
  {
    name: 'border',
    path: 'css/border/border.css',
    text: `/* create a class to use the single line border rule
*  2 pixels wide, dotted, and blue line
*/
.single-line-border {
  border: 2px dotted #0000ff;
}
/*
* create a small 100x100px div
* with a fully circular, 1 pixel-wide, solid black border
*/
.round-border {
  height: 100px;
  width: 100px;
  border: 1px solid #000;
  border-radius: 50%;
}`
  },
  {
    name: 'button',
    path: 'css/button/button.css',
    text: `.button {
  display: block;
  width: 100%;

  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}

.bold {
  font-weight: bold;
}`
  },
  {
    name: 'list',
    path: 'css/list/list.css',
    text: `/*  A little more open ended: create a list with the
*   list.html file list and list-item classes.
*   Body should
*     have a non-white and non-black background color
*   List should
*     be centered
*     have 10px margin between items
*     have a non-white background color
*   List items should
*     not display bullets
*     have non-black text
**/

body {
  background-color: #f34251;
}

.ul-list {

}

.ul-list-item {

}`
  },
  {
    name: 'simple-columns',
    path: 'css/simple-columns/columns.css',
    text: `.col-container {
  width: 100%;
}

.col-half {

}

.col-third {

}`
  },
  {
    name: 'positions',
    path: 'css/positions/positions.css',
    text: `/*
* Setup - you should not need to edit this
*/

body {
  height: 100%;
  position: relative;
}

html {
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  position: relative;
  background-color: #353333;
  height: 100%;
}

.container div {
  border: 1px solid #FFFFFF;
}

/*
* ▒▒▒ Your Code Below ▒▒▒
*/

/*
* Square div 200px by 200px
* fixed to the left side of the container
* 200px down from the top;
**/

.fixed-left-position {

}

/*
* Square div 400px by 400px
* Should be fixed to the center of the page
* https://css-tricks.com/centering-css-complete-guide/ might provide
* some tips and tricks
*/
.center-position {

}

/*
* smaller div with maximum width of 150px
* displays flush with the top right corner of the parent
*/

.top-right {

}

/*
* smaller div with maximum width of 150px
* displays flush with bottom left corner of the parent
*/

.bottom-left {

}

.centered-text {

}
`
  },
  {
    name: 'navbar',
    path: 'css/navbar/navbar.css',
    text:
`/*
* ▒▒▒ navbar-big class ▒▒▒
* will be a fixed horizontal navbar
* with #808080 gray background and white text
*/

.navbar-big {

}

/*
* Our navbar is wrapped in a ul
* Make sure that the ul does not display bullets
* All <li> tags should display in a row
* (There are several ways to do this)
* You'll probably need to use the overflow property if you float the individual elements
* All <a> tags descending from .navbar-big should have white text
*/

.navbar-big ul {

}

.navbar-big li {

}

.navbar-big a {

}

/*
* create a rule that sets a pseudoclass for hover
* on any descendent li from the navbar-big class with bg color #32cd32
*/



/*
* create a rule that sets a pseudoclass for active
* on any descendent li from the navbar-big class with #1e1e1e
*/



/*
* ▒▒▒ navbar-breadcrumb class ▒▒▒
* with #10a3a7 background color
* add a 10px padding between the ul and the surrounding navbar
*/

.navbar-breadcrumb {

}

.navbar-breadcrumb ul {

}

.navbar-breadcrumb li {

}

.navbar-breadcrumb a {

}

/*
* Add a '/' between each list item. Check this link for info
* about adding specific separators
* http://stackoverflow.com/questions/6285359/text-separators-for-li-elements
* for testing purposes, please add these as before pseudo-elements
*/



/*
* Add underline on hover for <a> tags descending from .navbar-breadcrumb
*/

`
  }
]
