
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Axios from "axios";

    
  
    export default function Supplier() {
        const [countriesList, setCountriesLits] = useState([]);
    
    const getCountries = async () => {
        let contries = []; 
        const countryRes = await Axios.get(
          `https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList`
        );
       
        countryRes.data.forEach((data) => {
            data = JSON.parse(data);
            contries.push(data.name);
        });

        setCountriesLits(contries);
    };
    const handleChange = (e) => {
        alert(e.target.value);  
    };
    useEffect(() => {
        getCountries();
    }, []);
        return (
            <div>
                <div className="container ">

                    <div className="text-center my-3">
                        <h2>
                            Supplier Details
                        </h2>
                    </div>
<form action="">
<div className="input_bg  px-lg-5 px-2 py-2">
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        Supplier Name
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        Company Name
                                    </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                <Form.Group>
                                <label htmlFor="">
                                        Country
                                    </label>

                                    <select className='form-select' onChange={handleChange}>

                                        {countriesList.map((data, i) => (
                                            <option key={i} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </Form.Group>
                                   
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        State
                                    </label>
                                    <select name="" id="" className='form-select'>
                                        <option value="">Select State</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        City
                                    </label>
                                    <select name="" id="" className='form-select'>
                                        <option value="">Select City</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        Email Address
                                    </label>
                                    <input type="Email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="my-2">
                                    <label htmlFor="">
                                        Phone Number
                                    </label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>

                        </div>

                        <div className="row justify-content-center my-4">
                            <div className="col-md-3">
                                <button type='submit' className='btn btn-primary w-100' > Submit</button>
                            </div>
                        </div>
                    </div>
</form>
                  
                </div>
            </div>
        )
    }
