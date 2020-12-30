import * as React from "react"
import "fontsource-open-sans" // Defaults to weight 400 with all styles included.
import pageStyles from "./index.module.css"
import * as queryString from "query-string";



// markup
const IndexPage = ({ location }) => {
  const { name } = queryString.parse(location.search);
  const sanitizedName = (name || 'stranger').replace(/^I am/, '').replace(/[^a-zA-Z0-9 ]/g, '');

  return (
    <main>
      <title>Jokes On You Page</title>
      <section className={pageStyles.mainSection}>
        <div className={pageStyles.intro}>
          <p>Hi {sanitizedName}, I'm Dad.</p>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
