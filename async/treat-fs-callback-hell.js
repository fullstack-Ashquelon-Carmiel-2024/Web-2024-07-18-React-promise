/* const fs = require('fs'); */

// 3 args: where from to read, encoding, callback function
// read file passes error and the data that was read into it's callback function
/* fs.readFile('./data/salad.JSON',"utf-8",(err,data)=>{

    if (err) {
        console.log(err.message)
    } else {

        console.log(data)
        fs.mkdir('data02',err => {

            if (err) {
                console.log('while making dir, ERROR:\n',
                             err.message)

            } else {

                console.log('dir created')
                // 3 args: where to write, what to write, callback function 
                // writeFile creates file if it does not exist, and 
                // writes data there
                fs.writeFile('./data02/text02.txt',data,err=>{

                     if (err) {
                         console.log('while writing file, ERROR:\n',err.message)

                     } else {

                          console.log('file has been written')

                     }

                })

            }

        })

    }


}) */

// old way have using promise-based fs methods
/* const { readFile } = require("fs");
const { promisify } = require('util');
const promisifiedReadFile = promisify(readFile);

promisifiedReadFile(__filename, { encoding: "utf8" })
  .then(data => console.log(data)); */


// --------------------

// NodeJS 11 way of using promise-based fs methods
// no util.promisify!!!
/* const { readFile } = require("fs").promises;
readFile(__filename, { encoding: "utf8" })
.then(data => console.log(data)); */

// --------------------

// Since Node.js 14 the fs module provides two ways to use the promises-based file-system methods. 
// The promises are available via require('fs').promises or require('fs/promises').

// Since Node.js v14: use promise-based fs methods
// no util.promisify!!!


// const { readFile, mkdir, writeFile } = require("fs/promises");
/* readFile(__filename, { encoding: "utf8" })
  .then(data => console.log(data));
readFile(__filename, "utf8")
  .then(data => console.log(data)); */

