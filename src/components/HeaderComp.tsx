import { Menuprincipal, MenuprincipalItem } from "./MenuPrincipal";

export default function HeaderComp() {

    return (

        <header className='hd-principal'>
            <div></div>
            <div className='hd-brand'>COSEPAR</div>
            <Menuprincipal>
                <MenuprincipalItem link="/" nombre="Inicio" />
                <MenuprincipalItem link="/listado" nombre="Listado Usuarios Envio Automatico" />
                <MenuprincipalItem link="/listado-facturas" nombre="Listado Facturas Completo" />
            </Menuprincipal>
        </header >

    )
}
