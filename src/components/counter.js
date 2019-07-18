import React, {useState} from 'react'

const counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <h3>{count} <span role="img" aria-label="like">👍</span></h3>
            <button onClick={() => {setCount(count +1)}}><span role="img" aria-label="heart">❤️❤️❤️</span></button>
        </div>    
    )
}

export default counter