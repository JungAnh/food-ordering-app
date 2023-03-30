import { Banner } from "../../Component/Banner";
import { About } from "../../Component/About";
import { ProductsPreview } from "../../Component/ProductsPreview";

const Home = () => {
  return (
    <>
      <Banner />
      <ProductsPreview/>
      <About />
    </>
  )
}

export default Home;