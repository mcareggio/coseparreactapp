import { useId } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function HeaderComp() {
    const openmenubuttonid = useId()
    const closemenubuttonid = useId()

    function openMenu(event: Event) {

    }
    function closeMenu(event: Event) { }
    return (

        <header className='hd-principal'>
            <div></div>
            <div className='hd-brand'>COSEPAR</div>
            <AiOutlineMenu id={openmenubuttonid} className="mainmenuicon openmenuicon" onClick={openMenu} />
            <AiOutlineClose id={closemenubuttonid} className="mainmenuicon closemenuicon" onClick={closeMenu} />
        </header>

    )
}
export default HeaderComp
//