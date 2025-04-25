import { useState } from "react"
import { addClassToElId, remClassToElId } from "../helpers/helpers"
import { AiOutlineClose } from "react-icons/ai"

export function ModalUsrEnvio() {
    const [isOpen, SetOpen] = useState(false)
    function openHandleClick() {
        let newState = !isOpen
        newState ? addClassToElId("modalusrenvio", "mod-visible") : remClassToElId("modalusrenvio", "mod-visible")
        SetOpen(newState)
    }
    return (
        <>

            <button className='btn-buscar' onClick={openHandleClick}>Agregar Usuario</button>
            <div className="velo"></div>
            <div id="modalusrenvio" className="modal-cont">
                <div className="modal">
                    <div className="cls-mod-cont-line"><AiOutlineClose className="mainmenuicon closemenuicon" onClick={openHandleClick} />
                    </div>
                    <form className="mod-form">

                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre"></input>


                        <label htmlFor="enviowhastapp">Envio Por WhatsApp</label>
                        <input type="checkbox" name="enviowhastapp"></input>


                        <label htmlFor="telefono">Numero de WhatsApp</label>
                        <input type="tel" name="telefono" pattern="[0-9]{13}"></input>


                        <label htmlFor="enviomail">Envio Por Email</label>
                        <input type="checkbox" name="enviomail"></input>


                        <label htmlFor="email">Envio por Email</label>
                        <input type="email" name="email"></input>

                    </form>
                </div>
            </div>
        </>
    )
}