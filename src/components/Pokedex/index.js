import React from 'react';
import Pokemon from '../Pokemon';
import Button from '../Button';
import './style.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: this.props.pokemons,
      filteredPokedex: this.props.pokemons,
      currentPokemon: 0,
    };
  }

  handleNextPokemon = () => {
    this.setState(({ currentPokemon, filteredPokedex }, _props) => ({
      currentPokemon:
        currentPokemon >= filteredPokedex.length - 1 ? 0 : currentPokemon + 1,
    }));
  };

  handleAllPokemons = () => {
    this.setState(({ pokedex }) => ({
      currentPokemon: 0,
      filteredPokedex: pokedex,
    }));
  };

  handleFilteredPokemons = (filterType) => {
    this.setState(({ pokedex }, _props) => ({
      currentPokemon: 0,
      filteredPokedex: pokedex.filter(({ type }) => type === filterType),
    }));
  };

  handleNotAllowedNextButton = () => {
    const nextButton = document.querySelector('button.next');
    this.state.filteredPokedex.length <= 1 ? nextButton.classList.add('unique') : nextButton.classList.remove('unique');
  }

  render() {
    return (
      <div className="pokedex">
        <Pokemon
          pokemon={this.state.filteredPokedex[this.state.currentPokemon]}
        />
        <div className="pokedex__actions">
          <button onClick={this.handleAllPokemons}>All</button>
          {this.state.pokedex
            .reduce(
              (unique, item) =>
                unique.includes(item.type) ? unique : [...unique, item.type],
              []
            )
            .map((type) => (
              <Button key={type}>
                <button onClick={() => this.handleFilteredPokemons(type)}>
                  {type}
                </button>
              </Button>
            ))}
          <button className="next" onClick={this.handleNextPokemon}>Próximo</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
