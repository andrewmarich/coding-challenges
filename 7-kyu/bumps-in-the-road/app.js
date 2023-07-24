//Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

//P
//string of underscores and n's

//R
//'Woohoo' if num of n <= 15 else 'Car Dead'

//E
// assert.strictEqual(bump("n"), "Woohoo!");
// assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
// assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
// assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
// assert.strictEqual(bump("______n___n_"), "Woohoo!")

//P
//split
//filter
  //conditional
//length

function bump(x){
    return x.split('').filter(e => {
      return e === 'n'
    }).length <= 15 ? 'Woohoo!' : 'Car Dead'
  }