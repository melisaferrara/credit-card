import Button from './Button';

const PokemonCard = ({ id, name, img, text }) => {

    return <div>
            <h2>{name}</h2>
            <img src={img} alt='pokemon'></img>
            <p>{id}</p>
            <Button text={text} />
        </div>


}

export default PokemonCard