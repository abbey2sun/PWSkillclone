import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='my-4'>
                <div className='d-flex justify-content-around my-3'>
                    <div><img style={{ width: 100 }} src={require('./images/PWSkills-main.png')} alt='hi' /></div>
                    <input placeholder='What do you want to learn' style={{ width: 600 }} type='text' />
                    <button style={{ width: 200 }} className='bg-primary text-light border-0 rounded '>Login/Register</button>
                </div>
                <div className='my-3 d-flex justify-content-around'>
                    <div className='fw-bold'>Courses</div>
                    <div className='fw-bold'>Job Portal</div>
                    <div className='fw-bold'>PW Skill lab</div>
                    <div className='fw-bold'>experience Portal</div>
                    <div className='fw-bold'>Became an affiliate</div>
                    <div className='fw-bold'>Hall of Fame</div>
                    <div className='fw-bold'>more</div>
                </div>
            </nav>
        </>
    );
}

export default Navbar
