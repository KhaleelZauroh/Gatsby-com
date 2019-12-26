import React from 'react'
import Heading from "./Heading";
import {Link} from 'gatsby'


export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4 ">
            <div className="container text-center">
                <Heading title={heading} />
                <div className="row">
                    <div className=" col-10 col-sm8 mx-auto">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
                        </p>

                        <Link to="./about">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
