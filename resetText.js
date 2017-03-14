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
    name: 'columns',
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
  }
]
