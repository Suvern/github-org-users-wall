const { exceptTeams, exceptUsers } = require('./config')

/**
 * 生成col列的表头
 * @param {number} row 
 */
const tableTitle = (members, col) => {
    if (col === 0) { return '' }
    if (members.length < col) { col = members.length }
    let title1 = '|'
    let title2 = '|'
    for (let i = 0; i < col; i++) {
        title1 += '👷|'
        title2 += ':-------------------:|'
    }
    return title1 + '\n' + title2 + '\n'
}

/**
 * 生成内容(头像+链接)
 * @param {[]]} members 
 * @param {number} col 
 */
const tableContent = (members, col) => {
    if (members.length === 0) return ''
    let rows = new Array(Math.ceil(members.length / col)).fill([])
    members.forEach((item, index) => {
        let i = Math.floor(index / col)
        rows[i] = [...rows[i], item]
    })

    let result = ''
    rows.forEach(row => {
        let line = '|'
        row.forEach(member => {
            line += `<img height='48' width='48' src='${member.avatar_url}'>|`
        })
        line += '\n|'
        row.forEach(member => {
            line += `[@${member.login}](${member.html_url})|`
        })
        line += '\n'
        result += line
    })

    return result + '\n'
}

/**
 * 生成以Team Name为分组标题的MarkDown
 * @param {} members 
 * @param {number} col 
 */
const getMarkdown = (members, col = 5) => {
    let result = ''
    Object.keys(members).forEach(key => {
        let team = members[key].filter(member => !exceptUsers.some(item => item === member.login))
        result += `## ${key}\n`
        result += tableTitle(team, col)
        result += tableContent(team, col)
        result += '\n'
    })
    return result
}

module.exports = {
    getMarkdown,
}