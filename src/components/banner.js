import '../style/banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-bgm">
                <div>
                    <h6>Fruit Fresh</h6>
                    <h1>Orange Lemon</h1>
                    <h3>$14.00/Package</h3>
                    <button className="banner-btns">Shop Now</button>
                </div>
                <div >
                    <img className="banner-img" src="https://ogami-react.vercel.app/assets/images/hero-slider/one/1.png"></img>
                </div>
            </div>
            <div className="banner-details">
                <img className="banner-detailss" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/1.png"></img>
                <img className="banner-detailss" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/2.png"></img>
                <img className="banner-detailss" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/3.png"></img>
            </div>
            <div>
                <h1 className="banner-featured">
                    Featured Product
                </h1>
            </div>
        </div>
    );
}

export default Banner;