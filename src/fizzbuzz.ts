import { describe, it, expect } from 'vitest'

export const fizzbuzz = (num): String => {

    let texto:String = "";
    if (num % 2 == 0) texto += "Ignacio";
    if (num % 3 == 0) texto += "Revilla";
    if (num % 11 == 0) texto += "Italiyankina";
    return texto;
}

