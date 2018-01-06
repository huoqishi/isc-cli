#!/usr/bin/env node
const yargs = require('yargs')
const argv = yargs.count('verbose')
  .alias('v', 'verbose')
  .argv

const courseDir = require('../libs/courseDir')
const genGitIgnore = require('../libs/gen-gitignore')
const cwd = process.cwd()

// console.log(argv)
argv.version = require('../package.json').version
function handlerArgv () {
  if (argv && argv.course) {
    courseDir.create(cwd)
    return
  }
  if (argv && argv.git) {
    genGitIgnore(cwd)
    // return
  }
}
handlerArgv()
