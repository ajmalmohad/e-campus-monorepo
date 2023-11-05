import React from 'react'
import Search from '../components/Search'
import {Chip} from "@nextui-org/react";
import JobCard from '../components/JobCard';
import Logo from './../assets/CompanyLogo.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import {apiUrl} from './../api/api'

function OrganizationDashboard() {

  let [jobPostings, setJobPostings] = useState([]);

  useEffect(()=>{
    fetch(apiUrl+'/api/job-openings').then((response)=>{
      response.json().then(result => {
        let data = result.data.map((item) => {
          return item.attributes.companyId === '1' ? {
            id: item.id,
            name: item.attributes.jobTitle,
            deadline: item.attributes.deadline,
            description: item.attributes.jobDescription,
            selectedColleges: item.attributes.selectedCollegeIds,
          } : undefined
        })
        setJobPostings(data);
      })
    }).catch((err) =>{
      console.log(err);
    })
  }, [])

  return (
    <div>
      <div>
        <Search className="w-full"/>

        <div className='filters py-4 flex gap-2'>
        <Chip color="warning" variant="solid" className='text-white cursor-pointer'>New</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>A-Z</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Active</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Closed</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Draft</Chip>
        </div>

        <div className="gap-4 grid grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* <JobCard icon={Logo} name={"Front End Developer"} publishdate={"24/6/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Developer"} publishdate={"29/7/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Full Stack Developer"} publishdate={"29/6/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Intern"} publishdate={"14/9/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Intern"} publishdate={"14/7/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Software Engineer"} publishdate={"24/9/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Developer"} publishdate={"14/6/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Developer"} publishdate={"24/6/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Developer"} publishdate={"29/7/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Full Stack Developer"} publishdate={"29/6/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/> */}
            {
              jobPostings.map((item) => {
                return <JobCard icon={Logo} name={item.name} publishdate={item.deadline} status={"active"} description={item.description}/>
              })
            }
        </div>

      </div>
    </div>
  )
}

export default OrganizationDashboard