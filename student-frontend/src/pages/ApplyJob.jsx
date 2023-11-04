import React, {useState} from 'react'
import ApplicationDetails from '../components/ApplicationDetails';
import ApplicationForm from '../components/ApplicationForm';
import  {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function ApplyJob() {
  let params = useParams();
  console.log(params.job);
  let navigate = useNavigate();

  let [form, setForm] = useState(1);
  let [fields, setFields] = useState(['Name', 'Email', 'Phone Number', 'CGPA']);

  let clickNext = () => {
    setForm(prev => prev+1);
  }

  let clickPrev = () => {
    setForm(prev => prev-1);
  }

  let clickSubmit = () => {
    console.log("Success");
    navigate('/placements');
  }

  return (
    <div>
    {
      form == 1 ? <ApplicationDetails next={clickNext} /> : 
      form == 2 ? <ApplicationForm submit={clickSubmit} prev={clickPrev} fields={fields} data={{"name": "Ajmal Moha'd", "email":"Pikachu@thunderbolt.com", "phonenumber": "+1 4206923329", "cgpa": "10"}} /> :
      <></>
    }
    </div>
  )
}

export default ApplyJob