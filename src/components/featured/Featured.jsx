import "./featured.css";
import pic from "../../images/vibe.jpg";

const Featured = () =>{
    return(
        <div className="featured">
            <div className="featuredItem">
                <img src={pic} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>533 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={pic} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Austin</h1>
                    <h2>530 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={pic} alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Reno</h1>
                    <h2>500 properties</h2>
                </div>
            </div>
        </div>
    );
}

export default Featured;