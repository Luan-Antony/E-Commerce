import { Routes, Route } from 'react-router-dom'
import { Home, MainPage, ProductDetail, Cart, } from '.'
import { Login } from './Login'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/product/:id' element={<ProductDetail />}/>
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
    )
}
