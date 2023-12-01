import React from 'react'
import MainLayout from '../layouts/Mainlayout'
import styles from "../styles/components/CategoriesCard.module.scss"
import { State } from '../App'
import delet from "../assets/delete.png"
import addition from "../assets/addition.svg"

type TProps = {
  state: State
  setState: React.Dispatch<React.SetStateAction<State>>
}

const CategoriesPage = ({ setState, state }: TProps) => {
  const categories = [
    {
      card: "стрижка",
      price: 500
    },
    {
      card: "борода",
      price: 200
    },
    {
      card: "krop",
      price: 500
    }
  ]


  return (
    <MainLayout title='Услуги' isArrow>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>{categories.map(item => {
        return (
          <div style={{ marginTop: 30, width: 250 }} className={styles.card}>
            <div>
              <h3 style={{marginLeft: 10}}> {item.card}</h3>
              <p style={{marginLeft: 10}}>{item.price}</p>
              <button style={{marginLeft: 10, backgroundColor: 'transparent', border: 'none' }} onClick={() => {
                setState(prevState => {
                  if (prevState.cards?.includes(item.card) && prevState.price) {
                    return {
                      ...prevState,
                      cards: prevState.cards.filter(cards => cards !== item.card),
                      price: prevState.price - item.price
                    }
                  }
                  return {
                    ...prevState,
                    cards: prevState.cards ? [...prevState.cards, item.card] : [item.card],
                    price: prevState.price ? prevState.price + item.price : item.price
                  }
                })
              }}>
                {state.cards?.includes(item.card) ? (<img src={delet}  width={24} height={24}/>) : (<img width={24} height={24} src={addition}/>)}
              </button>
            </div>
          </div>
        )
      })}
      </div>
    </MainLayout>
  )
}

export default CategoriesPage

