import React, { useEffect, useState } from "react";
import "./Style.css";
import Fooddata from "./FoodData";
import { Form } from "react-bootstrap";
import Cards from "./Cards";
import Set from "./Set";

const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);
  
    const[copydata, setCopydata]=useState([]);
      console.log(copydata)
      

      const changeData=(e)=>{
        let getchangedata =e.toLowerCase();

        if (getchangedata === ""){
            setCopydata(fdata);
        }else{
          let storedata = copydata.filter((ele,k)=>{
            return ele.rname.toLowerCase().match(getchangedata);
          });
          setCopydata(storedata);
        }
      }

  const zomatologo ="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

  useEffect(()=>{
    setTimeout(()=>{
      setCopydata(Fooddata);
    },3000);
      
  },[])

  return (
    <>
      <div className="container d-flex justify-content-between align-items-center">
        <img
          src={zomatologo}
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">
          Viraj Ghadigaonkar
        </h2>
      </div>

      <Form className="d-flex justify-content-center align-items-center mt-3">
        <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Search Restaurant"  onChange={(e)=>changeData(e.target.value)}/>
          
        </Form.Group>
        <button className="btn text-light col-lg-1" style={{backgroundColor:"#ED4C67"}}>Submit</button>
      </Form>

      <section className="item_section mt-4 container">
          <h2 className="px-4" style={{fontWeight:"300"}}>Restaurants in Mumbai Open now</h2>
          <br/>
          <div className="row mt-2 d-flex justify-content-around align-items-center">
           {copydata && copydata.length ? <Cards data={copydata}/> : <Set sdata={fdata}/>}
          </div>
      </section>
      
    </>
  );
};

export default Search;
