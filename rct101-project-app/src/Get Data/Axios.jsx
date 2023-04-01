import axios from "axios"
import React from 'react'


export const product=()=>{
    return axios.get("http://localhost:8080/products")
}
export const SummerSale=()=>{
    return axios.get("http://localhost:8080/SummerSale")
}
export const DigitalMobile=()=>{
    return axios.get("http://localhost:8080/DigitalMobile")
}
