// ** React Imports
import { useEffect, Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
// ** Product detail components

import ProductDetails from './components'
// import RelatedProducts from './RelatedProducts'
import '@styles/react/libs/swiper/swiper.scss'
// ** Custom Components
import BreadCrumbs from '@components/breadcrumbs'

// ** Third Party Components
import { Card, CardBody, Col, Row } from 'reactstrap'

// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
//import { getProduct, deleteWishlistItem, addToWishlist, addToCart } from '../store/actions'


const Details = () => {
const [size, setSize] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  return (
    <Fragment>

      <div className='pl-5 ml-5'>
        <BreadCrumbs breadCrumbTitle='Product Seller Gride' breadCrumbParent='Seller' breadCrumbChild='Product' breadCrumbActive='Product Grid' />
      </div>
      <Row>
        <Col lg='1'></Col>
        <Col lg='10'>
          <Row>
            {size.map((val) => {
                return (
                  <Col lg="6" >
                    <Card>
                      <CardBody>
                        <ProductDetails />
                      </CardBody>
                      
                    </Card>
                  </Col>
                  )
            })}          
          </Row>
        </Col>
        <Col lg='1'></Col>
      </Row>
    </Fragment>
  )
}

export default Details
