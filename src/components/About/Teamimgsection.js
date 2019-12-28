import React from "react"
import Heading from "../Reusable/Heading";

export default function Teamimgsection({heading}) {
  return (
    <section className="bg-theme my-5 py-4 ">
      <div className="container text-center">
    <Heading title={heading} />
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
          <div class="card">
            <img
              src="https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/frida-kahlo-elena-day.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Frida khalo</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://render.fineartamerica.com/images/rendered/search/print/images-medium-5/self-portrait-balazs-solti.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Astronaut</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
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
            <div class="card-body">
              <h5 class="card-title">Trapped</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
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
