import React, {useState} from 'react'
import ApplicationCreateForm from '../components/ApplicationCreateForm';
import ApplicationDetailsForm from '../components/ApplicationDetailsForm';
import ApplicationSelectInstitutions from '../components/ApplicationSelectInstitutions';

function CreateForm() {
  
  let [form, setForm] = useState(1);

  let clickNext = () => {
    setForm(prev => prev+1);
  }

  let clickPrev = () => {
    setForm(prev => prev-1);
  }

  let clickSubmit = () => {
    console.log("Success");
  }

  return (
    <div>
      {
        form == 1 ? <ApplicationCreateForm next={clickNext} /> : 
        form == 2 ? <ApplicationDetailsForm next={clickNext} prev={clickPrev}/> :
        form == 3 ? <ApplicationSelectInstitutions submit={clickSubmit} prev={clickPrev}/> :
        <></>
      }
    </div>
  )
}

export default CreateForm