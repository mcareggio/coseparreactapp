import { useCallback, useState } from "react"

export function ModalAgregarUsuariosEnvio({ isModalOpen, setModalOpen }) {

    const handleClick = () => {
        console.log("Abrir modal")
        setModalOpen(!isModalOpen)

    }

    return (
        <>
            <button onClick={handleClick} name="agregar_usuarios_envio" value="agregar_usuarios_envio">Agregar</button>
        </>
    )
}