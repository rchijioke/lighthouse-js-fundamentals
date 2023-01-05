
let loopyLighthouse = function(range, multiples, words){
 let x = range[0]
  for (x = range[0]; x <= range[1]; x++){
    if(x % multiples[0] === 0 && x % multiples[1] === 0){
      console.log(words[0] + words[1])
    }
    else if (x % multiples[0] === 0) {
      console.log(words[0])
    }
    else if (x % multiples[1] === 0) {
      console.log(words[1])
    }
    else {console.log(x)}
  }
}
loopyLighthouse([100, 200], [3, 4], ["Batty","Beacon"]);
