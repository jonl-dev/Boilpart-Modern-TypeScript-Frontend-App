
// src/features/counter/counterSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Menentukan tipe state untuk counter
interface CounterState {
  value: number
}

// State awal dari counter
const initialState: CounterState = {
  value: 0,
}

// Membuat slice dengan state dan aksi
const counterSlice = createSlice({
  name: 'counter', // Nama slice
  initialState, // State awal
  reducers: {
    // Aksi untuk menambah counter
    increment: (state) => {
      state.value += 1
    },
    // Aksi untuk mengurangi counter
    decrement: (state) => {
      state.value -= 1
    },
    // Aksi untuk mereset counter ke 0
    reset: (state) => {
      state.value = 0
    },
    // Aksi untuk mengatur counter dengan nilai tertentu
    setCounter: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

// Mengekspor aksi-aksi yang telah dibuat
export const { increment, decrement, reset, setCounter } = counterSlice.actions

// Mengekspor reducer untuk diintegrasikan ke store
export default counterSlice.reducer

