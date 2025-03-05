import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home.jsx"
import AddItems from "./routes/AddItems.jsx"
import Items from "./routes/Items.jsx"
import Checkout from "./routes/Checkout.jsx"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<AddItems />} />
        <Route path='/items' element={<Items />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
