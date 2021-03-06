import React from 'react';
import { getRandomBeer } from '../services/allServices';
import './RandomBeer.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    state = {
        randomBeer: null
    }

    componentDidMount() {
        getRandomBeer()
            .then(randomBeer => {
                this.setState({
                    randomBeer
                });
            });
    };

    render() {
        const beer = this.state.randomBeer;
        if (!beer) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="OneBeer">
                    <div>
                        <div className="beerDetail liLink">
                            <img src={beer.image_url} className="beerPhotoBg" alt="beer" />
                            <div>
                                <div className="splitted">
                                    <h3>{beer.name.slice(0, 26)}</h3>
                                    <h4>{beer.attenuation_level}</h4>

                                </div>
                                <div className="splitted">
                                    <h5>{beer.tagline}</h5>
                                    <p>{beer.first_brewed}</p>
                                </div>
                                <p>{beer.description}</p>
                                <p>{beer.contributed_by}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
    };
};