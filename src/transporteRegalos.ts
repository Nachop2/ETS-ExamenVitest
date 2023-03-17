import { describe, it, expect } from 'vitest'
// Escribir una función "transporteRegalos(tipoRegalos, renos)" que nos dice
// el nº de cajas de regalos que puede transportar en su trineo Papa Noel en función del peso de los regalos
// y del tipo de reno que lleve. Para ello se cumple lo siguiente:
//
//      # PesoRegalos=nº de letras que contiene ese regalo. Ej: ball=4;
//      # CapacidadTransporteReno= 2*nºletras del nombre del reno. Ej: Reno "Dasher"=6=>12;
//
// En el ejemplo anterior, se pueden llevar: capacidadReno/pesoRegalo=12/4= 3 cajas de ese regalo
//


export const transporteRegalos = (tipoRegalos, nombreRenos): number => {
    if (typeof tipoRegalos != 'string') throw new Error('debe ser un string')
    if (typeof nombreRenos != 'string') throw new Error('debe ser un string')
    const pesoRegalo = tipoRegalos.length
    const pesoReno = nombreRenos.length * 2
    return Math.floor(pesoReno / pesoRegalo)
}














