const game = function game_obj() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 19,
          rebounds: 10,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};

function numPointsScored(name){
    for(let item in game()){
        let players_obj = game()[item].players
        debugger
        for(y of Object.keys(players_obj)){
            if(y == name){
                debugger
                return players_obj[name].points
            }break
        }
    break
}
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(name){
    for (let item in game()) {
      let players_obj = game()[item].players;
        debugger
      for (y of Object.keys(players_obj)) {
        debugger
        if (y == name) {
            return players_obj[name].shoe;
        }
      }  
    }
}
console.log(shoeSize("Bismak Biyombo"));


function teamColors(team_name){
    for (let item in game()) {
      if(game()[item].teamName == team_name){
        debugger
        let colors = game()[item].colors;
        debugger
        return colors.split(" ")

      }
    }
}

console.log(teamColors("Brooklyn Nets"));


function teamNames() {
    let namesArray = [];
    for(items in game()){
        namesArray.push(game()[items].teamName);
        debugger
    }
    return namesArray;
}
console.log(teamNames())


function playerNumbers(team_name){
    for(item in game()){
      debugger
      let jersey_numbers = []
      if(game()[item].teamName == team_name){
        debugger
        let players_obj = Object.keys(game()[item].players)
        debugger
        for(let values of players_obj){
          let jersey = game()[item].players[values].number
          debugger
          jersey_numbers.push(jersey)
        }
        return jersey_numbers;
      }
    }
}

console.log(playerNumbers("Brooklyn Nets"));


function playerStats(player_name){
  for(item in game()){
    let players_obj = Object.keys(game()[item].players);
    debugger
    for(let value of players_obj){
      if(value == player_name){
        debugger
        let player_stats = game()[item].players[value];
        return player_stats
      }
    }
  }
}


console.log(playerStats("Alan Anderson"));


function bigShoeRebounds() {
  let max_shoe = 0;
  let num_of_rebounds = 0;
  for(item in game()){
    let players = game()[item].players
    debugger
    for(let player in players){
      if(players[player].shoe > max_shoe){
        debugger
        max_shoe = players[player].shoe;
        num_of_rebounds = players[player].rebounds
      }
    }
  }
  return num_of_rebounds
}
console.log(bigShoeRebounds())


function mostPointsScored() {
  let max_points = 0;
  let player_name = "";
  for (item in game()) {
    let players = game()[item].players;
    debugger
    for (let player in players) {
      if (players[player].points > max_points) {
        debugger
        max_points = players[player].points;
        player_name = player;
      }
    }
  }
  return player_name;
}
console.log(mostPointsScored());

function winningTeam(){

    let teamScores = {};

    for (let item in game()) {
      let team = game()[item];
      let totalPoints = 0;

      for (let player in team.players) {
        totalPoints += team.players[player].points;
        debugger
      }

      teamScores[team.teamName] = totalPoints;
    }

    let winner = "";
    let maxPoints = 0;

    for (let item in teamScores) {
      if (teamScores[item] > maxPoints) {
        debugger
        maxPoints = teamScores[item];
        winner = item;
      }
    }

    return winner;
}
console.log(winningTeam())


function playerWithLongestName(){

    let Long_Name = "";

    for (let item in game()) {
      let players = Object.keys(game()[item].players);
        debugger
      for (let name of players) {
        if (name.length > Long_Name.length) {
          Long_Name = name;
        }
      }
    }

    return Long_Name;
}

console.log(playerWithLongestName())