const { findAllTeams, findAllPlayers, createTeam, createPlayer, findPlyerByPk, findTeamWithPlayers } = require('./services')



async function main() {
    // await createTeam('team1', 'country1')
    // await createTeam('team2', 'country2')
    // await createPlayer('player1', 1, 'Dota2')
    // await createPlayer('player2', 1, 'Dota2')
    // await createPlayer('player3', 2, 'Cs2')
    // await createPlayer('player4', 2, 'Cs2')

}``

async function read() {
    // console.log('---------find all teams-----------');
    // console.log(await findAllTeams())
    // console.log('----------find all players-----------');
    // console.log(await findAllPlayers())
    // console.log('----------find plyer by pk-----------');
    // console.log(await findPlyerByPk(1))
    console.log('----------find team with players-----------');
    console.log(await findTeamWithPlayers(2))
}

read()