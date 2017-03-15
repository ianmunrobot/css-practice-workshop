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
  /*width: 97.2%;*/
  /*position: absolute;*/
  padding: 10px 10px;
  background-color: rgb(45, 24, 155);
  list-style: none;
}

.ul-list-item {
  color: #4579a1;
  margin: 10px auto;
}`
  },
  {
    name: 'simple-columns',
    path: 'css/simple-columns/columns.css',
    text: `.col-container {
  width: 100%;
}

.col-half {
  width: 50%;
  float: left;
}

.col-third {
  width: 33%;
  float: left;
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
  background-color: #a8a1a1;
}

/*
* Square div 400px by 400px
* Should be fixed to the center of the page
* https://css-tricks.com/centering-css-complete-guide/ might provide
* some tips and tricks
*/
.center-position {
  background-color: #a5a5a5;
}

/*
* smaller div with maximum width of 150px
* displays flush with the top right corner of the parent
*/

.top-right {
  background-color: #706a6a;
}

/*
* smaller div with maximum width of 150px
* displays flush with bottom left corner of the parent
*/

.bottom-left {
  background-color: #706a6a;
}

.centered-text {

}
`
  }
]
