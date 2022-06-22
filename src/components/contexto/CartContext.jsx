import { createContext, useState , useContext} from 'react'


/* Creamos el contexto */
const CartContext = createContext([])

/* Funcion para usar el contexto del cart*/
export const useCartContext = () => useContext(CartContext)

/* componente del provider del contexto, todo lo que este adentro de el se 
pone como children, que luego se usa para ponerlo en el return */
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (producto) => {        
        // si el producto ya esta en el carrito, agregarle la cantidad en vez de agregarlo entero
        const cart2 = cart.find(el => el.id === producto.id)
        if (cart2) {
            cart2.cantidad += producto.cantidad
            /* si la cantidad del producto en el carrito es mayor al stock, pone lo maximo disponible */
            if(cart2.cantidad >producto.stock){
                cart2.cantidad = producto.stock
            }
            
        } else {
            setCart([...cart, { ...producto }])
        }
    }

    /* Sacar item del carrito */
    const removeFromCart = (id) => {
        /* Busca el objeto del item a remover */
        const item = cart.find(e=>e.id===id)
            /* busca el index del objeto a remover */
        const index = cart.indexOf(item)
            /* se fija si la cantidad del item es mayor a uno, si lo es, creo otra variable sin el item
            le saca la cantidad al item, y lo agrega denuevo para que haga re render */
        if(item.cantidad>1){
            const items =cart.filter(e=>e.id!==id)
            item.cantidad-=1
            items.splice(index,0,item)
            setCart(items)
        }
        else{
            /* si tiene 1 item y lo borra se saca el producto */
            setCart(cart.filter(e=>e.id!==id))
            console.log("filtrado")
        } 

    }


    /* Retornamos el provider con el contexto y el state */
    return (
        <CartContext.Provider 
            value={{
                cart,
                /* Fnciones */
                addToCart,
                removeFromCart
                
            }}
        >
            {children}

        </CartContext.Provider>
    )
}