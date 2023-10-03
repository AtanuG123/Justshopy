import React, { useState } from 'react'
import "./filter.css";
import { useNavigate } from 'react-router-dom';
const Filter = () => {
    const navigate= useNavigate();
    const [state, setstate] = useState(false);
    const showfilter = () => {
        setstate(!state);
        if (state === false) {
            document.getElementById("filter").style.display = "flex";
        }
        else {
            document.getElementById("filter").style.display = "none";

        }
    }
    const filternow=(e)=>{
        navigate('/productlist/'+e);
    }
    return (
        <>
            <button className='filterbtn' id='filterbtn' onClick={showfilter}>Apply Filter</button>
            <div className="filter" id='filter'>
                <h3>Filter</h3>

                <div className='filter_size'>
                    <h5>Catagory</h5>
                    <hr></hr>
                    <div>
                        <div>
                            <a href='/productlist/man'>Man</a>
                            <a href='/productlist/hoodie'>Hoodie</a>
                            <a href='/productlist/blazer'>Blazer</a>
                            <a href='/productlist/tshirt'>Tshirt</a>
                            <a href='/productlist/jeans'>Jeans</a>
                        </div>
                        <div>
                            <a href='/productlist/style'>Style</a>
                            <a href='/productlist/watch'>Watch</a>
                            <a href='/productlist/sunglass'>Sunglass</a>
                            <a href='/productlist/helmet'>helmet</a>
                            <a href='/productlist/branded'>Premium</a>
                            
                        </div>
                        <div>
                            <a href='/productlist/woman'>Woman</a>
                            <a href='/productlist/kurta'>Kurta</a>
                            <a href='/productlist/shoes'>Shoes</a>
                            <a href='/productlist/helmet'>Helmet</a>
                        </div>
                    </div>
                </div>
                <div className='filter_size'>
                    <hr></hr>
                    <h5>size</h5>
                    <div>
                        <div>
                            <a href='/productlist/s'>S</a>
                            <a href='/productlist/l'>L</a>
                            <a href='/productlist/m'>M</a>
                            <a href='/productlist/xl'>XL</a>
                            <a href='/productlist/xxl'>XXL</a>
                            <a href='/productlist/xxxl'>XXXL</a>
                        </div>
                        <div>
                            <a href='/productlist/34'>34</a>
                            <a href='/productlist/36'>36</a>
                            <a href='/productlist/38'>38</a>
                            <a href='/productlist/40'>40</a>
                            <a href='/productlist/42'>42</a>
                            <a href='/productlist/44'>44</a>

                        </div>
                        <div>
                            <a href='/productlist/6'>6</a>
                            <a href='/productlist/7'>7</a>
                            <a href='/productlist/8'>8</a>
                            <a href='/productlist/9'>9</a>
                            <a href='/productlist/10'>10</a>
                            <a href='/productlist/free size'>Free</a>
                        </div>
                    </div>
                </div>
                <div>
                    <hr></hr>
                    <h5>Price</h5>
                    <a href='/productlist/500'>upto 500</a>
                    <a href='/productlist/1000'>upto 1000</a>
                    <a href='/productlist/1500'>upto 1500</a>
                    <a href='/allproduct'>All price</a>
                </div>
                <div>
                    <hr></hr>
                    <h5>Discount</h5>
                    <a href='/productlist/50'>upto 50%</a>
                    <a href='/productlist/60'>50%-60%</a>
                    <a href='/productlist/70'>60%-70%</a>
                    <a href='/productlist/80'>70%-80%</a>
                    <a href='/productlist/81' >More than 80%</a>
                </div>

            </div>
        </>
    )
}

export default Filter