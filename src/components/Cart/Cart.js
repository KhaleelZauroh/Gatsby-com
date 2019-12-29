import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

//categories logic
const getCaty = items => {
  let holdItems = items.map(items => {
    //refer contentful categories
    return items.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["all", ...categories]
  return categories
}

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.mycourses.edges,
      mycourses: props.mycourses.edges,
      mycategories: getCaty(props.mycourses.edges),
    }
  }

  catyClicked = category => {
    let keepItsafe = [...this.state.courses]

    if (category === 'all') {
      this.setState(() => {
        return { mycourses:keepItsafe}
        //save state
      })
    }
    else {
      let holdit = keepItsafe.filter(({node}) => node.category === category)
      this.setState(() => {
        return {mycourses : holdit}
      })
    }
  }
  render() {
    return (
      <section className="py-5">
        <div className="container ">
        <div className="text-center ">
          <Heading title="SHOP NOW!" />
          </div>
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => this.catyClicked(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">{node.title}</h5>
                      <h5 className="mb-0 text-success ml-3">Rm{node.price}</h5>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://khaleelgatsby-com.netlify.com/"
                      data-item-image={node.image.fixed.src}
                      className="btn btn-warning snipcart-add-item"
                    >
                      Buy Now
                    </button>
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
