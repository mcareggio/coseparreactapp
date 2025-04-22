import { Dispatch, useEffect, useRef, useState } from "react";
import { recibo } from "../types/common";
type props = {
    id: number,
    isChecked: boolean[],
    setCheck: Dispatch<boolean[]>

}
export function Checkbox({ id = 0, isChecked, setCheck }: props) {


    function handleChange(e: Event) {

        let newChecksState = [];
        //isChecked.map((el: recibo) => newChecksState.push(el.activo))
        isChecked.map((isCheckEl) => newChecksState.push(isCheckEl))
        newChecksState[id] = !isChecked[id]
        setCheck(newChecksState)
        console.log(id + "" + newChecksState)

    }

    return (
        <input type="checkbox" id={id.toString()} value={isChecked[id]} checked={isChecked[id]} onChange={handleChange} />
    )
}