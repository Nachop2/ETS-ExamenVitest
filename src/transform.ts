import { describe, it, expect } from 'vitest'

export const transform = (texto,texto2): boolean => {
    let posibleTransformar:boolean = false;
    if (texto.length != texto2.length) throw new Error('deben ser de igual tamaño');
    if (typeof texto != 'string') throw new Error('Texto 1 debe ser string');
    if (typeof texto2 != 'string') throw new Error('Texto 2 debe ser string');
    /*
    Work in progress de codigo que confirma la transformacion a otro string
        Debe devolver un boleano true o false
        Debe tener el mismo numero de letras; ej: ab -->def
        Debe tener el mismo numero de letras diferentes (únicas); ej: abb -->abc 

    */
    let letras:String[] = texto.split('');
    let letras2:String[] = texto2.split('');
    let abc:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let abc2:string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let union:string = "";
    



    return posibleTransformar;

}

