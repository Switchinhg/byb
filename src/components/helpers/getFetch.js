    const Prods = [{
            id:'1',
            prodName: 'Camita almohadón chico',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:240,
            tamanios:'N/A',
            img: '/img_productos/camita_almohadon_chico_1.png',
            stock:10,
        },
        {
            id:'2',
            prodName: 'Camita agarramano Aqua',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:230,
            tamanios:'N/A',
            img:'/img_productos/camita_agarramano_aqua.png',
            stock:6,
        },
        {
            id:'3',
            prodName: 'Camita Beige a rayas',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:320,
            tamanios:'N/A',
            img:'/img_productos/camita_beigeblanco_rayas.png',
            stock:12,
        },
        {
            id:'4',
            prodName: 'Camita jean azul',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:100,
            tamanios:'N/A',
            img:'/img_productos/camita_jean_azul_1.png',
            stock:2,
        },
        {
            id:'5',
            prodName: 'Camita handbag',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:600,
            tamanios:'N/A',
            img:'/img_productos/camita_handbag_1.png',
            stock:38,
        },
        {
            id:'6',
            prodName: 'Camita doble',
            categoria:"cama",
            info: 'Camita premium(cambiar)',
            precio:500,
            tamanios:'N/A',
            img:'/img_productos/camita_etyt_1.png',
            stock:5,
        },
        {
            id:'7',
            prodName:'Collar personalizado',
            categoria:'collar',
            info:'Collar premium(cambiar)',
            precio:250,
            tamanios:'N/A',
            img:'/img_productos/collar1.jpg',
            stock:200,
    }
    ]
/* Puede traer a un solo producto, o a la cantidad que se le pida */
/* si se lo llama con un parametro da la cantidad de productos,
si le pones 'null' y 5 te devuelve solo el objeto 5 */
/* Sino devuelve todos los productos */
    export const getFetch = (cuantos, id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if(cuantos){/* no entra si cuantos vale undefined o null  */
                    resolve(Prods.filter(obj=>obj.id<=cuantos));
                }
                if(id){
                    resolve(Prods.find(obj=>obj.id===id));
                }
                else{
                    resolve(Prods)
                }
            }, 0);
        });
    }; 