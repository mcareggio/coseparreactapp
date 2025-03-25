import { useEffect, useId } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function HeaderComp() {
    const openmenubuttonid = useId()
    const closemenubuttonid = useId()
    const mainmenuid = useId()
    useEffect(() => {
        document.getElementsById(mainmenuid).s
    }, [])
    function openMenu(event: Event) {

    }
    function closeMenu(event: Event) {

    }
    return (

        <header className='hd-principal'>
            <div></div>
            <div className='hd-brand'>COSEPAR</div>
            <AiOutlineMenu id={openmenubuttonid} className="mainmenuicon openmenuicon" onClick={openMenu} />
            <div className="mainmenu" id={mainmenuid}>
                <div className="closemenucontainer"><AiOutlineClose id={closemenubuttonid} className="mainmenuicon closemenuicon" onClick={closeMenu} /></div>
                <ul className="ul-main-menu">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Listado Usuarios Envio Automatico</a></li>
                    <li><a href="">Listado Facturas Completo</a></li>
                </ul>
            </div>
        </header>

    )
}
export default HeaderComp
//