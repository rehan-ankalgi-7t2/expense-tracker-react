import React, { useContext } from 'react'
import './balance.css'
import { GlobalContext } from '../context/GlobalContext'

const Balance = () => {

    const {transactions} = useContext(GlobalContext)

    const calculateBalance = () => {
        let sum = 0
        transactions.map(transaction => (
            sum += transaction.amount
        ))
        return sum > 0 ? `₹${sum}` : `- ₹${Math.abs(sum)}`
    }

    const calculateTotalIncome = () => {
        let totalIncome = 0

        transactions.forEach(transaction => {
            if(transaction.amount > 0) {
                totalIncome += transaction.amount
            }
        })

        return totalIncome
    } 

    const calculateTotalExpense = () => {
        let totalExpense = 0

        transactions.forEach(transaction => {
            if(transaction.amount < 0) {
                totalExpense += transaction.amount
            }
        })

        return totalExpense
    }

  return (
    <div className='balance'>
        <div className='balance-left'>
            <p>your balance</p>
            <h1>{calculateBalance()}</h1>
        </div>
        <div className='balance-right'>
            <div id='income'>
                <label htmlFor="">INCOME</label>
                <span>{calculateTotalIncome()}</span>
            </div>
            <div id='expense'>
                <label htmlFor="">EXPENSE</label>
                <span>{calculateTotalExpense()}</span>
            </div>
        </div>
    </div>
  )
}

export default Balance