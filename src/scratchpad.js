// const stringSimilarity = require('string-similarity')
// const axios = require('axios')
// import { exec } from 'child_process'
// import { writeFile } from 'fs'
// import googleIt from 'google-it'
//
// googleIt({
//   query: 'poison the well opposite of december',
//   returnHtmlBody: true
// })
//   .then(({ body }) => {
//     writeFile('googleIt.html', body.replace(/[\n\r]/g, ''), 'utf8', err => {
//       if (err)
//         console.error(`Error writing to file ${output}: ${err}`)
//
//     })
//   })

// const INDEX = join(__dirname, '../googleIt.html')
// const readFile = promisify(fs.readFile)
//
// const linkRegEx = /mu(s)ic/g
//
// readFile(INDEX)
//   .then(e => e.toString())
//   .then(html => {
//     return linkRegEx.exec(html)[1]
//   })
//   .then(console.log)
//
//

/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
}

/** @enum {function(number): number} */
const Math = {
  add1: n => n + 1,
  id: n => -n,
  sub1: n => n - 1,
}

More

JSDocState
