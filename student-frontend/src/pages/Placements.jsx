import React from 'react'
import Search from '../../../org-frontend/src/components/Search'
import { Chip} from "@nextui-org/react";
import JobCard from '../components/JobCard';
import Logo from './../assets/CompanyLogo.jpg'

function Placements() {
  return (
    <div>
        <Search />

        <div className='filters py-4 flex gap-2'>
        <Chip color="warning" variant="solid" className='text-white cursor-pointer'>Open</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Applied</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Rejected</Chip>
        <Chip color="warning" variant="bordered" className='cursor-pointer'>Placed</Chip>
        </div>

        <div className="gap-4 grid grid-cols-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <JobCard icon={Logo} name={"Front End Developer"} publishdate={"24/6/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Developer"} publishdate={"29/7/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Full Stack Developer"} publishdate={"29/6/2023"} status={"active"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Intern"} publishdate={"14/9/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Intern"} publishdate={"14/7/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Software Engineer"} publishdate={"24/9/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Developer"} publishdate={"14/6/2023"} status={"draft"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Front End Developer"} publishdate={"24/6/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Back End Developer"} publishdate={"29/7/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
            <JobCard icon={Logo} name={"Full Stack Developer"} publishdate={"29/6/2023"} status={"closed"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas eros sed leo vehicula dictum. Morbi ullamcorper gravida ultrices. In hac habitasse platea dictumst. Morbi id finibus arcu. Nam metus erat, dictum sit amet ipsum eu, lacinia molestie sem. Phasellus ut quam vitae lectus maximus vehicula et a elit. Ut."}/>
        </div>
    </div>
  )
}

export default Placements