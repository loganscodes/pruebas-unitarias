/* eslint-disable */

import { getSaludo } from '../../base-pruebas/02-template-string'

describe('Pruebas en 02-template-string', () => {


    test('getSaludo debe de rerotnar "Hola Fernando"', () => {
        const name = 'Fernando'
        const msj = getSaludo( name )


        expect ( msj ).toBe(`Hola ${name}`)

    })

})



