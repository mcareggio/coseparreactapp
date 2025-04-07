export function PrintButton() {
    const handleClick = () => {
        print()
    }
    return (

        <button className="print-button" onClick={handleClick}>Imprimir</button>
    )
}