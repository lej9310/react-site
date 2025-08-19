import { create } from "zustand"

export const store_zustand = create((set) => ({
    count: 0,
    
    increment: () => set((state) => ({
        count: state.count + 1
    })),

    decrement: () => set((state) => ({
        count: state.count - 1
    })),

    // 초기화: increment/decrement처럼 현재 상태를 받을 필요 없이, 그냥 초기값 지정
    reset: () => set({count: 0})

}))