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
            modificarCarrito(producto.id, 'plus',producto.cantidad)
            /* si la cantidad del producto en el carrito es mayor al stock, pone lo maximo disponible */
            if(cart2.cantidad >producto.stock){
                cart2.cantidad = producto.stock
            }
            
        } else {
            setCart([...cart, { ...producto }])
        }
    }

    /* Sacar item del carrito */
    const modificarCarrito = (id,hacer,cuanto) => {
        /* Busca el objeto del item a remover */
        const item = cart.find(e=>e.id===id)
            /* busca el index del objeto a remover */
        const index = cart.indexOf(item)

            if(item.cantidad>=1){
                const items =cart.filter(e=>e.id!==id)

                if(hacer==='minus')item.cantidad-=1
                else if(item.cantidad<item.stock)item.cantidad+=cuanto?cuanto:1

                items.splice(index,0,item)
                setCart(items)

                if(item.cantidad===0)setCart(cart.filter(e=>e.id!==id))

        }
        else{
            /* si tiene 1 item y lo borra se saca el producto */
            setCart(cart.filter(e=>e.id!==id))
            console.log("filtrado")
        } 
    }
    const borrarProd = (id)=>{
        setCart(cart.filter(e=>e.id!==id))
    }

    const total = () =>{
        return cart.reduce((acum, i) => acum + i.cantidad * i.precio, 0)
    }
    const totalProds = () =>{
        return cart.reduce((acum, i) => acum + i.cantidad, 0)
    }
    const borrarCarrito = () =>{
        setCart([])
    }


    /* Retornamos el provider con el contexto y el state */
    return (
        <CartContext.Provider 
            value={{
                cart,
                /* Fnciones */
                addToCart,
                modificarCarrito,
                borrarProd, 
                total,
                totalProds,
                borrarCarrito
            }}
        >
            {children}

        </CartContext.Provider>
    )
}