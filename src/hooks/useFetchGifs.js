import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// 
export const useFetchGifs = (category) => {


    const [state, setState] = useState({

        data: [],
        loading: true

    });

    // El use effect es solo para cuando cambie la categoria

    // los efectos no pueden ser async
    useEffect( () => {

        getGifs(category).then(
            imgs => {

                    setState({
                        data: imgs,
                        loading:false //terminó de cargar
    
                    })
                    
                }
        )

    }, [category] ) //solo se disparará una única vez cuando se renderice el componente

    return state; // {data:[], loading:true }

}