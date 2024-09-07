import Contact from "./components/Contact"
import Form from "./components/Form"
import customerService from "../public/Service 24.png";

function App() {

  return (
    <>
      <div className="flex items-end min-h-screen">
        <Contact/>
        <img src={customerService} className="absolute -bottom-5 right-10 object-cover hidden xl:block"/>
      </div>
    </>
  )
}

export default App
