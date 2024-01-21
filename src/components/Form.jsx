import React, { useContext } from 'react'
import MainContext from './Context/MainContext'

export default function Form({children}) {
  const value = useContext(MainContext)
  return (
    <>
        <h1>Form Component</h1>
        <form action="" className='form'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' /><br />
            <label htmlFor="">Email</label>
            <input type="email" name='email' /><br />
        {children}
        </form>
        {value} from Form Component
    </>
  )
}
