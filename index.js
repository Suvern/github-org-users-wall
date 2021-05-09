const fs = require('fs')
const path = require('path')
const { org, auth, output } = require('./config')
const { getMembersMap } = require('./org')
const { getMarkdown } = require('./md')

async function main() {
    const map = await getMembersMap(auth, org)
    const result = getMarkdown(map)

    const file = path.resolve(__dirname, `./${output}`)
    fs.writeFile(file, result, { encoding: 'utf8' }, _err => {})
    console.log('文件写入成功')
}

main()