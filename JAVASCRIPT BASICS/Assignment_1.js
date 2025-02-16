/* 
We're building a Cricket app !

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

GOOD LUCK 😀
*/

const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumrah",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
// 1. Create one player array for each team (variables 'players1' and 'players2') (Destructuring)
  let players1 = game.players[0];
  let players2 = game.players[1];

  // Answer let [players1,players2] = game.players 

  console.log("players1 =>",players1);
  console.log("players2 =>",players2);
 
//2. The first player in any player array is the wicketkeeper and the others are field players. 
//For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
//and one array ('fieldPlayers') with all the remaining 10 field players (Rest Operator)

let Ind = players1[0];

let fieldPlayers = [];

for(let i = 1; i<players1.length;i++){
    fieldPlayers = [...fieldPlayers, players1[i]];
}
  
console.log("Ind=>",Ind);
console.log("fieldPlayers =>",fieldPlayers);
// Answer let [Ind,...fieldplayers] = players1

// 3. Create an array 'allPlayers' containing all players of both teams (22 players) (Spread Operator)
let allPlayers = [...players1, ...players2];

console.log("allPlayers=>",allPlayers);

//4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
//containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil' (Spread Operator)

let players1Final = [...players1, "Sandeep", "John", "Sunil"];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') (Destructuring)

let {team1, x:draw, team2} = game.odds;

console.log(team1, draw, team2);

//6. The team with the lower odd is more likely to win. 
//Print to the console which team is more likely to win, 
//WITHOUT using an if/else statement or the ternary operator. (Logical)

console.log(team1 || team2);

// Answer team1 < team2 && console.log('Team 1 will win')
// team2 < team1 && console.log('Team 2 will win')

//7. Loop over the game.Century array and print each player name to the 
//console, along with the Century number (Example: "Century 1: Kohli")

for(let [index,player] of game.Century.entries()){
    console.log(`Century ${index+1}: ${player}`);
    }

//8. Use a loop to calculate the average odd and log it to the console

let count=0;
let sum=0;

for(let currItem in game.odds){
    sum=sum+game.odds[currItem];
    count++;
    
}
console.log(sum);
console.log(count);
let average = sum/count;
console.log("average =>",average);
console.log("average =>",Math.round(average));
console.log("average =>",Math.floor(average));
/* Answer
for (let currItem of Object.values(game.odds)){
}
*/
