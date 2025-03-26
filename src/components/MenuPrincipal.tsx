import { Children, useEffect, useId } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Menuprincipal({ children }) {
    const openmenubuttonid = useId()
    const closemenubuttonid = useId()
    const mainmenuid = useId()
    useEffect(() => {
        //addEventListener("click")
    }, [])
    function openMenu(event: Event) {
        document.getElementById(mainmenuid)?.classList.add("active");
    }
    function closeMenu(event: Event) {
        document.getElementById(mainmenuid)?.classList.remove("active");
    }
    return (
        <nav>
            <AiOutlineMenu id={openmenubuttonid} className="mainmenuicon openmenuicon" onClick={openMenu} />
            <div className="mainmenu" id={mainmenuid}>
                <div className="closemenucontainer"><AiOutlineClose id={closemenubuttonid} className="mainmenuicon closemenuicon" onClick={closeMenu} /></div>
                <ul className="ul-main-menu">
                    {Children.map(children, child => child
                    )}

                </ul>
            </div>
        </nav>
    )
}
export function MenuprincipalItem({ link = "", nombre = "" }) {
    return (<li><a href={link}>{nombre}</a></li>)
}
/*
<li><a href="./">Inicio</a></li>
                    <li><a href="./listado">Listado Usuarios Envio Automatico</a></li>
                    <li><a href="./listado-facturas">Listado Facturas Completo</a></li>
 */