/* eslint-disable */

import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }


        const user = getUser()

        expect ( testUser ).toStrictEqual(user)
    })


    test('getusuarioActivo debe de retornar un objeto', () => { 

        const name = 'Fernando'

        const usuarioActivo = getUsuarioActivo(name)


        expect  ( usuarioActivo ).toStrictEqual( {
            uid: 'ABC567',
            username: name
        } )


    })

});