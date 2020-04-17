const path = require('path')
const fs = require('fs')

const BASE_PATH = path.join(process.cwd(), 'src')
const BASE_DIR = ['easy', 'medium', 'difficult']
const statistics = new Map()

BASE_DIR.forEach(dirname => {
  const target = path.join(BASE_PATH, dirname)
  const problems = fs.readdirSync(target)
  const count = problems.length
  statistics.set(dirname, count)
  problems.forEach(problem => {
    const files = fs.readdirSync(path.join(target, problem))
    files.forEach(file => {
      const ext = file.slice(file.indexOf('.'))
      statistics.set(ext, (statistics.get(ext) || 0) + 1)
    })
  })
})

const now = new Date().toLocaleString()
statistics.set('now', now)

console.log(statistics)

module.exports = { statistics }
