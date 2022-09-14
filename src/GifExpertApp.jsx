import {useState} from 'react';
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['Goku']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;//para que no se repita el valor
        setCategories([newCategory,...categories ])
    }

    return(
        <>
            {/* React no tiene un orden apropiado como los demas framewords  */}
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />

            {/* Listado de Gif */}

            { categories.map( category => (
                <GifGrid 
                    key={category}
                    category={ category}
                />
            ))}
                {/* Gif Item */}
        </>
    )
}