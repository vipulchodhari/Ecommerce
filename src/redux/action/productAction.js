import { PRODUCT_LIST } from "./actionTypes"

export const ProductList = () => {
    let data = "Hello vipul"
    return {
        type: PRODUCT_LIST,
        payload: data
    }
}