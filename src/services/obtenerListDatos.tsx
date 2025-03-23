import whatsappjson from '../mocks/listadoTipoEnvioWhatsApp.json';
import { datos_forma_envio } from '../types/common.tsx'
/*
export function obtenerListDatos(url: string) {



    let newresult = [{}]
    fetch(url).then((response) => response.json()).then((telefonos) => newresult = telefonos)

    return newresult;

}
*/
export function obtenerListDatos(url: string) {



    let newlistado: datos_forma_envio[] = []
    whatsappjson.map((el) => { newlistado.push({ id: el.id, nombre: el.nombre, formaEnvio: el.telefono }) })

    return newlistado;

}