let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

for ( let i = 0; i < pronoun.length;) {
  for ( let j = 0; j < adj.length;) {
    for ( let k = 0; k < noun.length;) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      k = k + 1;
    }
    j = j + 1;
  }
  i = i + 1;
}


/*
let i = 0;
while (i < pronoun.length) {
  let j = 0;
  while (j < adj.length) {
    let k = 0;
    while (k < noun.length) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      k = k + 1;
    }
    j = j + 1;
  }
  i = i + 1;
}
*/