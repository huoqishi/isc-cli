const fs = require('fs')
const path = require('path')
module.exports = function (dirpath = process.cwd()) {
  fs.readFile(path.join(__dirname, './.gitignore'), (err, data) => {
    if (err) {
      return console.log(err)
    }
    const filepath = path.join(dirpath, './.gitignore')
    fs.writeFile(filepath, data, err => {
      if (err) {
        return console.log(err)
      }
      console.log('.gitignore 生成成功！')
      console.log(path.join(filepath, './.gitignore'))
    })
  })
}
