import React from 'react'
import MainLayout from '../layouts/Mainlayout'
import styles from "../styles/components/CategoriesCard.module.scss"
import addition from "../assets/addition.svg"
import { State } from '../types/state'
import { Categories, Category } from '../types/category'

type TProps = {
  state: Pick<State, 'cards' | 'price'>
  setState: React.Dispatch<React.SetStateAction<State>>
}

const categories: Categories = [
  {
    card: "Стрижка",
    price: 400
  },
  {
    card: "Борода",
    price: 200
  },
  {
    card: "Стрижка + Борода",
    price: 600
  }
]


const CategoriesPage = ({ setState, state }: TProps) => {
  const [isRotated, setRotated] = React.useState(false);

  const actions = {
    addCategory: (item: Category) => {
      setState(prevState => {
        return {
          ...prevState,
          cards: prevState?.cards ? [...prevState.cards, item.card] : [item.card],
          price: prevState?.price ? prevState.price + item.price : item.price
        }
      })
    },
    removeCategory: (item: Category) => {
      setState(prevState => {

        return {
          ...prevState,
          cards: prevState.cards?.filter(cards => cards !== item.card),
          price: prevState.price && prevState.price - item.price
        } 
      })
    }
  }

  const handleRotateClick = () => {
    setRotated(!isRotated);
  };

  return (
    <MainLayout title='Услуги' isArrow>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>{categories.map((item, index) => {
        return (
          <div key={index} style={{ marginTop: 16 }} className={styles.card}>
            <div style={{paddingLeft: 8}}>
              <p>{item.card}</p>
              <p>цена {item.price}</p>
              <div onClick={state.cards?.includes(item.card) && state.price ? () => actions.removeCategory(item) :  () => actions.addCategory(item)}>
              <img
               width={24}
               height={24}
               style={{
                transform: state.cards?.includes(item.card) ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s',
              }}
               alt=''
               src={addition}
               onClick={handleRotateClick}
              />
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </MainLayout>
  )
}

export default CategoriesPage

