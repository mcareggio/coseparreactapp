import { useEffect, useState } from "react";
import whatsappjson from '../mocks/listadoTipoEnvioWhatsApp.json';
import mailjson from '../mocks/listadoTipoEnvioMail.json';
import { tipo_envio_str } from "../types/common";


export default function useListarUsrTipoEnvio({ tipoEnvio }) {

    const [listado, setListado] = useState([{ id: 1, nombre: "", formaEnvio: "" }]);

    useEffect(() => {

        let newlistado: [{ id: number, nombre: string, formaEnvio: string }] = [];
        switch (tipoEnvio) {

            case tipo_envio_str.whatsapp:
                console.log("Obteniendo Whastapp");
                whatsappjson.map((el) => { newlistado.push({ id: el.id, nombre: el.nombre, formaEnvio: el.telefono }) })
                //hacer un servicion para que devuelva esto que se obtiene del mock
                break;
            case tipo_envio_str.mail:
                mailjson.map((el) => { newlistado.push({ id: el.id, nombre: el.nombre, formaEnvio: el.email }) })
                break;
            default:
                newlistado = [{}];

        }

        setListado(newlistado);

    }, [])
    console.log(listado);
    return { listado };

}