import React,{ useState } from "react";
import { send } from 'emailjs-com';

import about from './../../assets/img/about.jpg'

function ContactForm(){
    const [success,setSuccess] = useState(false);
    const [toSend, setToSend] = useState({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_message: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_j6o1h39',
          'template_h6ej4ed',
          toSend,
          'pALPa5p4l1Bno8Bs-'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setToSend({
                    [e.target.name]: "",
                  });
              }, 2000);
            
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          
      };
    
      const handleChange = (e) => {
        setToSend({
            ...toSend,
            [e.target.name]: e.target.value,
          });
      };


    return(
        <div className="flex lg:flex-row justify-center items-center mb-12 sm:flex-col md:flex-col" id="contactForm">
            <div className="w-8/12 h-full relative">
                <img src={about} alt="" className="w-full"/>
            </div>
            <div className="lg:w-4/12  flex flex-col justify-center md:w-8/12 sm:w-8/12">
                <div className="bg-[#d1a13b] p-12 h-[50%] relative lg:-left-[10em] sm:left-0 md:left-0">
                    <h3 className="text-center text-[40px] font-bold text-white uppercase mb-4">ENQUIRE NOW</h3>
                    {!success ?
                    <form onSubmit={onSubmit} >
                        <input type="text" placeholder="Name" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" name="user_name" value={toSend.user_name} onChange={handleChange}/>
                        <input type="email" placeholder="Email" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" name="user_email" value={toSend.user_email } onChange={handleChange} required/>
                        <input type="tel" placeholder="Phone" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" name="user_phone" value={toSend.user_phone} onChange={handleChange} required/>
                        <input type="textarea" placeholder="Message" className="outline-none text-[14px]  block mb-3 w-full h-12 border border-[#858585] p-[10px]" name="user_message" value={toSend.user_message} onChange={handleChange}/>
                        <input type="submit" value="SEND" className="bg-[#295b52] text-white font-medium text-[18px] px-[30px] py-[7px] cursor-pointer" />
                    </form>
                    : <div>
                        <p className="text-[#295b52] text-[16px] font-bold text-center">Thank you for submitting your response. We will get back to you soon</p>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ContactForm