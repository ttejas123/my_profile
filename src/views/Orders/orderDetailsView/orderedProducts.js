//User Info, SKU, Product Name, MRP, MOQ, Image, added Date
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
// ** React Imports
import AppCollapse from '@components/app-collapse'
import { Fragment, useState, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@components/avatar'
// ** Table Data & Columns
import { data } from './data'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { ChevronDown, Share, Printer, File, Grid, Copy, Plus, MoreVertical, Edit, FileText, Archive, Trash, Eye, Check, X  } from 'react-feather'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
  FormGroup,
  Input,
  Label,
  Row,
  Media,
  Col,
  Badge,  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardText
} from 'reactstrap'

// ** Bootstrap Checkbox Component
const BootstrapCheckbox = forwardRef(({ onClick, ...rest }, ref) => (
  <div className='custom-control custom-checkbox'>
    <input type='checkbox' className='custom-control-input' ref={ref} {...rest} />
    <label className='custom-control-label' onClick={onClick} />
  </div>
))

const renderProduct = row => {
  const stateNum = Math.floor(Math.random() * 6),
  states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
  color = states[stateNum]
  const str = `${row.product_name}`
  const initial = str.substring(0, 1)
  return (
      <Media>
            { row.image ? (
                <CardBody>
              <img src={row.image} width='80' height='80' className='h-25 w-10' />
              </CardBody>
              ) : (
                <Avatar
                  initials
                  className='mr-2 mb-3 h-25 w-10'
                  color={color}
                  className='rounded mr-2 my-25'
                  content={initial}
                  contentStyles={{
                    borderRadius: 0,
                    fontSize: 'calc(36px)',
                    width: '100%',
                    height: '100%'
                  }}
                  style={{
                    height: '40px',
                    width: '40px'
                  }}
              />)
             }
          </Media>
    )
}

const OrderedProducts = () => {
  // ** States
  const [formModal, setFormModal] = useState(false)
  const [modal, setModal] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [selectedProduct, setselectedProduct] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [currentId, setCurrentId] = useState('')
  const [Filter, setFilter] = useState('')
  const [addClicked, setAddClicked] = useState(0)
  const [values, setValues] = useState('')
  
  const tempStyle = {
      minHeight : '130px'
  }

  const handleAction = (action) => {
    const userselection = confirm("Are you sure you want to delete")
 
      if (userselection === true) {
        console.log(" your record is deleted")
      } else {
      console.log("not deleted ")
      }
  }
  //columns
  const columns = [
    {
      name: 'Image',
      selector: 'Image',
      sortable: false,
      minWidth: '50px',
      style : tempStyle,
      allowOverflow : true,
      cell: row => (
        <div className='d-flex justify-content-left align-items-center '>
          {renderProduct(row)}
          <div className=''>
             
          </div>
        </div>
      )
    },
        {
          name: 'Product Name',
          selector: 'product_name',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'MRP',
          selector: 'MRP',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'Quantity',
          selector: 'quantity',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'Request For',
          selector: 'requestFor',
          sortable: true,
          minWidth: '50px',
          style : tempStyle
        },
        {
          name: 'Actions',
          allowOverflow: true,
          style : tempStyle,
          cell: row => {
            return (
              <div className='d-flex'>
              <UncontrolledDropdown>
                <DropdownToggle className='pr-1' tag='span'>
                  <MoreVertical size={15} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <FileText size={15} />
                    <span className='align-middle ml-50'>Approve</span>
                  </DropdownItem>
                  <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                    <Archive size={15} />
                    <span className='align-middle ml-50'>Reject</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            )
          }
        }
    ]

  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    console.log(data)
    setSearchValue(value)

    if (value.length) {
      updatedData = data.filter(item => {
         
        const startsWith =
          item.Name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.username.toLowerCase().startsWith(value.toLowerCase()) ||
          item.product_name.toLowerCase().startsWith(value.toLowerCase()) 

        const includes =
          item.Name.toLowerCase().includes(value.toLowerCase()) ||
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.product_name.toLowerCase().includes(value.toLowerCase()) 

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
      pageCount={searchValue.length ? filteredData.length / 5 : data.length / 5 || 1}
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

  const cdata = [
    {
      title: 'Ordered Products',
      content: (
        <DataTable
          noHeader
          pagination
          dense='true'
          columns={columns}
          paginationPerPage={5}
          className='react-dataTable'
          sortIcon={<ChevronDown size={10} />}
          paginationDefaultPage={currentPage + 1}
          paginationComponent={CustomPagination}
          data={searchValue.length ? filteredData : data}
        />
        
      )
    }
  ]

  return (
    <Fragment>
      
      <Card>
        <CardBody>
        <AppCollapse data={cdata} />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default OrderedProducts
