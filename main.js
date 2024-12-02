function uefaEuro2016(teams, scores){
    // target first or 2nd team / scores
    const teamA = [teams[0], scores[0]]
    const teamB = [teams[1], scores[1]]
    
   
  //check which team won and lost 
    if(teamA[1] === teamB[1]) {
      return `At match ${teamA[0]} - ${teamB[0]}, teams played draw.`
    } else if(teamA[1] > teamB[1]) {
      return `At match ${teamA[0]} - ${teamB[0]}, ${teamA[0]} won!`
    } else {
      return `At match ${teamA[0]} - ${teamB[0]}, ${teamB[0]} won!`
    }
    
    
  //check if they tied
      
  }
  
  uefaEuro2016(['Mexico', 'Costa Rica'],[4, 1]) // "At match Mexico - Costa Rica, Mexico won!"