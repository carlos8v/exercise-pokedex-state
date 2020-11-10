import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: this.props.pokemons,
            filteredPokedex: this.props.pokemons,
            currentPokemon: 0,
        }
    }

    handleNextPokemon = () => {
        this.setState(({ currentPokemon, filteredPokedex }, _props) => ({
            currentPokemon: currentPokemon >= filteredPokedex.length - 1 ? 0: currentPokemon + 1,
        }));
    }

    handleFirePokemons = () => {
        this.setState(({ pokedex }, _props) => ({
            filteredPokedex: pokedex.filter(({ type }) => type === 'Fire'),
        }));
    }

    handlePsychicPokemons = () => {
        this.setState(({ pokedex }, _props) => ({
            filteredPokedex: pokedex.filter(({ type }) => type === 'Psychic'),
        }));
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon pokemon={this.state.filteredPokedex[this.state.currentPokemon]} />
                <div>
                    <button onClick={this.handleNextPokemon}>Próximo</button>
                    <button onClick={this.handleFirePokemons}>Fire</button>
                    <button onClick={this.handlePsychicPokemons}>Psychic</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;