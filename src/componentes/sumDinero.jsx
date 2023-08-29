import { useState } from "react";

export function SumDinero() {
    const [cantidad, setCantidad] = useState(1);
    const [dinero, setDinero] = useState(0);

    let result = cantidad * dinero;

    return (
        <div className="flex flex-row gap-3 text-xl">
            <input className="p-2 w-14 rounded-sm" type="number" value={cantidad} step="0.01" onChange={(e) => { setCantidad(e.target.value) }} />
            <input className="p-2 w-24 rounded-sm"  type="number" placeholder={dinero} step="0.01" onChange={(e) => { setDinero(e.target.value) }} />
            <input className="p-2 w-24 rounded-sm bg-neutral-100"  type="number" step="0.01" value={result.toFixed(1)} disabled/>
        </div>
    )
}