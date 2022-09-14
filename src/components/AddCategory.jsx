
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) =>{
        //se recibe el valor que se escribe en el input
        setInputValue(event.target.value);
    }

    const onInputSubmit = (event) =>{
        event.preventDefault();//es para que la pagina no se recarge
        // console.log(inputValue)
        const onInputValueTrim = inputValue.trim();
        if(onInputValueTrim.length <= 1) return; //trim es eliminar los espacios atras y adelante
        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(onInputValueTrim);
    }
      
    return (
    <>
        <form onSubmit={(event) => onInputSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange = {(event) => onInputChange(event)} 
            />
        </form>
    </>
  )
}
