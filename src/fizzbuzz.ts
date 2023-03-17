import { describe, it, expect } from 'vitest'

export const fizzbuzz = (num): String => {
    if (typeof num != 'number') throw new Error('debe ser un numero')
    let texto:String = "";
    if (num % 2 == 0) texto += "Ignacio";
    if (num % 3 == 0) texto += "Revilla";
    if (num % 11 == 0) texto += "Italiyankina";
    return texto;
}

