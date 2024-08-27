function abbrevName(name){
    return name.split(' ').map(word => word.charAt(0)).join('.').toUpperCase()
  }