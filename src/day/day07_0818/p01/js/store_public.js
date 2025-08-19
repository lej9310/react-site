// React의 상태 관리가 아닌 별도의 자바스크립트 객체: type object
export const store_public = {

    count: 0,

    increment() {
        this.count += 1
    },

    decrement() {
        this.count -= 1
    },

    reset() {
        this.count = 0
    }
}