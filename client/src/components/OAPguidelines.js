import React from "react"

const OAPguidelines = () => {
  return (
    <section className="oap">
      <div className="container">
        <h1>
          <div>
            {" "}
            Following <div class="color-highlight inline">
              {" "}
              OAP guidelines
            </div>{" "}
            <div>these professions are eligible to apply</div>{" "}
          </div>{" "}
        </h1>

        <div className="line ">
          <div></div>
        </div>

        <div className="guidelines">
          <ul>
            <li className="card  inline-block border-green text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Board Certified Behaviour Analyst</p>
            </li>

            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent  ">
              <p>Speech-Language Pathologist</p>
            </li>

            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Occupational Therapist</p>
            </li>

            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Psycholologist </p>
            </li>

            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Registered Psychotherapist</p>
            </li>
            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Registered Social Worker</p>
            </li>
            <li className="card inline-block text-center px-5 py-3 lg:px-10 lg:py-4 rounded-tr-3xl rounded-bl-3xl bg-transparent ">
              <p>Psychological Associate</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OAPguidelines
