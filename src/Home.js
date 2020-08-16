import React from 'react';
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
            <img className = "home_image" src = "https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Aug20/IDay20/GW/GWD_Hero_v4_1x_v2._CB407197399_.jpg" alt ="banner" />
            <div className ="home_row"> 
                <Product 
                    id = "1234"
                    title = "Samsung 163 cm (65 Inches) Q Series 4K Ultra HD QLED Smart TV QA65Q8CNAK (Black) (2018 model)"
                    price = {259999}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/81piVC2laHL._AC_UY218_.jpg"
                />
                <Product 
                    id = "12387"
                    title = "Dell UltraSharp 49 Curved Monitor: U4919DW"
                    price = {198638}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/81ZXKUvoyuL._AC_UY218_.jpg"
                />
            </div>
            <div className ="home_row"> 
                <Product 
                    id = "83624"
                    title = "Apple iPhone 11 Pro Max (256GB) - Gold"
                    price = {120000}
                    rating = {2}
                    image = "https://m.media-amazon.com/images/I/611JavcU70L._AC_UY218_.jpg"
                />
                <Product 
                    id = "108234765"
                    title = "Microsoft Surface Pro 7 i7-1065G7, 16GB RAM, 1TB SSD, Tablet / Laptop Computer (Platinum)"
                    price = {235999}
                    rating = {3}
                    image = "https://m.media-amazon.com/images/I/71I3easuObL._AC_UY218_.jpg"
                />
                <Product 
                    id = "986"
                    title = "Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
                    price = {109999}
                    rating = {4}
                    image = "https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SX569_.jpg"
                />
            </div>
            <div className ="home_row"> 
                <Product 
                    id = "67328"
                    title = "Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                    price = {120000}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX569_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
