// ** React Imports
import { useState, useEffect, Fragment } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import AutoComplete from '@components/autocomplete'
import { useParams } from 'react-router-dom'
// ** Custom Components
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import Select from 'react-select'
import { selectThemeColors, isObjEmpty } from '@utils'
import WarehouseAddressCard from './warehouseCard'

import 'uppy/dist/uppy.css'
import '@uppy/status-bar/dist/style.css'
import '@styles/react/libs/file-uploader/file-uploader.scss'
import { data } from './data'

// ** Third Party Components
import { Box,  AtSign, Aperture, Check } from 'react-feather'
import { Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CustomInput, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const ErrorToast = () => (
  <Fragment>
   <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success!</h6>
      </div>
      <small className='text-muted'>Just now</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        Thanks for Submitting, We will verify your product within 48 hrs
      </span>
    </div>
  </Fragment>
)

const EditProduct = (prop) => {
  const WarehouseAddress = {
    title : '1',
    shopName: "Eagles",
    shopNumber: "A/35, 0/4",
    streetName: "sector-15",
    pincode: 400708,
    state: "Maharashtra",
    city: "Airoli",
    country: "India"
  }
  const { id } = useParams()
    const optionCategory = [
        {value: "Electronics", label: "Electronics", id:0},
        {value: "Clothing", label: "clothing", id:1},
        {value: "Footwear", label: "Footwear", id:2}
      ]
      const [suggestions] = useState([
        {
          title: 'Electronics'
        },
        {
          title: 'Clothing'
        },
        {
          title: 'Footwear'
        },
        {
          title: 'Stationery'
        },
        {
          title: 'Handmade'
        }
      ])
    
    const optionBrandSelection = [
        {value: "Google", label: "Google"},
        {value: "Amazon", label: "Amazon"},
        {value: "Apple", label: "Apple"},
        {value: "Microsoft", label: "Microsoft"},
        {value: "Verizon", label: "Verizon"}
    ]

    const optionProductCategory = [
      {value: "T-shirt", label: "T-shirt"},
      {value: "Full Shirt", label: "Full Shirt"},
      {value: "Half Sleeves", label: "Half Sleeves"}
  ]
      const optionSubCategory = [
          [   
                {
                    value: "MobilePhone",
                    label: "Mobile Phone",
                    specs :  
                    [
                    {id : "modelName", name : "Model Name", type : "text"},
                    {id : "secondaryStorage", name : "Secondary Storage", type : "text"},
                    {id : "ram", name : "RAM", type : "text"},
                    {id : "os", name : "OS", type : "text"},
                    {id : "size", name : "Size", type : "text"}
                    ]
                },
                {
                    value: "Tablet",
                     label: "Tablet",
                    specs : 
                [
                    {id : "modelName", name : "Model Name", type : "text"},
                    {id : "secondaryStorage", name : "Secondary Storage", type : "text"},
                    {id : "ram", name : "RAM", type : "text"},
                    {id : "os", name : "OS", type : "text"},
                    {id : "size", name : "Size", type : "text"}
                ]
            }
          ],
          [
                {
                    value: "Shirt",
                    label: "Shirt",
                    specs :  
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "Color", name : "Shirt Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            },
                {value: "Pant",
                label: "Pant",
                specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Pant Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            }
          ],
          [
                {
                 value: "FilpFlops",
                 label: "Flip Flops",
                 specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Flip-Flop Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            },
                {
                    value: "Shoes",
                    label: "Shoes",
                    specs :
                [
                    {id : "name", name : "Name", type : "text"},
                    {id : "size", name : "Size", type : "text"},
                    {id : "color", name : "Shoe Color", type : "text"},
                    {id : "material", name : "Material", type : "text"},
                    {id : "washable", name : "Washable", type : "text"}
                ]
            }
          ]
      ]
    const selectedUser = {
        avatar: "",
        company: "Yotz PVT LTD",
        contact: "(479) 232-9151",
        Category: "El Salvador",
        currentPlan: "enterprise",
        email: "gslixby0@abc.net.au",
        fullName: "Coense Solutions",
        id: 1,
        role: "editor",
        status: "inactive",
        username: "gslixby0"
          }
 // console.log(selectedUser)

  const initialvalues = {
    id:1,
    name: "",
    email: "",
    hasSubscription: "",
    isVerified: "",
    logo : "",
    phone : "",
    panNumber: "",
    Currency:  [{value: "currency", label: "Indian Rupee"}],
    City:  [{value: "city", label: "Mumbai"}], 
    SubCategory:  [{value: "SubCategory", label: "SubCategory"}],
    Category: [{value: "Category", label: "Category"}]
  }

  const [subCategoryOptions, setSubCatOptions] = useState(optionSubCategory[0])
  const [fields, setFields] = useState(false)
  const [SpecificationsData, setSpecificationsData] = useState(optionSubCategory[0][0].specs)
  console.log(SpecificationsData)
  const [values, setValues] = useState(initialvalues)
  const [editvalues, setEditValues] = useState({})
  const handleInputeChange = (event) => {
    const {name, value} = event.target
    setValues(
    {
      ...values,
      [name] : value
    }
    )
  }
  useEffect(() => {
    setEditValues(
      data[id - 1]
    )
console.log('Id=', id)
    console.log('Values', data[id])
}, [id])
  // ** States
  const [img, setImg] = useState(null)
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
    const setSubCategoryOptions = (data) => {
      
    setValues(
        {
           ...values,
           Category : data,
           SubCategory : optionSubCategory[data.id]
        } 
)
    setSubCatOptions(optionSubCategory[data.id])
  }


  const handleFilter = e => {
    
  }
  // Image Upload section
  const [previewArr, setPreviewArr] = useState([])

  const uppy = new Uppy({
    meta: { type: 'avatar' },
    autoProceed: true,
    totalProgress: 0
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
      console.log(file.data)
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => <img key={index} className='rounded mt-2 mr-1' src={src} alt='avatar' />)
    } else {
      return null
    }
  }

  // ** Update user image on mount or change
//   useEffect(() => {
//     if (selectedUser !== null || (selectedUser !== null && userData !== null && selectedUser.id !== userData.id)) {
//       setUserData(selectedUser)
//       if (selectedUser.avatar.length) {
//         return setImg(selectedUser.avatar)
//       } else {
//         return setImg(null)
//       }
//     }
//   }, [selectedUser])

  return (
    <Card className='mx-1'>
        <CardHeader>
  <CardTitle tag='h1'>Edit Product</CardTitle>
</CardHeader>

    <CardBody className='pt-2'>
    <Row>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
          <Col md='4' sm='12'>
      <FormGroup>
          <Label for='category'>Category</Label>
          <Input type='text' id='readonlyInput' readOnly value={editvalues.product_name}/>
            </FormGroup> 
      </Col>
            </Row>
                    <Row>
                    <Col sm='12' className='mt-2'>
                  <h4 className='d-block mb-1'>
                    <Box size={20} className='mr-50' />
                    <span className='align-middle'>General Information</span>
                  </h4>
                  </Col>
                  <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='productId'>Product Id</Label>
                  <Input type='text' id='readonlyInput'  readOnly value={'prop'}/>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='name'>Name</Label>
                  <Input type='text' id='readonlyInput' readOnly value={editvalues.product_name}/>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='ean_upc_code'>EAN UPC Code</Label>
                  <Input type='text' id='readonlyInput'  readOnly value={editvalues.eanUpcCode}/>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='hsnCode'>HSN Code</Label>
                  <Input type='text' id='readonlyInput' readOnly value={editvalues.hsnCode} />
                </FormGroup>
              </Col>
              {/* <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='sGstNumber'>SGST (%)</Label>
                  <Input type='text' id='sGstNumber' (%)' defaultValue={userData && userData.gstNumber} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='cGstNumber'>CGST (%)</Label>
                  <Input type='text' id='cGstNumber' (%)' defaultValue={userData && userData.gstNumber} />
                </FormGroup>
              </Col> */}
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='gstNumber'>GST (%)</Label>
                  <Input type='text' id='readonlyInput' readOnly value={editvalues.eanUpcCode}/>
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='mrp'>MRP</Label>
                  <Input type='text' id='mrp' placeholder='Mrp' defaultValue={userData && userData.mrp} />
                </FormGroup>
              </Col>
                    <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='productCategory'>Product Category</Label>
                  <div style={{zIndex:1000, position:'relative'}}>
                                  <Select
                                    id='productCategory'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    options={optionProductCategory}
                                    theme={selectThemeColors}
                                    value={values.productCategory}
                                    onChange={data => {
                                                       setValues(
                                                                {
                                                                   ...values,
                                                                   productCategory : data
                                                                } 
                                                                //seller brand
                                                        )
                                                        
                                                      }
                                              }
                            />
                            </div>
                </FormGroup>
              </Col>
                    <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='description'>Description</Label>
                  <Input type='textarea' id='description' placeholder='Description' defaultValue={userData && userData.description} />
                </FormGroup>
              </Col>
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Bid Details</span>
                  </h4>
                  <Row>
                  <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='moq'>MOQ</Label>
                  <Input type='text' id='moq' placeholder='MOQ' defaultValue={userData && userData.mrp} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='rate'>Rate</Label>
                  <Input type='text' id='rate' placeholder='Rate' defaultValue={userData && userData.mrp} />
                </FormGroup>
              </Col>
              <Col md='4' sm='12'>
                <FormGroup>
                  <Label for='lead'>Lead</Label>
                  <Input type='text' id='lead' placeholder='lead' defaultValue={userData && userData.mrp} />
                </FormGroup>
              </Col>
                  </Row>
              </Col> 
              <Col sm='12'>
                  <h4 className='d-block mb-1'>
                    < AtSign size={20} className='mr-50' />
                    <span className='align-middle'>Brand</span>
                  </h4>
                  <Row>
                        <Col md='4' sm='12'>
                            <FormGroup>
                                    <Label for='sku'>Brand</Label>
                                  <Select
                                    id='brandSelection'
                                    className='react-select'
                                    classNamePrefix='select'
                                    isClearable={false}
                                    options={optionBrandSelection}
                                    theme={selectThemeColors}
                                    value={values.brandSelection}
                                    onChange={data => {
                                                       setValues(
                                                                {
                                                                   ...values,
                                                                   brandSelection : data
                                                                } 
                                                                //seller brand
                                                        )
                                                        
                                                      }
                                              }
                            />
                            </FormGroup> 
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup >
                                    <Label for='Not in Brand'>No Brand Listed</Label>
                                    <CustomInput  type='checkbox' id='exampleCustomCheckbox' label='Seller Brand' />
                            </FormGroup> 
                        </Col>
                  </Row>
              </Col> 
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Value Added Services</span>
                  </h4>
                  <Row>
                        <Col md='4' sm='12'>
                        <FormGroup >
                                    <CustomInput  type='checkbox' id='isSamplingAvailable' label='Is Sampling Available' />
                            </FormGroup>
                        </Col>
                        <Col md='4' sm='12'>
                            <FormGroup >
                                    <CustomInput  type='checkbox' id='isCustomizationAvailable' label='Is Customization Available' />
                            </FormGroup> 
                        </Col>
                  </Row>
              </Col> 
              <Col sm='12' className='mb-2 mt-2'>
                  <h4 className='d-block mb-1'>
                    < Aperture size={20} className='mr-50' />
                    <span className='align-middle'>Inventory</span>
                  </h4>
                  <Row>
                  <Col md='4' sm='12'>
                    <FormGroup>
                      <Label for='inventory'>Total Inventory</Label>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>     
                  </Row>
                  <CardBody>
                <Row>
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  <Col md='3' sm='12'>
                    <FormGroup>
                          <WarehouseAddressCard Address={WarehouseAddress}/>
                      <Input type='text' id='inventory' placeholder='Inventory' defaultValue={userData && userData.gstNumber} />
                    </FormGroup>
                  </Col>   
                  </Row>
                  </CardBody>  
              </Col> 
                  <Col sm='12'>
                  <h4 className='d-block mb-1'>
                    <Box size={20} className='mr-50' />
                    <span className='align-middle'>Specifications</span>
                  </h4>
                  </Col>
                  {
                      SpecificationsData.map(item => {
                          return (
                            <Col md='4' sm='12' key={item.id}>
                            <FormGroup>
                              <Label for={item.id}>{item.name}</Label>
                              <Input type={item.name} id={item.id} placeholder={item.name}  />
                            </FormGroup>
                          </Col>
                          )
                      })
                  }   
                <Col sm='12'>
               
                  <CardHeader>
                <CardTitle tag='h4'>Upload Images</CardTitle>
              </CardHeader>
              <CardBody>
                <DragDrop uppy={uppy} />
                {renderPreview()}
                <Button.Ripple className='d-block mb-1 mb-sm-0 mr-0 mr-sm-1 mt-2' type='submit' color='primary' onClick={e => {
                                                                                            e.preventDefault()
                                                                                            // uppy.totalProgress(0)
                                                                                          } }>
                        Reset Images
                      </Button.Ripple>
              </CardBody>
              </Col>
                    <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
                      <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary' onClick={() => toast.error(<ErrorToast />, { hideProgressBar: true })}>
                        Save Changes
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Reset
                      </Button.Ripple>
                    </Col>
                  </Row>
        </Form>
      </Col>
    </Row>
    </CardBody>
    </Card>
  )
}
export default EditProduct
