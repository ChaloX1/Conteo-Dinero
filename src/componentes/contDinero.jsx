import { useState } from "react"

export function ContDinero(props){
const [cantidad, setCantidad] = useState(0);

let result = props.moneda * cantidad; 

    return (
        <div className="flex flex-row gap-3 text-xl">
            <input className="p-2 w-20 rounded-sm bg-neutral-100" type="number" value={props.moneda} disabled/>
            <input className="p-2 w-24 rounded-sm" type="number" placeholder="0" onChange={(e) => {setCantidad(e.target.value)}}/>
            <input className="p-2 w-32 rounded-sm bg-neutral-100" type="number" step="0.01" value={result.toFixed(1)} disabled/>
        </div>
    )
}