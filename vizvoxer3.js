function rot13(str) {
    return (str+'').replace(/[a-zA-Z]/gi,function(s){
          return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13))
      })
  }
  console.log(rot13('SERR PBQR PNZC'));
