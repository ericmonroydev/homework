const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
  }
  
  const properties = Object.keys(spiderman)
  
  console.log(properties) // 3
  
  properties.forEach(property => {
    console.log(property)
  })
  