import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    //const categories = ['One Puch',' Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Sweet cat']);


    // Agregar elemento al arreglo con setCategories
    // const handleAdd = () => { 

    //     // esto no funciona porque categories es un arreglo
    //     // setCategories('lalala');

    //     // esto sí :) 
    //     setCategories( [...categories,'Spiderman']);

    //     //otra opción
    //     // setCategories( catsOld => [ ...catsOld,'Spiderman']);
    // }

    return (
        <>
        <h2>GifExpertApp</h2>

        <AddCategory  setCategories={setCategories}/>

        <hr />

        {/* <button onClick={handleAdd}>Agregar</button> */}
       <ol>
           {
                categories.map( category  => (
                    //   <li key= { category } >  { category } </li>
                    <GifGrid 
                        key = {category}
                        category={ category } />
                ))
           } 
       </ol>
        </>
    )
}
