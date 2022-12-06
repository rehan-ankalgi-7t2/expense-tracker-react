import React, { useContext } from 'react'
import './transactionHistory.css'
import { GlobalContext } from '../context/GlobalContext'

const TransactionHistory = () => {
    const {transactions, deleteTransaction} = useContext(GlobalContext)

  return (
    <div className='transaction'>
        <h2>Transaction History</h2>
        <hr/>
        <ul>
            {transactions.map(transaction => (
                <li className={transaction.amount > 0 ? `income` : `expense`}
                key={transaction.id}>
                    <button onClick={() => deleteTransaction(transaction.id)}>❌</button>
                    <span>
                        <p>{transaction.desc}</p>
                        <p>{transaction.amount > 0 ? `+ ₹${transaction.amount}` : `- ₹${Math.abs(transaction.amount)}`}</p>
                    </span>
                </li>
                )
            )}

        </ul>
    </div>
  )
}

export default TransactionHistory