import React, {useState, useEffect} from 'react'
import s from './BasketItem.module.css'

function BasketItem({id, img, title, color, volume, price, count, removeFromBasket}) {
    
    let [num, setCount] = useState(count)
    let [priceItem, setPriceItem] = useState(price)
    useEffect(()=>{
        setCount(count)
        setPriceItem(price)
    },[count])
    return (
        <div className = {s.basketItem}>
            <img src={img} alt="basket img"/>
            <strong>{title}</strong>
            <span>{color}</span>
             <strong>{volume + ' мл'}</strong>
            <button className = {s.number}
                onClick ={(e)=>{e.preventDefault()}}>
                 <span className = {s.decrement} onClick = {()=>{num>1 && setCount(prev=>{
                     return prev - 1
                 })}}>-</span>
                 {num}
                 <span className = {s.increment} onClick = {()=>{setCount(prev=>{
                     return prev + 1
                 })}}>+</span>
            </button>
            <strong>{priceItem*num}</strong>
            <button className = {s.trashButton}
            onClick = {()=>{
                removeFromBasket(id, volume, color, count)
            }}
            ></button>
        </div>
    )
}

export default BasketItem
