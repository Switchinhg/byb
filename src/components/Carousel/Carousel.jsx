// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';


// estilos
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper
        modules={[Navigation,Autoplay, Pagination, A11y]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={'./img/banner_1.png'} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={'./img/banner_2.png'} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={'./img/banner_3.png'} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};
