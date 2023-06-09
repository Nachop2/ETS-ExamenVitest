import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe("fizzbuzz",(): void => {

    it("Le damos un string, deberia dar error", (): void => {
        expect((): String => fizzbuzz("a")).toThrow()
    })

    /*expect((): number => transporteRegalos(2,"a")).toThrow()*/
    it("Le damos el valor 2, el cual deberia igualar a Ignacio", (): void => {
        expect(fizzbuzz(2)).equals("Ignacio")
    })

    it("Le damos el valor 3, el cual deberia igualar a Revilla", (): void => {
        expect(fizzbuzz(3)).equals("Revilla")
    })
    it("Le damos el valor 6, el cual deberia igualar a IgnacioRevilla", (): void => {
        expect(fizzbuzz(6)).equals("IgnacioRevilla")
    })
    
    it("Le damos el valor 11, el cual deberia igualar a Italiyankina", (): void => {
        expect(fizzbuzz(11)).equals("Italiyankina")
    })

    it("Le damos el valor 22, el cual deberia igualar a Italiyankina", (): void => {
        expect(fizzbuzz(22)).equals("IgnacioItaliyankina")
    })

    it("Le damos el valor 33, el cual deberia igualar a Revilla Italiyankina", (): void => {
        expect(fizzbuzz(33)).equals("RevillaItaliyankina")
    })

    it("Le damos el valor 66, el cual deberia igualar a Ignacio Revilla Italiyankina", (): void => {
        expect(fizzbuzz(66)).equals("IgnacioRevillaItaliyankina")
    })

})
    


