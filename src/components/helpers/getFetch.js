import camita1 from '../../imgs/img_productos/camita_almohadon_chico_1.png'
import camita2 from '../../imgs/img_productos/camita_agarramano_aqua.png'
import camita3 from '../../imgs/img_productos/camita_beigeblanco_rayas.png'
import camita4 from '../../imgs/img_productos/camita_jean_azul_1.png'
import camita5 from '../../imgs/img_productos/camita_handbag_1.png'
import camita6 from '../../imgs/img_productos/camita_etyt_1.png'


    const Prods = [{
            id:'1',
            prodName: 'Camita almohadón chico',
            info: 'Camita premium(cambiar)',
            precio:240,
            tamanios:'N/A',
            img: camita1
        },
        {
            id:'2',
            prodName: 'Camita agarramano Aqua',
            info: 'Camita premium(cambiar)',
            precio:230,
            tamanios:'N/A',
            img:camita2
        },
        {
            id:'3',
            prodName: 'Camita Beige a rayas',
            info: 'Camita premium(cambiar)',
            precio:320,
            tamanios:'N/A',
            img:camita3
        },
        {
            id:'4',
            prodName: 'Camita jean azul',
            info: 'Camita premium(cambiar)',
            precio:100,
            tamanios:'N/A',
            img:camita4
        },
        {
            id:'5',
            prodName: 'Camita handbag',
            info: 'Camita premium(cambiar)',
            precio:600,
            tamanios:'N/A',
            img:camita5
        },
        {
            id:'6',
            prodName: 'Camita doble',
            info: 'Camita premium(cambiar)',
            precio:500,
            tamanios:'N/A',
            img:camita6
        },
    ]

    export const getFetch = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Prods);
            }, 3000);
        });
    }; 
    
   


    /*     2.1.58 */