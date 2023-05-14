const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  console.log(person.name)


  // Object destructuring
  const { name, age, city } = person;
  console.log(name); // 'John'
  console.log(age); // 30
  console.log(city); // 'New York'

  const games = [
    
    {
        awayTeam: {
          team: 'Golden State',
          points: 119,
          isWinner: true
        },

        homeTeam: {
          team: 'Houston',
          points: 106,
          isWinner: false
        }
      }

  ]

  const {awayTeam, homeTeam} = games[0];
  
console.log(games[0].awayTeam.points)



console.log(awayTeam);