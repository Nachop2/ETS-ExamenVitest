import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe("fizzbuzz",(): void => {

    it("Le damos el valor 2, el cual deberia igualar a Ignacio", (): void => {
        expect(fizzbuzz(2)).equals("Ignacio")
    })

    it("Le damos el valor 3, el cual deberia igualar a Revilla", (): void => {
        expect(fizzbuzz(3)).equals("Revilla")
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
})
    


