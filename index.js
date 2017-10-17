/**
 * 需求: 自动生成文件夹
 * 01-教学资料, 02-其他资料, 03-视频, 04-源代码
 * 01-教学资料中要有一个README.md文件
 */

// 1.加载 fs 模块
const fs = require('fs')

const arr = ['01-教学资料', '02-其他资料', '03-视频', '04-源代码']

// 2. 创建文件夹
// for in 遍历对象
// forEach
// map

arr.forEach(function (item, index) {
  fs.mkdir('./' + item, err => {
    if (err) {
      return console.log(`${item} 文件夹创建失败`)
    }
    console.log(`${item} 文件夹创建成功`)
  })
})
// fs.writeFile
