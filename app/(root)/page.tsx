import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {
    const loggedIn = { FirstName :'akrem '};
  return (
   <section className='home'>

    <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.FirstName || "akrem jr "}
            subtext="Access and manage your account and transactions efficiently."
            
            />
        </header>
    </div>
   </section>
  )
}

export default Home