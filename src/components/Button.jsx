import React, { useContext } from 'react'
import MainContext from './Context/MainContext'

export default function Button() {
  const value = useContext(MainContext)
  return (
    <>
        <button type='button' className='button'>Click Me</button><br />
        {value} from Button Component
    </>
  )
}
