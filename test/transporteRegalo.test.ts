import { describe, it, expect } from 'vitest'
import { distributeGiftsIgnacio } from '../src/transporteRegalos'

describe('transporteRegalos', (): void => {


    //test 1: debe ser una función
    it('debería ser una funcion', (): void => {
        expect(typeof distributeGiftsIgnacio).toBe('function')
    })

    // test 2: el primer parámetro debe ser un string
    it('el 1er parámatro debe ser un string', (): void => {
        expect((): number => distributeGiftsIgnacio(2,"a")).toThrow()
    })


    // test 3: el 2º parámetro debe ser un string
    it('el 2º parámatro debe ser un string', (): void => {
        expect((): number => distributeGiftsIgnacio('a',1)).toThrow()
    })

    // test 4: debe darnos el nº de cajas de regalos que se pueden transportar
    it('el numero de cajas se pueden transportar', (): void => {
        expect(distributeGiftsIgnacio('bola', 'pepito')).toBe(6)
    })


})