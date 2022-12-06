import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import './form.css'

const Form = () => {

  const {addTransaction} = useContext(GlobalContext)

    const [desc, setDesc] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSumbit = (e) => {
      e.preventDefault()

      const newTransaction = {
        id: Math.floor(Math.random() * 10000),
        desc: desc,
        amount: +amount
      }

      addTransaction(newTransaction)

      setDesc('')
      setAmount(0)
    }

  return (
    <form className='form' onSubmit={handleSumbit}>
        <div>
            <label htmlFor='desc'>Transaction Description</label>
            <input type="text" name='desc' value={desc} onChange={(e) => setDesc(e.target.value)} placeholder='groceries etc...'/>
        </div>
        <div>
            <label htmlFor="amount">Transacted Amount</label>
            <em>Negetive amount value is expense</em>
            <input type="number" name='amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <input type="submit" value="Add Transaction"/>
    </form>
  )
}

export default Form