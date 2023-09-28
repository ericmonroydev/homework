const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}


const entries1 = Object.entries(spiderman)

entries1.forEach(entry => {
  console.log(entry)
})


const entries2 = Object.entries(spiderman)

entries2.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})