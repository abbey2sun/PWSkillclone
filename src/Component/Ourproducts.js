import React from 'react'

const Ourproducts = () => {
    return (
        <>
            <div>
                <h2 className='text-center'>Our Products</h2>
                <div className='d-flex justify-content-around align-items-center py-5'>
                    <div className='align-items-center d-flex flex-column'>
                        <img src={require('./images/neurolab-icon.svg')} alt='hi' />
                        <h2>PW Skill Lab</h2>
                        <p className='text-secondary text-center fs-5'>Supercharge your project <br /> development with our robust lab.</p>
                    </div>
                    <div className='align-items-center d-flex flex-column'>
                        <img src={require('./images/jobPortal-icon.svg')} alt='hi' />
                        <h2 className=''>Job Portal</h2>
                        <p className='text-secondary text-center fs-5'>Use exceptional templates for a <br /> stand-out resume minus the sign up process.</p>
                    </div>
                    <div className='align-items-center d-flex flex-column' >
                        <img src={require('./images/Internship-icon.svg')} alt='hi' />
                        <h2>experience Portal</h2>
                        <p className='text-secondary text-center fs-5'>PW Skills's self-paced experience <br /> portal prioritises hands-on training with <br /> 570+ internship projects.</p>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center py-5'>
                    <div className='align-items-center d-flex flex-column'>
                        <img src={require('./images/affilitatePortal-icon.svg')} alt='hi' />
                        <h2>Became an affiliate</h2>
                        <p className='text-secondary text-center fs-5'>Explore affiliate marketing opportunities <br /> with PW Skills and attain financial freedom.</p>
                    </div>
                    <div className='align-items-center d-flex flex-column'>
                        <img src={require('./images/halloffame-icon.svg')} alt='hi' />
                        <h2 className=''>Hall of Fame</h2>
                        <p className='text-secondary text-center fs-5'>Our student placements and 100K+ career <br /> transitions speak volumes about our courses.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourproducts
