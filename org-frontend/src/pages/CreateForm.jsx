import React, {useState} from 'react'
import ApplicationCreateForm from '../components/ApplicationCreateForm';
import ApplicationDetailsForm from '../components/ApplicationDetailsForm';
import ApplicationSelectInstitutions from '../components/ApplicationSelectInstitutions';
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import { apiUrl } from '../api/api';

function CreateForm() {
  
  let [form, setForm] = useState(1);
  let [fields, setFields] = useState(['Name', 'Email', 'Phone Number', 'CGPA']);
  const [groupSelected, setGroupSelected] = useState([]);
  const navigate = useNavigate();

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [round, setRound] = useState("");
  let [date, setDate] = useState(dayjs(Date.now()).format('YYYY-MM-DD'));

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
         "jobTitle": title,
         "jobDescription": description,
         "roundDetails": round,
         "deadline": date,
         "formFields": {
           "fields": fields
         },
         "selectedCollegeIds": {
           "ids": groupSelected
         }
      }
    }

    fetch(apiUrl+"/api/job-openings", {
      method: "POST",
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(query), 
    }).then((res)=>{
      console.log(res.json());
    }).catch((err) => {
      console.log(err);
    })

    console.log(query);
    console.log("Success");
    navigate("/");
  }

  return (
    <div>
      {
        form == 1 ? <ApplicationDetailsForm next={clickNext} title={title} setTitle={setTitle} description={description} setDescription={setDescription} date={date} setDate={setDate} round={round} setRound={setRound} /> : 
        form == 2 ? <ApplicationCreateForm next={clickNext} prev={clickPrev} fields={fields} setFields={setFields} /> :
        form == 3 ? <ApplicationSelectInstitutions submit={clickSubmit} prev={clickPrev} groupSelected={groupSelected} setGroupSelected={setGroupSelected}/> :
        <></>
      }
    </div>
  )
}

export default CreateForm