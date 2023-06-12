"use client"
import { useState, useEffect } from "react";

export function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function Component1() {
    // await delay(5000)
    const [count, setCount] = useState(0);

    console.log('count >', count)

    const inc = (delta: number) => {
        setCount(count + delta);
        console.log(count)
    }

    return <div>
        <b>{count}</b>
        <button onClick={() => inc(1)}>+1</button>
        <button onClick={() => inc(-1)}>-1</button>
    </div>
}


export function Component2() {
    const [now, setNow] = useState<Date>();

    // useEffect(() => setNow(new Date()), [])
    // var u = window.setInterval(() => {
    //     setNow(new Date())
    //     console.log('tik')
    // }, 5000)

    useEffect(() => {
        setNow(new Date())
        const timerId = setInterval(() => {
            setNow(new Date())
            console.log('tik')
        }, 5000)
        return () => clearInterval(timerId)
    }, [])

    return <div>{now?.toISOString()}</div>
}
