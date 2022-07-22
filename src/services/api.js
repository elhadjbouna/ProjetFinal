import axios from "axios";
import { useState, useEffect } from "react";

function Api (){
    const[donnees,setData]=useState([])


    const BASE_URL = "https://fakestoreapi.com";
    const GetProducts = async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    const resultat = await res.data
    setData(resultat);
      console.log(res.data)
    };
    
    useEffect(() => {
        GetProducts()
        },[]
    )  
    return(
        <div>
            { donnees.map(produit =>
            <div>
            {produit.image}
             
            </div>    
            )}
        </div>
    )
}

export default Api
