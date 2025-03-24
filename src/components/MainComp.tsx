import { Children, ReactElement } from "react";

export function MainComp({ children }) {
    const element = Children.only(children)
    return (
        <main className='main-content'>
            {element}
        </main>
    )
}