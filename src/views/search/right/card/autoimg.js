import { Swiper, SwiperSlide } from 'swiper/react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import img1 from '@src/assets/images/logo/p3.jpg'
import img2 from '@src/assets/images/logo/p2.jpg'
import img3 from '@src/assets/images/logo/product.jpg'
// import img4 from '@src/assets/images/logo/p.jpg'
import img4 from '@src/assets/images/logo/p4.jpg'
//import img5 from '@src/assets/images/logo/p4.jpg'


const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    clickable: true
  },
  navigation: true
}

const SwiperAutoplay = ({ isRtl }) => {
  return (
    <div className='m-0 p-0'>
      <div className='m-0 p-0'>
        <Swiper  dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          <SwiperSlide>
            <img src={img1} alt='swiper 1' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt='swiper 2' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt='swiper 3' className='img-fluid m-0 p-0' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt='swiper 4' className='img-fluid m-0 p-0' />
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  )
}

export default SwiperAutoplay