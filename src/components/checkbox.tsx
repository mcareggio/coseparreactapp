import { useEffect, useRef, useState } from "react";
import { recibo } from "../types/common";

export function Checkbox({ id = 0, isChecked, setCheck }) {


    function handleChange(e: Event) {

        let newChecksState = [];
        isChecked.map((el: recibo) => newChecksState.push(el))
        newChecksState[id] = !isChecked[id]
        setCheck(newChecksState)
        console.log(id + "" + newChecksState)

    }

    return (
        <input type="checkbox" id={id.toString()} value={isChecked[id]} checked={isChecked[id]} onChange={handleChange} />
    )
}