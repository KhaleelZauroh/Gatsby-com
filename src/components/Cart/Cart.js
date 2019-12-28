import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.mycourses.edges,
      mycourses: props.mycourses.edges,
    }
  }
  render() {
    // console.log(this.state.mycourses)
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="SHOP NOW!" />
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex my-3 mx-auto">
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">{node.title}</h5>
                      <h5 className="mb-0 text-success ml-3">
                        Rm{node.price}
                      </h5>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.div}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://learncodeonline.in/"
                      data-item-image={node.image.fixed.src}

                      className="btn btn-warning snip-cart-add-item"
                    >Buy Now</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
