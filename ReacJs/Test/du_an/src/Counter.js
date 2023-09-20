import { useState,  useEffect } from 'react'

export function Counter() {
    const [count, setCount] = useState(10)

    // Giống như componentDidMount và componentDidUpdate
    useEffect(() => {
        // Cập nhập document title sử dụng browser API
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count - 1)}>Click me</button>
        </div>
    )
}