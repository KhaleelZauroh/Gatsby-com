import React from "react"
import Heading from "../Reusable/Heading";

export default function Teamimgsection({heading}) {
  return (
    <section className="bg-theme my-5 py-4 ">
      <div className="container text-center">
    <Heading title={heading} />
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div className="card-group">
          <div className="card">
            <img
              src="https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/frida-kahlo-elena-day.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Frida khalo</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/self-portrait-balazs-solti.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Astronaut</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://render.fineartamerica.com/images/rendered/search/print/images/artworkimages/medium/2/trapped-johan-swanepoel.jpg"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Trapped</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  )
}
