import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";


const AddStudent = ({ expanded }) => {
  return (
    <>
      <div className='h-16 flex justify-between items-center py-3 mt-16'>
        <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>Add Student</h1>
        <div>
          <p className="text-sm"><NavLink to={"/"} className='text-purple-500'>Home</NavLink> / Add Student</p>
        </div>
      </div>
      <Container>
        <div className="box">
          <h1 className='text-center text-2xl font-bold text-purple-500 py-3'>New Admission</h1>
          <Tabs
            defaultActiveKey="home"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="home" title="Student Information">
              <Row>
                <Col md={4} sm={12}><label>Surname</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col md={4} sm={12}><label>Student name</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col md={4} sm={12}><label>Father name</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
              </Row>
              <Row>
                <Col lg={3} md={6} sm={12}><label>Student Contact No.</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={3} md={6} sm={12}><label>Whatsapp No.</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={3} md={6} sm={12}><label>Parent Contant No.</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={3} md={6} sm={12}><label>Whatsapp No.</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={12} className='d-grid'><label>Address</label>
                  <textarea cols="30" rows="3"></textarea></Col>
                <Col lg={4} md={6} sm={12}><label>Date</label><input type="date" name="" id="" /></Col>
                <Col lg={4} md={12} sm={12}><label>Image</label><input type="file" name="" id="" /></Col>
              </Row>
              <Row>
                <Col lg={4} md={6} sm={12}><label>Qualification</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={4} md={6} sm={12}><label>Select Reference</label>
                  <select>
                    <option>Select Reference</option>
                    <option></option>
                    <option></option>
                  </select>
                </Col>
                <Col lg={4} md={12} sm={12}><label>Reference Name</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Course Information">
              <Row>
                <Col md={4} sm={12}><label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">Master In Flutter Development</option>
                    <option value="">Master In Android Development</option>
                    <option value="">Master In Game Development</option>
                    <option value="">Master In Full Stack Development</option>
                    <option value="">Master In Web Development</option>
                    <option value="">Master In React Native</option>
                    <option value="">Master In Data Science</option>
                    <option value="">Master In APS.net Development</option>
                    <option value="">Master In Data Analytics</option>
                    <option value="">Master In Web Design</option>
                    <option value="">Master In UI/UX Design</option>
                    <option value="">Master In 2D/3D Animation</option>
                    <option value="">Master In 2D Animation</option>
                    <option value="">Master In 3D Animation</option>
                    <option value="">Master In VFX</option>
                    <option value="">Master In Graphics Design</option>
                    <option value="">Video Editing</option>
                    <option value="">2D/3D Game Design</option>
                    <option value="">Maya Pro | 3Ds Max Pro</option>
                    <option value="">Blender 3D Design</option>
                  </select>
                </Col>
                <Col md={4} sm={12}><label>Course Duration</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col md={4} sm={12}><label>Daily Time</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
              </Row>
              <Row>
                <Col md={12} sm={12} className='d-grid'>
                  <label>Course Contents</label>
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                </Col>
              </Row>
              <Row>
                <Col lg={3} md={6} sm={12}><label>Total Fees</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={3} md={6} sm={12} ><label>Joining Date</label><input type="date" name="" id="" /></Col>
                <Col lg={3} md={6} sm={12} ><label>Ending Date</label><input type="date" name="" id="" /></Col>
                <Col lg={3} md={6} sm={12} ><label>Job Responsibility</label>
                  <div className='d-flex align-items-center' style={{ height: '30px' }} ><input type="radio" name="" id="" />Yes</div>
                  <div className='d-flex align-items-center h-10' style={{ height: '30px' }}><input type="radio" name="" id="" />no</div>
                </Col>
              </Row>
              <Row>
                <Col md={5} sm={12}><label>Installment Details</label><input type="text" className="border-[1px] border-gray-500 p-1" disabled /></Col>
                <Col md={5} sm={12}><label></label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={2} md={2} sm={12} className='d-flex align-items-center mt-3 '><button className='btn-1'><FaPlus /></button></Col>
                <Col md={5} sm={12}><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col md={5} sm={12}><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
                <Col lg={2} md={2} className='d-flex align-items-center '><button className='btn-2'><RiDeleteBin6Line /></button></Col>
              </Row>
            </Tab>
            <Tab eventKey="longer-tab" title="Faculty Information">
              <Row>
                <Col md={4} sm={12}><label>Select Faculty</label>
                  <select>
                    <option>Select Faculty</option>
                    <option></option>
                    <option></option>
                  </select>
                </Col>
                <Col md={4} sm={12}><label>Select Batch</label>
                  <select>
                    <option>Select Batch</option>
                    <option>8 To 10</option>
                    <option>10 To 12</option>
                    <option>2 To 4</option>
                    <option>4 To 8</option>
                  </select>
                </Col>
                <Col md={4} sm={12}><label>Running Topic</label><input type="text" className="border-[1px] border-gray-500 p-1" /></Col>
              </Row>
              <Row>
                <Col md={4} sm={12}><label>PC/Laptop</label>
                  <div className='d-flex'>
                    <div className='d-flex align-items-center mx-2' style={{ height: '30px' }} ><input type="radio" name="pc/laptop" id="" />Yes</div>
                    <div className='d-flex align-items-center mx-2' style={{ height: '30px' }}><input type="radio" name="pc/laptop" id="" />no</div>
                  </div>
                </Col>
                <Col md={4} sm={12}><label>PC No</label>
                  <select>
                    <option>Select PC</option>
                    <option>PC 1</option>
                    <option>PC 2</option>
                    <option>PC 3</option>
                    <option>PC 4</option>
                    <option>PC 5</option>
                    <option>PC 6</option>
                    <option>PC 7</option>
                    <option>PC 8</option>
                    <option>PC 9</option>
                    <option>PC 10</option>
                  </select>
                </Col>
                <Col md={4} sm={12}><label>Laptop Compalsory</label>
                  <div className='d-flex'>
                    <div className='d-flex align-items-center mx-2' style={{ height: '30px' }} ><input type="radio" name="laptop" id="" />Yes</div>
                    <div className='d-flex align-items-center mx-2' style={{ height: '30px' }}><input type="radio" name="laptop" id="" />no</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} className='d-grid'>
                  <label>Extra Note</label>
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} className='d-grid'>
                  <label>Reception Note</label>
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                </Col>
              </Row>
              <Row>
                <Col className='text-center'>
                  <button className='btn-1'>Submit</button>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
      {/*<section style={{ width: expanded ? `calc(100% - 15rem)` : `calc(100% - 3rem)` }}>
        <div className='m-auto'>
          <form className="flex flex-col items-center justify-evenly w-full sm:w-2/3 mx-auto shadow-lg rounded-2xl p-0">
            <h1 className='text-center text-2xl font-bold text-purple-500 py-3'>New Admission</h1>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                  <Tab label="Student Information" {...a11yProps(0)} className='text-xs' />
                  <Tab label="Course Information" {...a11yProps(1)} />
                  <Tab label="Faculty Information" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className='w-full flex flex-wrap justify-between items-center mb-0 sm:mb-2 lg:mb-3'>
                  <div className=''>
                    <label htmlFor='surname' className='font-semibold text-xs lg:text-sm'>Surname</label><br />
                    <input type="text" id='surname' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='student name' className='font-semibold text-xs lg:text-sm'>Student Name</label><br />
                    <input type="text" id='student name' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='father name' className='font-semibold text-xs lg:text-sm'>Father Name</label><br />
                    <input type="text" id='father name' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='student contact no' className='font-semibold text-xs lg:text-sm'>Student Contact No</label><br />
                    <input type="text" id='student contact no' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='whatsapp no' className='font-semibold text-xs lg:text-sm'>WhatsApp No</label><br />
                    <input type="text" id='whatsapp no' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='parent contact no' className='font-semibold text-xs lg:text-sm'>Parent Contact No</label><br />
                    <input type="text" id='parent contact no' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='parent whatsapp no' className='font-semibold text-xs lg:text-sm'>Parent WhatsApp No</label><br />
                    <input type="text" id='parent whatsapp no' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Address' className='font-semibold text-xs lg:text-sm'>Address</label><br />
                    <input type="text" id='Address' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='DOB' className='font-semibold text-xs lg:text-sm'>DOB</label><br />
                    <input type="date" id='DOB' className='outline-none border-[1px] border-gray-300 rounded-md p-2 w-[100%]' />
                  </div>
                  <div className=''>
                    <label htmlFor='Qualification' className='font-semibold text-xs lg:text-sm'>Qualification</label><br />
                    <input type="text" id='Qualification' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Select Reference' className='font-semibold text-xs lg:text-sm'>Select Reference</label><br />
                    <select className='outline-none border-[1px] border-gray-300 rounded-md p-2 py-[9.5px]'>
                      <option selected disabled>Select Reference</option>
                      <option value="" key="">Reference 1</option>
                      <option value="" key="">Reference 2</option>
                      <option value="" key="">Reference 3</option>
                    </select>
                  </div>
                  <div className=''>
                    <label htmlFor='Reference Name' className='font-semibold text-xs lg:text-sm'>Reference Name</label><br />
                    <input type="text" id='Reference Name' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Image' className='font-semibold text-xs lg:text-sm'>Image</label><br />
                    <input type="file" id='Image' />
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div className='w-full flex mb-3 justify-between items-center flex-wrap'>
                  <div className=''>
                    <label htmlFor='Course' className='font-semibold text-xs lg:text-sm'>Course</label><br />
                    <input type="text" id='Course' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Course Duration' className='font-semibold text-xs lg:text-sm'>Course Duration</label><br />
                    <input type="text" id='Course Duration' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Daily Time' className='font-semibold text-xs lg:text-sm'>Daily Time</label><br />
                    <input type="text" id='Daily Time' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='Course Contents' className='font-semibold text-xs lg:text-sm'>Course Contents</label><br />
                    <textarea className='outline-none border-[1px] border-gray-300 rounded-md p-2'></textarea>
                  </div>
                  <div className=''>
                    <label htmlFor='Total Fees' className='font-semibold text-xs lg:text-sm'>Total Fees</label><br />
                    <input type="text" id='Total Fees' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Joining Date' className='font-semibold text-xs lg:text-sm'>Joining Date</label><br />
                    <input type="date" id='Joining Date' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Ending Date' className='font-semibold text-xs lg:text-sm'>Ending Date</label><br />
                    <input type="date" id='Ending Date' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                  <div className=''>
                    <label htmlFor='Job Responsibility' className='font-semibold text-xs lg:text-sm'>Job Responsibility</label><br />
                    <input type="radio" name='job' id='Job Responsibility' value="Yes" />Yes <br />
                    <input type="radio" name='job' id='Job Responsibility' value="No" />No
                  </div>
                  <div className='flex'>
                    <div className='w-full'>
                      <label htmlFor='Installment Details' className='font-semibold text-xs lg:text-sm'>Installment Details</label>
                      <div className='flex justify-start w-full mb-2'>
                        <input type="text" disabled className='w-[40%] outline-none border-[1px] border-gray-300 rounded-md p-2 mr-2' />
                        <input type="text" className='w-[40%] outline-none border-[1px] border-gray-300 rounded-md p-2 mr-2' />
                        <button className='w-[5%] bg-purple-500 text-white rounded-md font-bold'>+</button>
                      </div>
                      <div className='flex justify-start w-full'>
                        <input type="text" className='w-[40%] outline-none border-[1px] border-gray-300 rounded-md p-2 mr-2' />
                        <input type="text" className='w-[40%] outline-none border-[1px] border-gray-300 rounded-md p-2 mr-2' />
                        <button className='w-[5%] bg-red-500 text-white rounded-md font-bold'><i className="fa-solid fa-trash-can"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div className='w-full flex mb-3 justify-stretch'>
                  <div className='w-1/3'>
                    <label htmlFor='Select Faculty' className='font-semibold text-xs lg:text-sm'>Select Faculty</label><br />
                    <select className='outline-none border-[1px] border-gray-300 rounded-md p-2 py-[9.5px]'>
                      <option selected disabled>Select Faculty</option>
                      <option value="" key="">Faculty 1</option>
                      <option value="" key="">Faculty 2</option>
                      <option value="" key="">Faculty 3</option>
                    </select>
                  </div>
                  <div className='w-1/3'>
                    <label htmlFor='Batch Time' className='font-semibold text-xs lg:text-sm'>Batch Time</label><br />
                    <select className='outline-none border-[1px] border-gray-300 rounded-md p-2 py-[9.5px]'>
                      <option selected disabled>Select Batch</option>
                      <option value="" key="">Batch 1</option>
                      <option value="" key="">Batch 2</option>
                      <option value="" key="">Batch 3</option>
                    </select>
                  </div>
                  <div className='w-1/3'>
                    <label htmlFor='Running Topic' className='font-semibold text-xs lg:text-sm'>Running Topic</label><br />
                    <input type="text" id='Running Topic' className='outline-none border-[1px] border-gray-300 rounded-md p-2' />
                  </div>
                </div>
                <div className='w-full flex mb-3 justify-stretch'>
                  <div className='w-1/3'>
                    <label htmlFor='Pc/Laptop' className='font-semibold text-xs lg:text-sm'>Pc/Laptop</label><br />
                    <input type="radio" name='pc_laptop' value="PC" className='mr-1' />PC
                    <input type="radio" name='pc_laptop' className="ml-2 mr-1" value="Laptop" />Laptop
                  </div>
                  <div className='w-1/3'>
                    <label htmlFor='PC No' className='font-semibold text-xs lg:text-sm'>PC No</label><br />
                    <select className='outline-none border-[1px] border-gray-300 rounded-md p-2 py-[9.5px]'>
                      <option selected disabled>PC No</option>
                      <option value="" key="">PC 1</option>
                      <option value="" key="">PC 2</option>
                      <option value="" key="">PC 3</option>
                    </select>
                  </div>
                  <div className='w-1/3'>
                    <label htmlFor='Laptop Compulsory' className='font-semibold text-xs lg:text-sm'>Laptop Compulsory</label><br />
                    <input type="radio" name='pc_laptop' value="PC" className='mr-1' />Yes
                    <input type="radio" name='pc_laptop' className="ml-2 mr-1" value="Laptop" />No
                  </div>
                </div>
                <div>
                  <label htmlFor='Extra Note' className='font-semibold text-xs lg:text-sm'>Extra Note</label><br />
                  <textarea className='outline-none border-[1px] border-gray-300 rounded-md p-2'></textarea>
                </div>
                <div>
                  <label htmlFor='Reception Note' className='font-semibold text-xs lg:text-sm'>Reception Note</label><br />
                  <textarea className='outline-none border-[1px] border-gray-300 rounded-md p-2'></textarea>
                </div>
                <div className='grid place-items-center mt-2'>
                  <input type="submit" value="Submit" className='bg-purple-500 text-white rounded-md w-1/4 m-auto py-2' />
                </div>
              </CustomTabPanel>
            </Box>
          </form>
        </div>
  </section>*/}
    </>
  )
}

export default AddStudent;
