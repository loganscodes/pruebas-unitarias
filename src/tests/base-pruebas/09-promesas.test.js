/* eslint-disable */

import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'


describe('09-promesas-test', () => { 
    test('debe de retornar un heroe', (done) => { 

        const id = 1
        getHeroeByIdAsync(id)

        .then(hero => {

            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
            )

            done()
        })
    })



    test('debe de retornar un error si heroe no existe', (done) => { 

        const id = 100
        getHeroeByIdAsync(id)

        .then(hero => {
            expect(hero).toBeFalsy()

            done()
        })

        .catch(error => {

            expect(error).toBe(`no se puede encontrar el heroe ${id}`)


            done()

        })

    })
})