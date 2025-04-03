import { Children, ReactElement } from "react";

export function MainComp({ children }) {

    return (
        <main className='main-content'>
            {Children.map(children, child => child
            )}
        </main>
    )
}