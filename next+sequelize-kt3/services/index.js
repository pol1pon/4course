const { Player, Team } = require('../models');


async function findAllPlayers() {
    const data = await Player.findAll()
    return data
}

async function findAllTeams() {
    const data = await Team.findAll()
    return data
}

async function findPlyersByTeam(teamId) {
    const data = Player.findAll({
        where: {teamId: teamId}
    })
    return data
}


async function createTeam(title, country) {
    const data = await Team.create({
        title,
        country
    })
    return data
}


async function createPlayer(nickname, teamId, game) {
    const data = await Player.create({
        nickname,
        teamId: teamId || null,
        game,
    })
    return data
}

async function findPlyerByPk(id) {
    const data = await Player.findByPk(id)
    return data
}

async function findTeamWithPlayers(teamId){
    const data = await Team.findAll({
        where: {id: teamId},
        include: [{model: Player, as: 'players', required: false}],
    })
    return data.map(el => el.get({plain: true})).map(team => ({
        ...team, 
        players: team.players.map(player => player.get({plain: true}))
    }))
    
        
}


module.exports = { findAllPlayers, findAllTeams, findPlyersByTeam, createTeam, createPlayer, findPlyerByPk, findTeamWithPlayers }