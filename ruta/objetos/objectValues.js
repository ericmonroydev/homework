const spiderman = {
    name: 'Spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}

const values = Object.values(spiderman)

values.forEach(value => {
    console.log(value)
})
