// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'
import InfoCard from './component/rightA'
import Backup from './component/backup'
import Hq from './component/hq'
import Wh from './component/wareh'
import Info from './component/info'
import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  Button,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  CardTitle,
  CardHeader,
  DropdownMenu
} from 'reactstrap'

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow,
  Autoplay,
  Lazy,
  Virtual
} from 'swiper'

import image from '@src/assets/images/avatars/1-small.png'

const Product = props => {

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>    
                    <Row>
                      <Col md='12' xs='12'>    
                    
                                    <Row className='match-height'>
                                      <Col lg='12' xs='12'>
                                        <Backup />
                                      </Col>
                                    </Row>
                                  
                      </Col>
                      
                    </Row>
    </>
  )
}

export default Product