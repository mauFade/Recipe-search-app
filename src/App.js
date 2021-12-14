import React, { useState } from 'react'
import axios from 'axios';
import './App.css'
import Food from './components/Food.js';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [healthOption, sethealthOption] = useState('vegan');

  var url = `https://api.edamam.com/search?q=${query}&app_id=ed35ae81&app_key=bc9531791a871f5c20f4d3bc859ddb3a&&health=${healthOption}`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  async function getRecipes() {
    var result = await axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }

  const submitForm = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className='app'>
      <h1>Food Plaza 🍔</h1>
      <form className='app-form' onSubmit={submitForm}>
        <input 
          type='text' 
          className='app-input'
          placeholder='Busque um ingrediente' 
          value={query} 
          onChange={handleChange}
        />
        <input
          type='submit'
          value='Search'
          className='app-button'
        />
        <select className='app-select'>
          <option onClick={ () => sethealthOption('vegan')}>Vegano</option>
          <option onClick={ () => sethealthOption('vegetarian')}>Vegetariano</option>
          <option onClick={ () => sethealthOption('paleo')}>Paleodieta</option>
          <option onClick={ () => sethealthOption('dairy-free')}>Sem laticínios</option>
          <option onClick={ () => sethealthOption('vgluten-free')}>Sem glúten</option>
          <option onClick={ () => sethealthOption('wheat-free')}>Sem trigo</option>
          <option onClick={ () => sethealthOption('low-sugar')}>Baixo açúcar</option>
          <option onClick={ () => sethealthOption('egg-free')}>Sem ovos</option>
          <option onClick={ () => sethealthOption('peanut-free')}>Sem amendoim</option>
          <option onClick={ () => sethealthOption('tree-nut-free')}>Sem nozes</option>
          <option onClick={ () => sethealthOption('soy-free')}>Sem óleo</option>
          <option onClick={ () => sethealthOption('fish-free')}>Sem peixe</option>
          <option onClick={ () => sethealthOption('selfish-free')}>Sem frutos do mar</option>
        </select>
      </form>
      <div className='app-recipe'>
        {recipes.map(recipe => {
          return <Food recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App
