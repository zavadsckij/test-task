import React from 'react'
import s from './Basket.module.css'
import BasketItem from './../BasketItem/BasketItem';
import { connect } from 'react-redux';
import { removeFromBasket } from './../../reducer';


function Basket({basket, removeFromBasket}) {
    return (
        <div className = {s.basket}>
            <h2>Корзина</h2>

            {basket.length?basket.map((item, i) =>{
                return  <BasketItem
                key= { i }
                id= {item.id} 
                title = {item.title}
                img = {'images/' + item.img}
                color = {item.color}
                volume = {item.volume}
                count = {item.count}
                price = {item.price}
                removeFromBasket = {removeFromBasket}
                />
            }): 'Корзина пуста'}
        </div>
    )
}

const mstp = state => ({basket:state.basket})

export default connect(mstp, {removeFromBasket})(Basket)
