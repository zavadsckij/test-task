import React, {useState} from 'react'
import s from './Card.module.css'
import compareImg from './compare.png'
import compareImg2 from './compare2.png'
import newImg from './new.png'
import { connect } from 'react-redux';
import { setCompare, addToBasket } from './../../reducer';

function Card({product, setCompare, addToBasket}) {

    
    let [colorChange, setColorChange] = useState(false)
    let [count, setCount] = useState(1)
    let [color, setColor] = useState('Цвет')
    let [image, setImg] = useState('images/' + product.img)
    let [imageCompare, setImageCompare] = useState(compareImg)
    let [price, setPrice] = useState(product.price)
    let [volume, setVolume] = useState(product.volume)
    
   const addProduct = (e) =>{
       e.preventDefault()
       let basketItem = {
           title: product.title,
           img: product.img,
           id: product.id,
           color,
           count,
            volume,
           price: price
       }
       if(color !== 'Цвет' && color !== "Выберите цвет"){
        addToBasket(basketItem)
       }else{
           setColor("Выберите цвет")
       }
       
   }
    const chooseVolume = (e) =>{
        let labels = e.currentTarget.parentElement.childNodes
        labels.forEach(label =>{
            label.children[0].className = s.fakeRadio
        })
        let [fakeInput, input] = e.currentTarget.children
        fakeInput.className = input.checked? s.fakeRadioActive : s.fakeRadio
        setVolume(parseFloat(e.currentTarget.innerText))
        setPrice(product.price * parseFloat(e.currentTarget.innerText).toString()[0])
    }
    return (
        <div className = {s.card}>
            <img className = {s.cardImg} src={image} alt="card-img"
            onMouseOver = {()=>{
                setImg('images/' + product.img2)
            }}
            onMouseOut = {()=>{
                setImg('images/' + product.img)
            }}
            />
            <h2 className = {s.cardTitle}>{product.title}</h2>
        <p className = {s.cardText}>{product.info}</p>
            <form className = {s.cardForm}>
                <div className = {s.cardColors}>
                    <div className = {s.colors} 
                    onClick = {()=>{setColorChange(true)}}
                    onMouseLeave = {()=>{setColorChange(false)}}>
                        {color}
                        {colorChange && <div className={s.colorsHidden}>
                            {product.colors.map((color, i) =>{
                                return <span key = {i} onClick = {(e)=>{
                                    setColor(e.currentTarget.innerText)
                                }}>{color}</span>
                            })}
                        </div>}
                        <span className = {colorChange ? s.arrowActive : s.arrow}/>
                    </div>
                        <span className = {s.price}>{price*count}</span>
                </div>
                <div className = {s.volume}>
                    <label onClick = {(e)=>chooseVolume(e)}><span className = {s.fakeRadioActive}/><input checked className = {s.radio} name = 'volume' type="radio"/>100 мл</label>
                    <label onClick = {(e)=>chooseVolume(e)}><span className = {s.fakeRadio}/><input className = {s.radio} name = 'volume' type="radio"/>200 мл</label>
                    <label onClick = {(e)=>chooseVolume(e)}><span className = {s.fakeRadio}/><input className = {s.radio} name = 'volume' type="radio"/>300 мл</label>
                </div>
                <div className = {s.buttons}>
                    <button className = {s.number}
                    onClick ={(e)=>{e.preventDefault()}}>
                        <span className = {s.decrement} onClick = {()=>{count > 1 && setCount(count-1)}}>-</span>
                        {count}
                        <span className = {s.increment}  onClick = {()=>{setCount(count+1)}}>+</span>
                    </button>
                    <button className = {s.buyButton}
                     onClick ={(e)=>{addProduct(e)}}>КУПИТЬ</button>
                </div>
            </form>
           
          {product.new && <img src={newImg} alt="newImg" className = {s.new} />}
           <button className = {s.compare}>
               <img src={imageCompare} alt="compareImg"
               onClick={() => {
                setCompare(product.id, !product.isCompare)
                setImageCompare(!product.isCompare?compareImg:compareImg2)
               }}/>
           </button>
        </div>
    )
}

export default connect(()=>({}),{setCompare, addToBasket})(Card)