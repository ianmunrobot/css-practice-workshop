// script to reset css files
const exec = require('child_process').exec;
const Promise = require('bluebird');

const filesText = require('./resetText');
const args = process.argv.slice(2);

let filesToReset;

// parse arguments
if (args.includes('--all')) {
  filesToReset = filesText;
} else if (args.length > 0) {
  filesToReset = filesText.filter(file => {
    return args.includes(file.name);
  });
} else {
  console.log('no name specified.\nPlease specify file name (identical to folder name) or --all\n');
  process.exit(1);
}

// handle invalid arguments
if (filesToReset.length === 0) {
  console.log(
`${args} did not include any valid file names.
Look in the css folder for file names or use the --all flag to reset all files`);
  process.exit(1);
}

// map the command execution
let promises = filesToReset.map(file => {
  const command = `echo "${file.text}" > ${file.path}`
  return new Promise((resolve, reject) => {
    exec(command, function(error, stdout, stderr) {
      if (error !== null) {
        reject(new Error('exec error: ' + error));
      } else {
        resolve(stdout);
      }
    });
  })
});

// log number of updated files
Promise.all(promises)
  .then(commands => {
    console.log(`${commands.length} files updated`);
  })
  .catch(err => {
    console.log('File read error!' + err.message);
  })
