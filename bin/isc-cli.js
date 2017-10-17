#!/usr/bin/env node
const yargs = require('yargs')
const argv = yargs.count('verbose')
.alias('v', 'verbose')
.argv

const courseDir = require('../libs/courseDir')
const cwd = process.cwd()

console.log(argv)
if (argv.course && argv) {
  courseDir.create(cwd)
}
