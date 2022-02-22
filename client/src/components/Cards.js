import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Cards = () => {
  return (
    <section className="cards  ">
      <div className="flex flex-col items-center my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0 card-border">
        <div className="lg:flex justify-center gap-x-14 bg-transparent ">
          <div className="h-full w-full object-cover">
        
          </div>

          <div className="lg:w-3/4 p-8 ">
            <h2 className="card-header inline-block ">
              <div class="mb-2 px-1">Applied Behaviour Analysis</div>
            </h2>
            <p class=" card-type">
              <ul>
                <li>
                  OCD and Autism Spectrum Disorder: Differential Diagnosis and
                  Effective{" "}
                </li>

                <li>
                  Intervention *1.5 BACB CEU Planning for Adulthood Through ABA
                  and Effective Education *4.5 BACB CEU
                </li>

                <li>
                  Putting Social Interaction at the Heart of Autism
                  Interventions *1.5 BACB CEU
                </li>
                <li>
                  {" "}
                  Putting the ABA in AAC Systems: Creating Effective
                  Augmentative Alternative Communication 6.0 BACB CEU
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0 card-border">
        <div className="lg:flex flex-row-reverse sm:flex-row-reverse justify-center gap-x-14 bg-transparent ">
          <div className="h-full w-full object-cover">
         
          </div>

          <div className="lg:w-3/4 p-8 ">
            <h2 className="card-header inline-block ">
              <div class="mb-2 px-1">Autism</div>
            </h2>
            <p class="card-type ">
              <ul>
                <li>10 Quick Tips for Residential Settings </li>

                <li>Autism Intervener Course</li>

                <li>Supporting Play-Based Learning for Kids with ASD </li>
                <li> Teaching Self-Advocacy Across the Lifespa</li>
                <li> Understanding and Supporting the Students with Autism</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col my-24 lg:my-40 mx-4 md:w-2/3 md:mx-auto lg:w-full lg:mx-0 card-border">
        <div className="lg:flex justify-center gap-x-14 bg-transparent ">
          <div className="h-full w-full object-cover">
        
          </div>

          <div className="lg:w-3/4 p-8 ">
            <h2 className="card-header inline-block ">
              <div class="mb-2 px-1">Mental Health</div>
            </h2>
            <p class="card-type ">
              <ul>
                <li>Behavior and Trauma: Autism’s Greatest Puzzle </li>

                <li> Confronting the Mental Health Crisis in the Classroom</li>

                <li>Exploring Mental Health of Autistic Students</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <section className="boxes ">
        <div className="container">
          <div className="criteria">
            <h2 className="mb-4 text-3xl lg:text-4xl m-auto">
              Eligibility Criteria
            </h2>

            <div className="line ">
              <div></div>
            </div>

            <div className="mt-6 mb-4 criteria">
              <p>
                {" "}
                All candidates must be registered with their respective
                college/oversight board, in good standing and currently
                authorized to practise in Ontario.{" "}
              </p>
              <p className="break-normal p-2"></p>
              <p className="note">
                {" "}
                *Please note that spots are limited and will expire at the end
                of the funding year*{" "}
              </p>
              <p className="break-normal p-2"></p>
              <button
                type="button"
                className=" bg-green text-white hover:text-green-300 border hover:border-green-300 border-thick hover:bg-white
                  hover: duration-500 focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:.border-green dark:text-green-500 dark:hover:text-white dark:hover:btn dark:focus:ring-green-300 dark:duration-500 duration-500"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Cards
