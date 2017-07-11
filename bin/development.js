require('colors')
let log = console.log.bind(console, '>> [DEV]:'.red)
require('../app')
log('♪ App Started'.green)