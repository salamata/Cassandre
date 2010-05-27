function(doc) {
  const ALPHA = /[a-zàâçéêèëïîôöüùû0-9]+|[^a-zàâçéêèëïîôöüùû0-9]+/gi;
  words = [];
  for each (p in doc.posts) {
    words = words.concat(p.text.match(ALPHA));
  }
  for (i=0; i<words.length-4; i+=2) {
    if (
      (words[i].length>3 || words[i+2].length>3 || words[i+4].length>3)
      && words[i+1].length==1
      && words[i+3].length==1
    ) {
      emit([
        words[i].toLowerCase(),
        words[i+2].toLowerCase(),
        words[i+4].toLowerCase()
      ], null);
    }
  }
}