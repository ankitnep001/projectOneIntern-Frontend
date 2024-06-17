import Hero from "@ui/landingPage/pages/Hero"
import LandingPageTemplate from "@ui/landingPage/templates/LandingPageTemplate"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPageTemplate />}>
            <Route path="" element={<Hero />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
