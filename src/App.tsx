import LandingPage from "@ui/landingPage/pages/LandingPage"
import LandingPageTemplate from "@ui/landingPage/templates/LandingPageTemplate"
import Login from "@ui/user/pages/Login"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<LandingPageTemplate />}>
            <Route path="" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
