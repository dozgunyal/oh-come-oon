import * as React from "react"
import "fontsource-open-sans" // Defaults to weight 400 with all styles included.
import pageStyles from "./index.module.css"


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <section className={pageStyles.mainSection}>
        <div className={pageStyles.intro}>
          <p>I am hungry.</p>
          <p>I am tired.</p>
          <p>I am sad.</p>
        </div>
        <form action="/jokesonyou">
          <input type="text" name="name" class="question" id="name" required autocomplete="off" />
          <label for="name"><span>What about you?</span></label>
          <button className="input-wrapper">Submit!</button>
        </form>
      </section>
    </main>
  )
}

export default IndexPage
