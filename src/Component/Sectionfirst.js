import React from 'react'


const Sectionfirst = () => {
    return (
        <>
            <div className='my-5'>
                <div className='my-5'>
                    <h1 className='text-primary fs-1 text-center'>"Pure Hardwork, No Shortcuts"</h1>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                    <div className='align-items-center d-flex flex-column'>
                        <img className='w-100' src={require('./images/books-icon.svg')} alt='hi' />
                        <h2>600+</h2>
                        <p className='text-secondary fw-bold fs-5'>Different Courses</p>
                    </div>
                    <div className='align-items-center d-flex flex-column'>
                        <img className='w-100' src={require('./images/student-icon.svg')} alt='hi' />
                        <h2 className=''>700,000</h2>
                        <p className='text-secondary fw-bold fs-5'>Students Enrolled</p>
                    </div>
                    <div className='align-items-center d-flex flex-column' >
                        <img className='w-100' src={require('./images/credit-card-icon.svg')} alt='hi' />
                        <h2>10,000+</h2>
                        <p className='text-secondary fw-bold fs-5'>Successful Transaction</p>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Sectionfirst



