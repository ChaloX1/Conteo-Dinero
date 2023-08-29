import { useState } from "react";

export function ResDinero(){
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNunber, setSecondNumber] = useState(0);

    let result = firstNumber - secondNunber;

    return (
        <div className="rounded-sm flex flex-col gap-5 text-xl">
            <input className="p-4 rounded-sm" type="number" placeholder={firstNumber} onChange={(e) => {setFirstNumber(e.target.value)}}/>
            <input className="p-4 rounded-sm" type="number" placeholder={secondNunber} onChange={(e) => {setSecondNumber(e.target.value)}}/>
            <input className="p-4 rounded-sm bg-neutral-100" type="number" value={result.toFixed(1)} disabled/>
        </div>
    )
}