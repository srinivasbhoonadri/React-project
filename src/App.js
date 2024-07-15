import './App.css';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([

    {
      url: 'https://tse2.mm.bing.net/th?id=OIP.ppgxxxhF2iQqk2tWqKXqmgHaHa&pid=Api&P=0&h=180',
      name: 'MI NOTE 12 PRO MAX 12GB',
      category: 'Mobiles',
      seller: 'TKR Seller Ghz' ,   
      price: 20999
    },
    
    {
      url: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT0k4dlVhYmNUMncvNW0rMC96dVNWek10TGtFVmpvcXlwUTdtMHkyQ2w5Q3RGQzl6YWpnT25BaWFDeG82dTNBayt2MERSclg3b2lka1M0dklsTWJJdzlZdmZWbFI2Q3MvV0JNNTFoT2hzTEZnPQ==&traceId=1',
      name: 'i phone 15 pro',
      category: 'Mobiles',
      seller: 'TKR Seller Ghz' ,   
      price: 134900
    },
    
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.3T3N8FGpOE_aTOmOUJLAWwHaHa&pid=Api&P=0&h=180',
      name: 'REAL ME 11 PRO 12GB',
      category: 'Mobiles',
      seller: 'MNS Seller ',
      price: 23999
    },
    {
      url: 'https://tse2.mm.bing.net/th?id=OIP.EI3Brb2VR9phO5HhKABflAHaHa&pid=Api&P=0&h=180',
      name: 'IQOO NEO 9 PRO 12GB' ,
      category: 'Mobiles',
      seller: 'TDH Seller ',
      price: 35999
    },
   
    
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.3HBRyCyA4a90XB3TUj6ozQHaHa&pid=Api&P=0&h=180',
      name: 'DELL GAMING LAP I5 12GB/1TB',
      category: 'Laptops',
      seller: 'Mohan Ltd Seller ',
      price: 73999
    },
    
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.ho3WFcMdatQtfIbkffHzswHaHa&pid=Api&P=0&h=180',
      name: 'HP GAMING LAP I5 12GB/1TB',
      category: 'Laptops',
      seller: 'Ram Ltd Siyana',
      price: 62599
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.3HBRyCyA4a90XB3TUj6ozQHaHa&pid=Api&P=0&h=180',
      name: 'DELL 15 GAMING 8GB/512GB ',
      category: 'Laptops',
      seller: 'Delhi Laptops Ltd',
      price: 61999
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.z8FnZH-EdzeOPJLvW86V_QHaHa&pid=Api&P=0&h=180',
      name: 'BOAT SMART WATCH',
      category: 'Watches',
      seller: 'Nzb sellers',
      price: 3999
    },
    {
      url: 'https://tse2.mm.bing.net/th?id=OIP.6RjIleMR6JjDGl-yonyJzwHaHa&pid=Api&P=0&h=180',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Hyd Watch Ltd',
      price: 2099
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.Ep5Pg7CrpwgwUzE0tEBKlgHaHa&pid=Api&P=0&h=180',
      name: 'Cup red Color',
      category: 'Watches',
      seller: 'RS ABS Ltd',
      price: 1899
    },
    {
      url: 'https://tse3.mm.bing.net/th?id=OIP.0h9PYB64kCtKsZ2AVvDHDwHaHa&pid=Api&P=0&h=180',
      name: 'BOAT EARBUDS',
      category: 'Earbuds',
      seller: 'Nzb sellers',
      price: 3999
    },
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.sbT3AY2V7OyNpBayHjnI9gHaHa&pid=Api&P=0&h=180',
      name: 'NOISE EARBUDS',
      category: 'Earbuds',
      seller: 'Hyd Smart Ltd',
      price: 2099
    },
    {
      url: 'https://tse2.mm.bing.net/th?id=OIP.wqTpBKKTOt1mF9TeGTJDPgHaHa&pid=Api&P=0&h=180',
      name: 'PTRON EARBUDS',
      category: 'Earbuds',
      seller: 'RS  Ltd',
      price: 1899
    },
    {
      url: 'https://tse3.mm.bing.net/th?id=OIP.2bG2ST0YzIH7NLfCNA-N8AHaGI&pid=Api&P=0&h=180',
      name: 'STYLE MARTIN ATOM SHOES',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 12999
    },
    {
      url: 'https://sp.yimg.com/ib/th?id=OPAC.%2fcJyvofxtlDxtw474C474&o=5&pid=21.1&w=&h=',
      name: 'IXS-XSPORT SHOES',
      category: 'Shoes',
      seller: 'TKR Seller Ghz',
      price: 1999
    },
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.4ISQrt3QI6Eva0E1OcH7WQHaGw&pid=Api&P=0&h=180',
      name: 'IXS-XSPORT SHOES',
      category: 'Shoes',
      seller: 'TKR Seller Ghz',
      price: 3999
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.23PDSE_6iKWch4r9O8YybAHaHa&pid=Api&P=0&h=180',
      name: 'SOFA SETS',
      category: 'Sofa',
      seller: 'AMZ Seller Ghz',
      price: 13999
    },
    {
      url: 'https://tse1.mm.bing.net/th?id=OIP.kIJjHy7hX5EnFPkUv7PWigHaHa&pid=Api&P=0&h=180',
      name: 'SOFA SETS',
      category: 'Sofa',
      seller: 'Tkr Seller Ghz',
      price: 29999
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.Q_RLvXhriOcolcCDrWbdmwHaHa&pid=Api&P=0&h=180',
      name: 'SOFA SETS',
      category: 'Sofa',
      seller: 'Sofa Seller Ghz',
      price: 39999
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.E5GhpX9UCgyRZd8JR6LacQHaG4&pid=Api&P=0&h=180',
      name: 'LG COLOUR TV',
      category: 'TV',
      seller: 'NKM Seller Ltd',
      price: 12999
    },
    {
      url: 'https://tse3.mm.bing.net/th?id=OIP.jX7ATo5i-6FJxn2okYecDgHaHa&pid=Api&P=0&h=180',
      name: 'HISENSE COLOUR TV',
      category: 'TV',
      seller: 'TKR Seller Ltd',
      price: 25999
    },
    {
      url: 'https://tse4.mm.bing.net/th?id=OIP.E5GhpX9UCgyRZd8JR6LacQHaG4&pid=Api&P=0&h=180',
      name: 'LG COLOUR TV',
      category: 'TV',
      seller: 'MKM Seller Ltd',
      price: 33999
    },
    {
      url: 'https://sp.yimg.com/ib/th?id=OPAC.%2fXh2TkqQ0GE7Cg474C474&o=5&pid=21.1&w=&h=',
      name: 'STYLE MARTIN ATOM SHOES',
      category: 'Cloths',
      seller: 'JYT Seller Ghz',
      price: 2999
    },
    {
      url: 'https://sp.yimg.com/ib/th?id=OPAC.%2boHEgBfUB5Yvsg474C474&o=5&pid=21.1&w=&h=',
      name: 'IXS-XSPORT SHOES',
      category: 'Cloths',
      seller: 'UNO Seller Ghz',
      price: 1999
    },
    {
      url: 'https://sp.yimg.com/ib/th?id=OPAC.QdgTrV8mfJP8%2bw474C474&o=5&pid=21.1&w=&h=',
      name: 'IXS-XSPORT SHOES',
      category: 'Cloths',
      seller: 'TKR Seller Ghz',
      price: 999
    },
    {
      url: 'https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/1/_/1_22_1.jpg.mst.webp',
      name: 'CEAT CRICKET BAT',
      category: 'sports',
      seller: 'Sr sports stote',
      price: 6590
    },
    {
      url: 'https://m.media-amazon.com/images/I/317VTY6RngL._AC_UF894,1000_QL80_.jpg',
      name: 'MRF CRICKET BAT',
      category: 'sports',
      seller: 'Sr sports stote',
      price: 6999
    },
    {
      url: 'https://www.khelmart.com/pub/media/catalog/product/cache/712b931dac1b924a11d1b7282ad89910/1/_/1_171.jpg.mst.webp',
      name: 'SG CLUB CRICKET BALL',
      category: 'sports',
      seller: 'Sr sports stote',
      price: 1999
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoond5gdh1cQf5gsXq08cbtP0achoVwjqAUQ&s',
      name: ' FOOT BALL',
      category: 'sports',
      seller: 'Sr sports stote',
      price: 1599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfspla7e00QTR1P1RzjTgQq-FznEujikH6Gw&s',
      name: ' HOCKEY STICK',
      category: 'sports',
      seller: 'Sr sports stote',
      price: 1599
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;