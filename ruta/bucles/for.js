const carros = [
    {
        "type": "people",
        "id": "9",
        "attributes": {
            "firstName": "Dan",
            "lastName": "Gebhardt",
            "twitter": "dgeb"
        },
        "links": {
            "self": "http://example.com/people/9"
        }
        , "data": [
            {
                "type": "articles",
                "id": "1",
                "attributes": {
                    "title": "JSON:API paints my bikeshed!"
                },

                "relationships": {
                    "author": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/author",
                            "related": "http://example.com/articles/1/author"
                        },
                        "data": { "type": "people", "id": "9" }
                    },
                    "comments": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/comments",
                            "related": "http://example.com/articles/1/comments"
                        },
                        "data": [
                            { "type": "comments", "id": "5" },
                            { "type": "comments", "id": "12" }
                        ]
                    }
                },

                "links": {
                    "self": "http://example.com/articles/1"
                }
            }
        ],
    },
    {
        "type": "comments",
        "id": "5",
        "attributes": {
            "body": "First!"
        },
        "relationships": {
            "author": {
                "data": { "type": "people", "id": "2" }
            }
        },
        "links": {
            "self": "http://example.com/comments/5"
        },
        "data": [
            {
                "type": "articles",
                "id": "1",
                "attributes": {
                    "title": "JSON:API paints my bikeshed!"
                },

                "relationships": {
                    "author": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/author",
                            "related": "http://example.com/articles/1/author"
                        },
                        "data": { "type": "people", "id": "9" }
                    },
                    "comments": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/comments",
                            "related": "http://example.com/articles/1/comments"
                        },
                        "data": [
                            { "type": "comments", "id": "5" },
                            { "type": "comments", "id": "12" }
                        ]
                    }
                },

                "links": {
                    "self": "http://example.com/articles/1"
                }
            }
        ],
    },
    {
        "type": "comments",
        "id": "12",
        "attributes": {
            "body": "I like XML better"
        },
        "relationships": {
            "author": {
                "data": { "type": "people", "id": "9" }
            }
        },
        "links": {
            "self": "http://example.com/comments/12"
        },
        "data": [
            {
                "type": "articles",
                "id": "1",
                "attributes": {
                    "title": "JSON:API paints my bikeshed!"
                },

                "relationships": {
                    "author": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/author",
                            "related": "http://example.com/articles/1/author"
                        },
                        "data": { "type": "people", "id": "9" }
                    },
                    "comments": {
                        "links": {
                            "self": "http://example.com/articles/1/relationships/comments",
                            "related": "http://example.com/articles/1/comments"
                        },
                        "data": [
                            { "type": "comments", "id": "5" },
                            { "type": "comments", "id": "12" }
                        ]
                    }
                },

                "links": {
                    "self": "http://example.com/articles/1"
                }
            }
        ],
    }
]


/* console.log(carros.length);// tamaño del array
console.log(carros[0]); // ACCEDIENDO AL ARRAY POSICIÓN 0
console.log(carros[0].type);  */// ACCEDIENDO AL VALOR DE TYPE EN ARRAY 0


// bucle for
/* for (let i = 0; i < carros.length; i++) {
    let data = carros[i].data;
    for (let x = 0; x < data.length; x++) {
        console.log(carros[x].type);
    }
} */

/* for (let i = 0; i < carros.length; i++) {
    console.log(carros[i].id)
} */

let frutas = ['🍎', '🍌', '🍓']
/* for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i])
    console.log('i--', i--)
    console.log('i', i)
console.log('termina for--')
} */

for (let i = 0; i < frutas.length; i++) {
    console.log('uno', i)
    if (i === 1) {
        console.log('entró', i)
        break      
    };
    console.log('afuera', i)
}