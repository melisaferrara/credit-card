export default function Button({text}) {
    
    const handleClick = () => {
        console.log(text)
    }

    return <button onClick={handleClick}>click</button>
} 