import { describe, it, expect } from 'vitest'
import { transporteRegalos } from '../src/transporteRegalos'

describe('transporteRegalos', (): void => {


    //test 1: debe ser una función
    it('debería ser una funcion', (): void => {
        expect(typeof transporteRegalos).toBe('function')
    })

    // test 2: el primer parámetro debe ser un string
    it('el 1er parámatro debe ser un string', (): void => {
        expect((): number => transporteRegalos(2,"a")).toThrow()
    })


    // test 3: el 2º parámetro debe ser un string
    it('el 2º parámatro debe ser un string', (): void => {
        expect((): number => transporteRegalos('a',1)).toThrow()
    })

    // test 4: debe darnos el nº de cajas de regalos q se pueden transportar
    it('el numero de cajas se pueden transportar', (): void => {
        expect(transporteRegalos('bola', 'pepito')).toBe(3)
    })


})