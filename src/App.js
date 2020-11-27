// Libraries
import React from "react"
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom"

// Components
import ScrollToTop from "./components/ScrollToTop"

// Scss
import "./sass/style.scss"

// Other
import Routes from "./routes"

function App() {
  return (
    <BrowserRouter>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Routes />
        </div>
      </Router>
    </BrowserRouter>
  )
}

export default App
