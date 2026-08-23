import { Navbar } from "./Components/Navbar"
import { NewsBoard } from "./Components/NewsBoard"
import { useState } from "react"

export const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="min-vh-100 bg-light">
      <Navbar
        category={category}
        setCategory={setCategory}
      />

      <main>
        <NewsBoard category={category} />
      </main>
    </div>
  )
}
