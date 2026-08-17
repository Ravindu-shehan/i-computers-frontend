import ProductCard from "./components/productCard"
import UserData from "./components/userData"

function App() {
  return(
    <>

    <UserData></UserData>
    <ProductCard
    name="MacBook"
    image="https://picsum.photos/200"
    Price="$899"
    
    />
    <ProductCard
     name="MacBook"
     image="https://picsum.photos/200"
     Price="$699"
    
    />


    </>
  )
}




export default App
