describe('Pruebas en <DemoComponent />', () => {
    test('Esta pruena mo debe de fallar', () => {
        //1.- Inicialización

        const message1 = 'Hola Mundo'

        //2.- Estimulo

        const message2 = message1.trim();

        //Observar el comportamiento esperado
        expect(message1).toBe(message2)
        
    })
})