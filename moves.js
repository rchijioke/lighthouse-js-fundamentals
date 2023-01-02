const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
 const finalPosition = function chooseMove(moves) {
 
  let direction = [0,0];

  for (let  i = 0; i <= moves.length; i++) {
    
    if (moves[i] === "north"){
      direction[1]++;}

      else if (moves[i] === "south"){
        direction[1]--;}

        else if (moves[i] === "west"){
          direction[0]--;}

          else if( moves[i] === "east"){
          direction[0]++;}

        }
        return direction;
      }

       finalPosition(moves)

      console.log(finalPosition(moves))