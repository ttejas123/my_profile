// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
// ** Third Party Components
import classnames from 'classnames'


import { useRTL } from '@hooks/useRTL'

import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram, Check, Mail, GitHub, Truck, Pocket, User } from 'react-feather'
import {
  Row,
  Col,
  CardText,
  CardBody,
  Card,
  UncontrolledButtonDropdown,
  DropdownToggle,
  TabContent,
  TabPane,
  ListGroup, ListGroupItem,
  Badge
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
import ApprovedProducts from './approvedProducts'
import RejectedProducts from './rejectedProducts'
import Drafts from './drafts'


const MyProducts = props => {

SwiperCore.use([Navigation, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])
const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen)
 const [activeTab, setActiveTab] = useState('1')
const toggle1 = tab => setActiveTab(tab)

  // ** Condition btn tag
  const CartBtnTag = 'button'
 const [isRtls, setIsRtl] = useRTL()
  return (

    <>
    <Row className="ml-lg-5 mr-lg-5 pl-lg-2 pr-lg-2">
          
          <Col md='2' xs='12'>
          <Card className='p-0'>
                  <CardBody className='p-1' >
          <h4><b>My Products</b></h4>
      <div>
          <ListGroup flush>
            <ListGroupItem className='cursor-pointer'  onClick={() => toggle1('1')}>
              <span className="mr-1">Approved Products</span>
              {/* <Badge color='primary' pill>
                New
              </Badge> */}
            </ListGroupItem>
            <ListGroupItem  className='cursor-pointer'  onClick={() => toggle1('2')}>
              <span >Drafts</span> 
            </ListGroupItem>
            <ListGroupItem  className='cursor-pointer' onClick={() => toggle1('3')}>
              <span >Rejected Products</span>  
            </ListGroupItem>            
          </ListGroup>
         
      </div>
      </CardBody>
      </Card>
          </Col>
          <Col md='10' xs='12'>
                  <TabContent activeTab={activeTab}>
                  <TabPane tabId='1'>
                {/* <ByUserTab/> */}
                <ApprovedProducts/>
              </TabPane>
              <TabPane tabId='2'>
              <Drafts/>        
                   </TabPane>
              <TabPane tabId='3'>
              <RejectedProducts/>
              </TabPane>
                  </TabContent>
          </Col>
      
</Row>    
      {/* <DashboardMenuItem /> */}
    </>
  )
}

export default MyProducts
