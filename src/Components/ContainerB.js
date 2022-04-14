import React from 'react'
import './ContainerB.css'
import Data from './Data.js'
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'


const ContainerB = () => {

  const [value, setValue] = useState({ city: '', category: '', query: '' });
  console.log(value);

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAlldata();
  }, [value])

  
  async function getAlldata() {

    // let url = "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI";
    // let param = [];
    // if (value.city.length > 0) {
    //   param.push("city=" + value.city)
    // }
    // if (value.category.length > 0) {
    //   param.push("catagory=" + value.category)
    // }
    // if (value.query.length > 0) {
    //   param.push("query=" + value.query)
    // }
    // if (param.length > 0) {
    //   url += "?" + param.join("&")
    // }
    //   https://vast-shore-74260.herokuapp.com/banks
    // console.log(url);
    try {
      const students = await axios.get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
      // const students = await axios.get(url);
      setStudents(students.data);
    }
    catch (error) {
      console.log("Something went wrong");
      console.log(error);
    }
  }
  const renderingdata = students.map((students, i) => {
    return (

      <Data
        ifsc={students.ifsc}
        bank_id={students.bank_id}
        branch={students.branch}
        address={students.address}
        bank_name={students.bank_name}
     // city={students.city}
      />
    )
  })
  return (
    <div className='main-contb'>
      {/* <SearchOptions /> */}
      <div className='searchoption-container'>
        <select className='select1' value={value.box1} onChange={(e) => setValue({ ...value, city: e.target.value })} >
          <option value="" disabled selected>SELECT CITY</option>
          <option value="MUMBAI">MUMBAI</option>
          <option value="KOLKATA">KOLKATA</option>
          <option value="PATNA">PATNA</option>
          <option value="DELHI">DELHI</option>
          <option value="BANGLORE">BANGLORE</option>
        </select>

        <select className='select1' value={value.box2} onChange={(e) => setValue({ ...value, category: e.target.value })}>
          <option value="" disabled selected>SELECT CATEGORY</option>
          <option value="BANKNAME">BANK NAME</option>
          <option value="IFSC">IFSC</option>
          <option value="BRANCH">BRANCH</option>
          <option value="BANKID">BANK ID</option>
        </select>
        <input type="search" placeholder="Search..." autofocus required name="Search-bycity" value={value.box3} onChange={(e) => setValue({ ...value, query: e.target.value })} />
      </div>
      {/* <MainTable /> */}
      <div className='main-table'>
        <span>BANK</span>
        <span>IFSC</span>
        <span>BRANCH</span>
        <span>BANK ID</span>
        <span>ADDRESS</span>
      </div>
      {renderingdata}
    </div>
  )
}

export default ContainerB;





  // const getAlldata = async () => {
  //   await axios.get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI").then((res) => {
  //     console.log(res.data);
  //     setStudents(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }