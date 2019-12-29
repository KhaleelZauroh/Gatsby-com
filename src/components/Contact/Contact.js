import React from 'react'
import Heading from '../Reusable/Heading'

export default function Contact() {
    return (
        <section className="py-3 ">
            <div className="col-10 col-sm-8 mx-auto text-center">
            <Heading title="Reach out to us"/>
                <form action="https://formspree.io/ibrahimzauroh@gmail.com" method="POST">
                    <div className="form-group">
                        <input 
                         type="text" 
                         name="name" 
                         id="name" 
                         placeholder ="Your Name"
                         className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                         type="text" 
                         name="email" 
                         id="email" 
                         placeholder ="Your Email"
                         className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                         type="text" 
                         name="number" 
                         id="number" 
                         placeholder ="Your Number"
                         className="form-control"
                        />
                        </div>

                    <div className="form-group">
                        <textarea 
                         type="text" 
                         name="description" 
                         id="description" 
                         placeholder ="Your Message"
                         className="form-control"
                        />
                    </div>
                    <button 
                       type="submit" 
                       className="btn btn-outline-info btn-block"
                       > 
                       SUBMIT
                       </button>
                </form>
            
            </div>

        </section>
    )
}
