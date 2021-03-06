// ** Custom Components
import Avatar from '@components/avatar'
import { Link } from 'react-router-dom'
//import { DropDownList } from '@progress/kendo-react-dropdowns'
// ** Third Party Components
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** React Imports
import { Fragment, useState, forwardRef } from 'react'
import { selectThemeColors } from '@utils'
// ** Table Data & Columns
import { salesOrderData } from './data'
import Select from 'react-select'

// ** Add New Modal Component
//import FormModel from './formModel'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Row,
  Col,
  Badge, UncontrolledDropdown
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))


// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar.length) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32'  />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={row.Name || 'John Doe'} initials status="online" />
  }
}

const optionState = [
    {value: "", label: "Filter Status"},
    {value: "Maharshtra", label: "Maharshtra"},
    {value: "Telangana", label: "Telangana"},
    {value: "Karnataka", label: "Karnataka"}
  ]

  const optionCorporate = [
    {value: "", label: "Filter Status"},
    {value: "Bidoya", label: "Bidoya"},
    {value: "Other Corporate", label: "Other Corporate"}
  ]

const SalesOrder = () => {
  const statusObj = {
        pending: 'light-secondary',
        approved: 'light-success',
        approval: 'light-warning'
  }
  // ** States
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [values, setValues] = useState('')

   //deleteCountry
  const deleteCountry = (val) => {
    //here we passing id to delete this specific record
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) { 
        console.log("Deleted")
      } else {
      console.log("not deleted ")
      }
  }
    //edit action
   const AddeditEvent = (val) => {
     //here we hande event which comming from addNewModel.js (Form for add and edit)
      setCurrentId("")
      console.log(val)
  }

  //columns
   
const columns = [
    {
        name: 'Order Id',
        selector: 'orderId',
        sortable: true,
        minWidth: '50px'
    },
  {
    name: 'Product Name',
    selector: 'productName',
    sortable: true,
    minWidth: '50px'
  },
  {
    name: 'Ordered Date',
    selector: 'orderedDate',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Delivery Date',
    selector: 'deliveryDate',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'MRP / Unit',
    selector: 'mrp',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Total Amount',
    selector: 'totalAmount',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true,
    minWidth: '180px'
  },
  {
    name: 'Seller',
    selector: 'seller',
    sortable: true,
    minWidth: '180px'
  }
//   {
//     name: 'Actions',
//     allowOverflow: true,
//     cell: row => {
//       return (
//         <div className='d-flex'>
//           <UncontrolledDropdown>
//             <DropdownToggle className='pr-1' tag='span'>
//               <Trash size={15} onClick={e => {
//                                                                               e.preventDefault()
//                                                                               // deleteCountry(row.id)
//                                                                             } }/>
//             </DropdownToggle>
//           </UncontrolledDropdown>
//           <Link  to={`/edit-product/${row.id}`}><Edit  
//             size={15} 
//             onClick={ () => { 
//                               setCurrentId(row.id)
//                               setModal(true)
//                                } }>
//                                  <Link to='/edit-product'/>
//                                </Edit></Link>
//         </div>
//       )
//     }
//   }
]
  // ** Function to handle Modal toggle
  const handleModal = () => {
    setModal(!modal)
  }

  // handle drop down filter
  const handleFilterByDropDown = (value) => {
    let updatedData = []
    setFilter(value)
    console.log(value.value)
    let search = "l"
    search = value.value
    setSearchValue(search)
      if (search.length) {
          updatedData = data.filter(item => {
            const startsWith =
              item.BidStatus[0].value.toLowerCase().startsWith(search.toLowerCase()) 
              
            const includes =
              item.BidStatus[0].value.toLowerCase().includes(search.toLowerCase())
    
            if (startsWith) {
              return startsWith
            } else if (!startsWith && includes) {
              return includes
            } else return null
           })
        
      setFilteredData(updatedData)
      // setSearchValue(search)
      setFilter(value)
    }
  }
  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
        const NoOfBidder = item.NoOfBidder.toString()
        const startsWith =
          item.productName.toLowerCase().startsWith(value.toLowerCase()) ||
          item.mrp.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gst.toLowerCase().startsWith(value.toLowerCase()) 
          console.log(startsWith)
        const includes =
          item.productName.toLowerCase().includes(value.toLowerCase()) ||
          item.mrp.toLowerCase().includes(value.toLowerCase()) ||
          item.gst.toLowerCase().includes(value.toLowerCase()) 
          
        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
       })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Function to handle Pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Custom Pagination
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=''
      nextLabel=''
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? filteredData.length / 7 : salesOrderData.length / 7 || 1}
      breakLabel='...'
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName='active'
      pageClassName='page-item'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      nextLinkClassName='page-link'
      nextClassName='page-item next'
      previousClassName='page-item prev'
      previousLinkClassName='page-link'
      pageLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
    />
  )


  return (
    <Fragment>
      {/* <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
          <Link  to={`/add-warehouse`}>
          <Button className='ml-2' color='primary'>
              <Plus size={15} />
              <span className='align-middle ml-50'>Add Warehouse</span>
            </Button>
            </Link>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='4'>
            <Label className='mr-1' for='search-input'>
                Filter State
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionState}
                value={values.state}
                onChange={data => {
                  setValues(
                           {
                              ...values,
                              state : data
                           } 
                   )
                 }
         }
              />
              </div>
            </Col>
            <Col md='4'>
            <Label className='mr-1' for='search-input'>
                Filter Corporate
              </Label>
            <div style={{zIndex:1000, position:'relative'}}>
              <Select
                isClearable={false}
                theme={selectThemeColors}
                className='react-select'
                classNamePrefix='select'
                options={optionCorporate}
                value={values.corporate}
                onChange={data => {
                  setValues(
                           {
                              ...values,
                              corporate : data
                           } 
                   )
                 }
         }
              />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card> */}

      <Card className='mx-1'>

        <CardHeader className='flex-md-row flex-column align-md-items-center align-items-start border-bottom'>
          <CardTitle tag='h4'>Sales Orders</CardTitle>
          <div className='d-flex mt-md-0 mt-1'>
            
          </div>
        </CardHeader>

        <Row className='justify-content-end mx-0'>
          <Col className='d-flex align-items-center justify-content-end mt-1' md='6' sm='12'>
            <Label className='mr-1' for='search-input'>
              Search
            </Label>
            <Input
              className='dataTable-filter mb-50'
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={handleFilter}
            />
          </Col>
        </Row>

        <DataTable
          noHeader
          pagination
          selectableRows
          columns={columns}
          paginationPerPage={7}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : salesOrderData}
          selectableRowsComponent={BootstrapCheckbox}
        />
        
      </Card>
            {/* <FormModel open={modal} handleModal={handleModal} editAction={AddeditEvent} currentId={currentId} data={data} /> */}
    </Fragment>
  )
}

export default SalesOrder
