const WorldPopulation = ({country, population}) => {
 const bar = Math.round((population / 7693165599) * 100);

    return <div className="data">
        <p>{country}</p>
        <div className="barFill" style={{width: `${bar}%`, height: "30px", backgroundColor: "rgb(242, 166, 25)"}}></div>
        <p>{population}</p>
    </div>
}

export default WorldPopulation