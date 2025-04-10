export enum tipo_envio_str {
    whatsapp,
    mail,
    none
}
export type datos_forma_envio = {
    id: number,
    nombre: string,
    formaEnvio: string
}
export type list_usuarios_facturas = {
    id: number,
    nombre: string,
    direccion: string,
    ruta: number,
    folio: number,
    subfolio: number
}
export type usuarios_envio = {
    id: number,
    nombre: string,
    telefono: number,
    email: string,
    enviowhatsapp: boolean,
    enviomail: boolean
}
export type recibo = {

    ruta: number,
    folio: number,
    subfolio: number,
    nombre: string,
    direccion: string,
    periodo: number,
    total: number,
    fecpago: string,
    activo: boolean
}
