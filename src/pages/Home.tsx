
// src/pages/Home.tsx

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset, setCounter } from '../features/counter/counterSlice'
import { RootState } from '../store'

const Home = () => {
  const dispatch = useDispatch()
  const counterValue = useSelector((state: RootState) => state.counter.value)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Counter: {counterValue}</h1>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Reset
        </button>

        <button
          onClick={() => dispatch(setCounter(10))}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Set to 10
        </button>
      </div>
    </div>
  )
}

export default Home

