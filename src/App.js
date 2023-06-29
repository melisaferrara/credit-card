import CreditCards from './componentes/CreditCard';
import './App.css';
import people from './People';
import UserCard from './componentes/UserCard';
import pokemons from './pokemons';
import PokemonCard from './componentes/pokemon';





const cards = [
  {
    type: "Visa",
    number: "4567 8910 1112 8845",
    expirationMonth: 4,
    expirationYear: 25,
    bank: "BBVA",
    owner: "Melisa Ferrara",
    cssClass: "blue"
  },

  {
    type: "MasterCard",
    number: "4567 8910 0045 0995",
    expirationMonth: 12,
    expirationYear: 27,
    bank: "Bankinter",
    owner: "Juana Fernandez",
    cssClass: "yellow"
  },

  {
    type: "Visa",
    number: "4567 8910 1112 6984",
    expirationMonth: 7,
    expirationYear: 23,
    bank: "N26",
    owner: "Juan Arango",
    cssClass: "grey"
  }

]


function App() {
  return (
    // ejercicio 1
    <div>
      {cards.map((card, i) => {

       return <CreditCards
          key={i}
          type={card.type}
          number={card.number}
          expirationMonth={card.expirationMonth}
          expirationYear={card.expirationYear}
          bank={card.bank}
          owner={card.owner}
          cssClass={card.cssClass}
          />
      })}
    </div>

    // ejercicio 2
    // <div>
    //   {people.map((user, i) =>{
    //        return <UserCard
    //          key={i}
    //          name={user.name}
    //          rating={user.rating}
    //          gender={user.gender}
    //          job={user.job}
    //          city={user.city}
    //        />
    //   })}
    // </div>

    //ejericio 3
    // <div>
    //   {pokemons.map((pokemon,i) => {
    //     return <PokemonCard
    //          key={i}
    //          id={pokemon.id}
    //          name={pokemon.name}
    //          img={pokemon.img}
    //          text={pokemon.name}
    //          />
             
    //   })}
    // </div>
  );
}

export default App;
