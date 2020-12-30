import * as React from "react"
import {Helmet} from 'react-helmet'

import "fontsource-open-sans" // Defaults to weight 400 with all styles included.
import pageStyles from "./index.module.css"


// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
         <title>Home Page</title>
      </Helmet>
     
      <section className={pageStyles.mainSection}>
        <div className={pageStyles.intro}>
          <h2>I am hungry.</h2>
          <h2>I am tired.</h2>
          <h2>I am sad.</h2>
        </div>
        <form action="/jokesonyou">
          <input type="text" name="name" className="question" id="name" required autoComplete="off" />
          <label htmlFor="name"><span>What about you?</span></label>
          <button className="input-wrapper">Submit!</button>
        </form>
      </section>
    </main>
  )
}

export default IndexPage
