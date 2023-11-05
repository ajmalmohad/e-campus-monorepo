import React, {useState} from 'react'
import ApplicationCreateForm from '../components/ApplicationCreateForm';
import ApplicationDetailsForm from '../components/ApplicationDetailsForm';
import ApplicationSelectInstitutions from '../components/ApplicationSelectInstitutions';
import { useNavigate } from "react-router-dom";

function CreateForm() {
  
  let [form, setForm] = useState(1);
  let [fields, setFields] = useState(['Name', 'Email', 'Phone Number', 'CGPA']);
  const [groupSelected, setGroupSelected] = useState([]);
  const navigate = useNavigate();

  let clickNext = () => {
    setForm(prev => prev+1);
  }

  let clickPrev = () => {
    setForm(prev => prev-1);
  }

  let clickSubmit = () => {
    let query = {
      "data": {
        "companyId": "1",
         "jobTitle": "Front End Developer",
         "jobDescription": "lorem",
         "roundDetails": "round 1",
         "deadline": "2020-12-12",
         "formFields": {
           "fields": fields
         },
         "selectedCollegeIds": {
           "ids": groupSelected
         }
      }
    }
    console.log("Success");
    navigate("/");
  }

  return (
    <div>
      {
        form == 1 ? <ApplicationDetailsForm next={clickNext} /> : 
        form == 2 ? <ApplicationCreateForm next={clickNext} prev={clickPrev} fields={fields} setFields={setFields} /> :
        form == 3 ? <ApplicationSelectInstitutions submit={clickSubmit} prev={clickPrev} groupSelected={groupSelected} setGroupSelected={setGroupSelected}/> :
        <></>
      }
    </div>
  )
}

export default CreateForm