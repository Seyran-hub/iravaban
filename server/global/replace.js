
   module.exports = replaceLocal = (data, type) => {
    if(type == true)
     for(let e in data){
      if(typeof data[e] == 'string')
         data[e] = data[e].replace(/'/g, "17711771")
     }
   else
   for(let e in data){
    for(let el in data[e]){
        if(typeof data[e][el] == 'string')
            data[e][el] = data[e][el].replace(/17711771/g, "'")
    }
  }  

    return data
  }