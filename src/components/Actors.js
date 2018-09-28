import React from 'react';
import { actors } from '../data';

const Actor = ({ name, movies }) => {
  <div className='actor'>
    <h2>{name}</h2>
    Movies: 
    <ul>
      {movies.map(movie => <li>{movie}</li>)}
    <ul>
  </div>
}

const Actors = (props) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {this.props.actors.map(actor => Actor)}
    </div>
  );
};

export default Actors;
