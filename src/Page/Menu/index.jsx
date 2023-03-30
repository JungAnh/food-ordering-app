import { useEffect, useState } from "react";
import ProductDetailCard from "../../Component/ProductDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import { Tabs } from "../../Component/Tabs";
import { addToCart } from "../../stores/cart/cartSlide";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const [activeTab, setActiveTab] = useState('');
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab);
    
    let categories = products.products.map((product) => product.name.name);
    let index = categories.findIndex(category => newActiveTab === category)
    if (index > -1){
      setActiveTabIndex(index);
    } else {
      setActiveTabIndex(0);
    }
  }

  return (
    <div className="bg-white">
      {
        products.status !== 'fulfilled' ?
          <div>Loading...</div> :
          <div className="menu-wrapper">

            {
              products.products &&
              <Tabs
                list={products.products.map((product) => product.name.name)}
                activeTab={activeTab}
                onTabSwitch={onTabSwitch}
              />
            }

            <div className="mx-3 flex flex-row">
              {
                products.products && products.products[activeTabIndex] && products.products[activeTabIndex].products.map((product, index) => {
                  return (
                    <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct}/>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Menu;