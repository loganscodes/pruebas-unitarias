
/* eslint-disable */

import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'
import heroes from '../../data/heroes'


describe('08-imp-exp', () => { 
    test('Debe retornar un arreglo con los heroes de DC', () => { 

        const id = 1
        const hero = getHeroeById(id)

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    })


    test('Debe retornar undefined si no existe el ID', () => { 

        const id = 20
        const hero = getHeroeById(id)
        expect(hero).toBeFalsy()
    })

    test('Debe retornar que pertenece a DC', () => { 

        const owner = 'DC'
        const heroByOwner = getHeroesByOwner(owner)

        expect ( heroByOwner.length ).toBe(3)

        expect (heroByOwner).toEqual( //data hardcode - not recomended
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )

        expect ( heroByOwner ).toEqual( heroes.filter( (heroe) => heroe.owner === owner )  )

    })

    test('Debe retornar que pertenece a Marvel', () => { 

        const owner = 'Marvel'
        const heroByOwner = getHeroesByOwner(owner)

        expect ( heroByOwner.length ).toBe(2)

        expect ( heroByOwner ).toEqual( heroes.filter( (heroe) => heroe.owner === owner )  )

    })
})