import { useEffect, useRef, useState } from "react";


export function Checkbox({ id, isChecked, setCheck }) {


    function handleChange(e: Event) {

        let newChecksState = [];
        isChecked.map(el => newChecksState.push(el))
        newChecksState[id] = !isChecked[id]
        setCheck(newChecksState)
        console.log(id + "" + newChecksState)

    }

    return (
        <input type="checkbox" id={id.toString()} value={isChecked[id]} checked={isChecked[id]} onChange={handleChange} />
    )
}