import { useState } from "react";


export function obtenerListUsuarios (){

    const { result,setResult } = useState([{}]);
    
    let newresult=[{}]
    fetch(import.meta.env.VITE_DEFAULT_PATH+"/"+import.meta.env.VITE_GET_WHATSAPP_NAMES_SUBPATH).then((response)=>response.json()).then((telefonos)=>newresult=telefonos)
    setResult(newresult)
    
    return result;

}
