// import { Fragment, useState, useEffect  } from 'react'
// import Uppy from '@uppy/core'
// import thumbnailGenerator from '@uppy/thumbnail-generator'
// import { ArrowLeft, ArrowRight } from 'react-feather'
// import { Label, FormGroup, Row, Col, Input, Form, Button, CardBody } from 'reactstrap'
// import { DragDrop } from '@uppy/react'
// import 'uppy/dist/uppy.css'
// import '@uppy/status-bar/dist/style.css'
// import '@styles/react/libs/file-uploader/file-uploader.scss'
// const KYC = ({ stepper, type }) => {
    
//   const [img, setImg] = useState(null)
  
//   const uppy = new Uppy({
//     meta: { type: 'avatar' },
//     restrictions: { maxNumberOfFiles: 1 },
//     autoProceed: true
//   })

//   uppy.use(thumbnailGenerator)

//   uppy.on('thumbnail:generated', (file, preview) => {
//     console.log(file)
//     setImg(preview)
//   })

//   return (
//     <Fragment>
//       <div className='content-header'>
//         <h5 className='mb-0'>Address</h5>
//         <small>Enter Your Address.</small>
//       </div>
//       <Form onSubmit={e => e.preventDefault()}>
//         <Row>
//         <FormGroup tag={Col} md='6'>
//             <Label className='form-label' for={`aadhar-${type}`}>
//               Aadhar Card
//             </Label>
//             <Input type='text' name='aadhar' id={`aadhar-${type}`} placeholder='56322987673' />
//           </FormGroup>
//           <FormGroup tag={Col} md='6'>
//             <Label className='form-label' for={`gst-certificate-${type}`}>
//               Gst Certificate
//             </Label>
//             <Input type='text' name='gst-certificate' id={`gst-certificate-${type}`} placeholder='ABC07NG54' />
//           </FormGroup>
//           <FormGroup tag={Col} md='12'>
//             <CardBody>
//         <h4 className='mb-1'>
//             {/* <User size={20} className='mr-50' /> */}
//             <span className='align-middle'>Upload Cancelled Cheque</span>
//           </h4>
//           <DragDrop uppy={uppy} />
//         {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
//         </CardBody>
//         </FormGroup>
//         </Row>
//         <Row >
//         </Row>
//         <div className='d-flex justify-content-between'>
//           <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
//             <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
//             <span className='align-middle d-sm-inline-block d-none'>Previous</span>
//           </Button.Ripple>
//           <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
//             <span className='align-middle d-sm-inline-block d-none'>Next</span>
//             <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
//           </Button.Ripple>
//         </div>
//       </Form>
//     </Fragment>
//   )
// }

// export default KYC


// ** React Imports
import Uppy from '@uppy/core'
import { toast } from 'react-toastify'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import Avatar from '@components/avatar'
import axios from 'axios'
import { User, Check, Users, Edit, Calendar, FileText, Archive, Trash,  MapPin, DollarSign, X, Lock, Trash2, ArrowLeft, ArrowRight   } from 'react-feather'
import Flatpickr from 'react-flatpickr'

import { useState, useEffect, Fragment } from 'react'
import { selectThemeColors, isObjEmpty } from '@utils'

import {  Media, Row, Col, Button, Form, Table, CustomInput,  Modal, ModalHeader, ModalBody, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardTitle, CardBody, MoreVertical  } from 'reactstrap'
import Select from 'react-select'

// ** Renders Client Columns
const renderDoc = (DocName) => {
    return (
        <div className='d-flex justify-content-left align-items-center'>
             <CustomInput inline type='checkbox' id='exampleCustomCheckbox2' onClick={() => {
                                        setValues((preval) => {
                                                     Doc : preval.Doc.push({value: "Aadhar", label: "Aadhar"})
                                                  }
                                                ) 
                                      }} />
              <div className='d-flex flex-column'>
                  <span className='font-weight-bold'>{DocName}</span>
                
              </div>
        </div>
      )

}

