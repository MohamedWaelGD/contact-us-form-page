import React from 'react'
import Header from './Header'
import Form from './Form'

const Contact = () => {
  return (
    <div className='container mx-auto px-8 py-5 md:py-0 md:px-20 flex flex-col gap-14'>
        <Header/>
        <Form/>
    </div>
  )
}

export default Contact