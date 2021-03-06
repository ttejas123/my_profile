import { useEffect, Fragment } from 'react'

import {
  Row,
  Card, CardBody,
  Col
} from 'reactstrap'
import {
  fetchEvents,
  updateFilter,
  updateAllFilters

} from './store/actions/index'
import Filters from './Filter'
import Content from './Content'

import BreadCrumbs from '@components/breadcrumbs'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'

import '@styles/react/libs/swiper/swiper.scss'
import {
  getNotifications
} from './store/actions'

const Notifications = () => {
    // ** Variables
    const dispatch = useDispatch()
    const store = useSelector(state => state.notifications)
     // ** Fetch Events On Mount
  useEffect(() => {
    console.log("the store is", store)
    dispatch(getNotifications(store.selectedNotification))
  }, [])
  return (
    
    <Fragment >
      <div style={{ marginTop: "-1rem" }} className="ml-lg-4 mr-lg-4">
        <div className="ml-lg-5" >
          <BreadCrumbs breadCrumbTitle='Notifications' />
        </div>
        <div className="ml-lg-4 mr-lg-4" >
          <Row>

            <Col md='12' xs='12'>
               <Card>
                <CardBody>
                  <Filters store={store}
                    dispatch={dispatch}
                    updateFilter={updateFilter}
                    updateAllFilters={updateAllFilters} />
                    
                </CardBody>
              </Card>
              <Card  >
                <CardBody>
                  <Content store={store}
                    dispatch={dispatch}
                  />
                  {/* {
                  store.events.length ? <>YES </> : <>NO </> 
                  } */}
                </CardBody>

              </Card>
            </Col>
          </Row>
        </div>
      
      </div>
    </Fragment>
  )
}

export default Notifications
