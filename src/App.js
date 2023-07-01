import CreditCards from './componentes/CreditCard';
import './App.css';
import people from './People';
import UserCard from './componentes/UserCard';
import pokemons from './pokemons';
import PokemonCard from './componentes/pokemon';
import cards from './cards';
import ButtonList from './componentes/ButtonList';
import Data from './data';
import WorldPopulation from './componentes/WorldPopulation';


function App() {
  return (
    // ejercicio 1
    // <div>
    //   {cards.map((card, i) => {

    //    return <CreditCards
    //       key={i}
    //       type={card.type}
    //       number={card.number}
    //       expirationMonth={card.expirationMonth}
    //       expirationYear={card.expirationYear}
    //       bank={card.bank}
    //       owner={card.owner}
    //       cssClass={card.cssClass}
    //       />
    //   })}
    // </div>

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
    <div>
      {pokemons.map((pokemon,i) => {
        return <PokemonCard
             key={i}
             id={pokemon.id}
             name={pokemon.name}
             img={pokemon.img}
             text={pokemon.name}
             />

      })}
    </div>

    // ejercicio 4
  //    <div>
  //   <div className='exercise'>
  //   <h2>30 Days of React</h2>
  //   <p>Number generator</p>
  // </div>
  //      <ButtonList num={31} />
  //    </div>

    // ejercicio 5
    // <div>
    //   <div className='exercise'>
    //     <h2>30 Days of React</h2>
    //     <h3>World population</h3>
    //     <p>Ten most populate countries</p>
    //   </div>

    //   {Data.map((data, i) => {
    //     return <WorldPopulation
    //       key={i}
    //       country={data.country}
    //       population={data.population}
    //     />
    //   })}
    // </div>

  );
}

export default App;
