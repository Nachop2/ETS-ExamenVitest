import { describe, it, expect } from 'vitest'
import { transform } from '../src/transform'

describe("transform",(): void => {
    
    it("Le damos 2 string de tamaño diferente, dar error", (): void => {
        expect((): boolean => transform("a","aa")).toThrow()
    })
    it("Le damos texto 1 numerico, da error", (): void => {
        expect((): boolean => transform(1,"aa")).toThrow()
    })
    it("Le damos texto 2 numerico, da error", (): void => {
        expect((): boolean => transform("a",2)).toThrow()
    })
    it("Le damos textos numerico, da error", (): void => {
        expect((): boolean => transform(2,2)).toThrow()
    })
    
})
    


