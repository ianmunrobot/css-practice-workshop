# css-tester

A simple workshop for learning/testing basics of CSS

## Requires:

* `mocha` global install

## Setup

1. `npm install`
2. `npm test` to start the Karma testing server. Follow the given URL to capture a browser for testing. So far, this workshop has only been tested with Chrome
3. Keep your browser window open/on top of other tabs as timeouts/async errors can occur otherwise

## Suggested Use and Order

This workshop is designed as a basic CSS tutorial to get up and running with CSS rules and their interactions in browsers.
Start at the `.css` file in each folder to get a sense of the spec. If you need to edit the HTML file as well, the spec will tell you.

If a folder has a `.secrets.js` file, this is to hide the raw CSS style checking while you are reading the test specs. You can see the actual values being tested against in the secrets file, but you should avoid this if possible


1. `basics` folder - try this out to learn a few basics
2. `border` folder - learn a few border rules and shorthands
3. `list` folder - try out some basic unordered list styling within a HTML file

## To reset your CSS files


`npm run reset [<name> <--all>]` will overwrite CSS files with their starting point. `<name>` represents the folder name of the workshop stage or `--all` can be used to reset the entire workshop.

Note: this workshop is in development, so some of the reset scripts load the solution, not a blank template
