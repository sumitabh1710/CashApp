import React from 'react'
import MainPage from './MainPage/MainPage'
import PaymentPage from "./PaymentPage/PaymentPage"
import InvestingPage from "./InvestingPage/InvestingPage"
import BankingPage from './BankingPage/BankingPage'
import CashCardPage from './CashCardPage/CashCardPage'

const Home = () => {
  return (
    <div>
        <MainPage></MainPage>
        <PaymentPage></PaymentPage>
        <BankingPage></BankingPage>
        <CashCardPage></CashCardPage>
        <InvestingPage></InvestingPage>
    </div>
  )
}

export default Home