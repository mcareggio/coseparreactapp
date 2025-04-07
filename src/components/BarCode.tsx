import { useEffect, useRef, useState } from "react"
import JsBarcode from "JsBarcode"
import { createCanvas, loadImage } from "canvas"
export function Barcode({ className = "", code = "" }) {
    let currentRef = useRef("code")
    useEffect(() => {
        let barcodestring = code
        //let JsBarcode = require('jsbarcode');
        //let { createCanvas, loadImage } = require("canvas");
        //const { Console } = require('console');
        let canvas = createCanvas(3, 20);
        JsBarcode(canvas, barcodestring, { width: 3, height: 30, displayValue: false });
        currentRef.current = canvas.toDataURL()
    }, [code])
    return (
        <img src={currentRef.current} className={className} />
    )

}