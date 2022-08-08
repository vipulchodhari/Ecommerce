import { useSelector } from 'react-redux';
import cartLogo from '../assets/shopping-cart.png';

export const Cart = () => {
    const { data } = useSelector((state) => ({
        data: state.dataState.data
    }))


    console.log('redux data in cart', data.length);
    return <div className='cart-container'>
        <span>{data.length}</span>
        <img src={cartLogo} alt=''/>
    </div>
}