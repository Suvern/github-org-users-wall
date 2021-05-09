const { Octokit } = require("@octokit/rest")
const { exceptTeams } = require('./config')

/**
 * 获取{team: members}
 * @param {string} auth GitHub Personal Token
 * @param {string} org Organization Name
 */
const getMembersMap = async(auth, org) => {
    const octokit = new Octokit({ auth: auth })

    const map = {}

    const result = await octokit.teams.list({ org: org, })
    const teams = result.data

    for (let i = 0; i < teams.length; i++) {
        // 过滤Team
        if (exceptTeams.some(item => teams[i].slug === item)) {
            continue
        }
        const result = await octokit.teams.listMembersInOrg({
            org: org,
            team_slug: teams[i].slug,
        })

        console.log(`爬取到${teams[i].name}的members: ${result.data.length}个`)

        // 如果想以其他方式命名Team，可以讲name换成别的字段
        map[teams[i].name] = result.data
    }

    return map
}

module.exports = {
    getMembersMap
}