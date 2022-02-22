import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Showcase = () => {
  return (
    <section className="header grid ">
 

      <div className=" p-8">
        <h1> Autism & Mental Health Training for OAP Professionals</h1>
        <p>
          The Ministry of Children, Community and Social Services OAP Workforce
          Capacity Fund is addressing the increasing demand for clinicians
          working directly with families, particularly in northern, rural and
          remote communities, as well as for francophone and Indigenous
          families.
        </p>
        <p className="break-normal"></p>
        <p>
          SonderlyTM, the training division of Geneva Centre for Autism has been
          awarded a grant to build community capacity by providing Online
          Training to the following professionals who are currently, or eligible
          to become, OAP Service Providers.
        </p>
        <div className="pt-4">
          <button
            type="button"
            className=" bg-green text-white hover:text-green-300 border hover:border-green-300 border-thick hover:bg-white
                  hover: duration-500 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:.border-green dark:text-green-500 dark:hover:text-white dark:hover:btn dark:focus:ring-green-300 dark:duration-500 duration-500"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Showcase
