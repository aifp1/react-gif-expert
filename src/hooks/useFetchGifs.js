import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    //useEffect es para disparar efectos secundarios, es decir, un proceso que se ejecute cuando algo suceda
    //ejemplo cuando un contador cambie, yo quiero disparar un efecto
    //puede crear de nuevo el componente que este dentro del useEffect
    //lo anterior puede ser como un reseteo del componente
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    //useEffect no retorna promesas sino funciones, es por esto que
    //es mala practica usar async/await
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
        //esto es permitido gracias a que retorna una funcion 
    }, [])
    
    return {
        images,
        isLoading

    }
}
