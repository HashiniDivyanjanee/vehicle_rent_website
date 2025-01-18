import React from 'react'
import Back from "../common/back";
import img from "../images/cover/bg1.jpg";
import '../contact/contact.css'
const contact = () => {
  return (
    <>
    <section className='contact mb'>
        <Back name ='Contact Us' title='Get Helps & Friendly Support' cover={img}/>
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
    </section>
    </>
  )
}

export default contact