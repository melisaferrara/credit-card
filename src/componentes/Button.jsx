export default function Button({text}) {
    
    const handleClick = () => {
        console.log(text)
    }

    return <button className="pokeButton" onClick={handleClick}>click</button>
} 