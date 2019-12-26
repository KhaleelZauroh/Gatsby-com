import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function Section({img, title, subtitle, section}) {
    return (
        <BackgroundImage
             className={section}
             fluid={img}
             >
             <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
             <div>
                 <h4 className="text-warning">{subtitle}</h4>
             </div>
            


        </BackgroundImage>
    )
}
