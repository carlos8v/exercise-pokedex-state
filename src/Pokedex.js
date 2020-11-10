import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokedex: this.props.pokemons,
            currentPokemon: 0,
        }
    }

    handleNextPokemon = () => {
        this.setState(({ currentPokemon, pokedex }) => ({
            currentPokemon: currentPokemon >= pokedex.length - 1 ? 0: currentPokemon + 1,
        }));
    }

    render() {
        return (
            <div className="pokedex">
                <Pokemon pokemon={this.state.pokedex[this.state.currentPokemon]} />
                <div>
                    <button onClick={this.handleNextPokemon}>Próximo</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;