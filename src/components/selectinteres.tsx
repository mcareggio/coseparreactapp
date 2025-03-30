import { useEffect } from "react"

export function Selectinteres({ id, interesarr, setInteresarr }) {
    function handleChange(e: Event) {
        let newarraystate: string[] = []
        interesarr.map((el: string, index: number) => {

            id == "select" + index ? newarraystate.push(e.target.value) : newarraystate.push(el)
        })
        console.log(newarraystate)
        setInteresarr(newarraystate)
    }
    return (<select id={id} onChange={handleChange}>
        <option value="0">0%</option>
        <option value="1">1%</option>
        <option value="2">2%</option>
        <option value="3">3%</option>
        <option value="4">4%</option>
        <option value="5">5%</option>
        <option value="6">6%</option>
    </select>)
}