const Kyc = ({ stepper, type }, prop) => {
  const optionDoc = [
    {value: "Aadhar", label: "Aadhar"},
    {value: "pan", label: "pan"},
    {value: "check", label: "check"}
]
  
  const DataSubmitToast = () => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title' color='success'>Data Submitted</h6>
      </div>
      <small className='text-muted'>a second ago</small>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        congratulations your all Documents are successfully submitted
      </span>
    </div>
  </Fragment>
)

  const initialvalues = {
    Doc : []
  }
  const [selectedOption, setselectedOption] = useState()
  const [values, setValues] = useState(initialvalues) 
  const [userProfile, setUserProfile] = useState(null)
  const [Aadhar, setAadhar] = useState(null)
  const [pan, setpan] = useState(null)
  const [check, setcheck] = useState(null)

            const uppy1 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            const uppy2 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            const uppy3 = new Uppy({
              meta: { type: 'avatar' },
              restrictions: { maxNumberOfFiles: 1 },
              autoProceed: true
            })

            uppy1.use(thumbnailGenerator)

            uppy1.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setAadhar(preview)
            })

            uppy2.use(thumbnailGenerator)

            uppy2.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setpan(preview)
            })

            uppy3.use(thumbnailGenerator)

            uppy3.on('thumbnail:generated', (file, preview) => {
              console.log(file)
              setcheck(preview)
            })
  // ** Custom close btn
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={prop.handleModal} />
  
  const submitHandle = (event) => {
    const data = {
      Aadhar,
      pan,
      check
    }
    console.log(data)
    
    //prop.editAction(values)
    setValues(initialvalues)
    setAadhar(null)
    setpan(null)
    setcheck(null)
    if (Aadhar || pan || check !== null) {
      toast.error(<DataSubmitToast />, { hideProgressBar: true })
    }
  }

  const ADDHandle = (event) => {
    console.log(values.country)
  }


  // ** States
  const [userData, setUserData] = useState(null)

  // ** Function to change user image
  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setUserProfile(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const addDocCol = () => {
    if (values.Doc.length > 0) {
      return values.Doc.map((val, index) => {
        let string = uppy2
        let image = null
        let names = ''
        if (val.value === "Aadhar") {
         string = uppy1
         image = Aadhar
         names = "Aadhar Card"
        }

        if (val.value === "pan") {
         string = uppy2
          image = pan
          names = "Pan Card"
        }

        if (val.value === "check") {
         string = uppy3
          image = check
          names = "Check Book"
        }
        return (
            <Col md='6' sm='12'  className="mt-5">
                <FormGroup className="pl-1">
                  <Label for='Name'>{names} Number</Label>
                  <InputGroup>
                    <Input name="first_name"  />
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                <Card>
                  <CardHeader>
                    <CardTitle tag='h4'> { names } </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <DragDrop uppy={string} />
                    { image !== null ? <img className='rounded mt-2' src={image} alt='avatar' /> : null}
                  </CardBody>
                </Card>
                </FormGroup>  
            </Col>
          )
      })
    }
  }


  return (
    <Row>
      <div className='content-header'>
         <h5 className='mb-0'>Kyc</h5>
         <small>Upload Documents</small>
       </div>
      <Col sm='12'>
        <Form onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md='12' sm='12'>
            <Row>
               <Col md='6' sm='12'>
                    <FormGroup>
                    <Label for='Doc'>Select Documents</Label>
                    <Select
                      isMulti
                      isClearable
                      isSearchable
                      id='Doc'
                      className='react-select'
                      classNamePrefix='select'
                      closeMenuOnSelect={false}
                      options={optionDoc}
                      theme={selectThemeColors}
                      value={values.Doc}
                      onChange={data => {
                                        console.log(data)
                                         setValues(
                                                  {
                                                     ...values,
                                                     Doc : data
                                                  } 
                                          )
                                        }
                                }
                    /> 
                    </FormGroup>
              </Col> 
              </Row>  
            </Col>

            <Col md='12' sm='12'>
              <Row>
                {addDocCol()}
              </Row>
            </Col>

            {/* <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' color='primary' onClick={ e =>  {
                                                          
                                                          submitHandle()
                                                        }
                                                      }>
                                    Submit
              </Button.Ripple>
              <Button.Ripple color='secondary' onClick={() => setValues(initialvalues) } outline>
                        Cancel
              </Button.Ripple>
            </Col> */}
          </Row>
          <div className='d-flex justify-content-between'>
           <Button.Ripple color='primary' className='btn-prev' onClick={() => stepper.previous()}>
             <ArrowLeft size={14} className='align-middle mr-sm-25 mr-0'></ArrowLeft>
             <span className='align-middle d-sm-inline-block d-none'>Previous</span>
           </Button.Ripple>
           <Button.Ripple color='primary' className='btn-next' onClick={() => stepper.next()}>
             <span className='align-middle d-sm-inline-block d-none'>Next</span>
             <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
           </Button.Ripple>
         </div>
        </Form>
      </Col>
    </Row>   
  )
}
export default Kyc
