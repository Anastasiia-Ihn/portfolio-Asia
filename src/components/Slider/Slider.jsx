import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { items } from "./items";
import Slide from "./Slide/Slide";
import css from './Slider.module.css'
const Slider = () => {
  return (
    <>
      <Swiper
        mousewheel={true}
        keyboard={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Mousewheel, Keyboard]}
        className={css.mySwiper}
      >
        {items?.map((item) => (
          <SwiperSlide className={` ${css.wrapper}`} key={item.id}>
            <Slide item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
