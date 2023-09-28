function createObject(name, subs) {
    const youtuber = {
        name: name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus: function (youtuber) {
            return `El canal de ${name} tiene ${subs} suscriptores`
        }
    }
    let objeto = JSON.stringify(youtuber)
    return `${youtuber.getStatus(name, subs)} del objeto ${objeto}`
}
console.log(createObject('Miguel', 100))
