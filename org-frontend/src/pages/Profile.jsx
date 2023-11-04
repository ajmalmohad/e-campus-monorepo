import React from 'react'
import ProfileCard from '../components/ProfileCard'
import Search from './../components/Search'

function Profile() {
  return (
    <div>
      <Search className="w-full"/>
      <div className='pt-4'>
        <ProfileCard />
      </div>
    </div>
  )
}

export default Profile