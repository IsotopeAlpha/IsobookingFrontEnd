import './searchItem.css';
import pic from '../../images/vibe.jpg';
import { useNavigate } from 'react-router-dom';

const SearchItem = () =>{
    const navigate = useNavigate();
    const handleAvailability = () =>{
        navigate("/hotel");
    }
    return(
        <div className='searchItem'>
            <img src={pic} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio * 1 bathroom * 21m 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$213</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton" onClick={handleAvailability}>See avialability</button>
                </div>
            </div>
        </div>
    );
}

export default SearchItem;