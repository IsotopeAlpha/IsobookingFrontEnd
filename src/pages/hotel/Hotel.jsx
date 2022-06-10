import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import pic from "../../images/vibe.jpg";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const photos = [{src:pic}, {src:pic}, {src:pic}, {src:pic}, {src:pic}, {src:pic}];

const Hotel = () =>{

    const [slideIndex, setSlideIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (i) =>{
        setSlideIndex(i)
        setOpen(true);
    }

    const handleMove = (direction) =>{
        let newSlideNumber;

        if(direction=="l"){
            newSlideNumber = slideIndex===0?5:slideIndex-1
        }else{
            newSlideNumber = slideIndex===5?0:slideIndex+1
        }

        setSlideIndex(newSlideNumber)
    }

    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open&&<div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideIndex].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
                    </div>}
                <div className="hotelWrapper">
                    <buttton className="bookNow">Reserve or Book Now!</buttton>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=> handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Stay in the heart of Accra</h1>
                            <p className="hotelDesc">
                            Attractively located in the Cantonments district of Accra, The Alima Suites is located 2.7 km from Labadi beach, 3.7 km from Independence Arch and 4.7 km from Kwame Nkrumah Memorial Park. Among the facilities of this property are a restaurant, a 24-hour front desk and room service, along with free WiFi. The hotel has family rooms.
                            The hotel will provide guests with air-conditioned rooms with a desk, an electric tea pot, a minibar, a safety deposit box, a flat-screen TV and a private bathroom with a shower. At The Alima Suites rooms have bed linen and towels.
                            The accommodation offers a continental or à la carte breakfast.
                            Dubois Centre for Panafrican Culture is a 15-minute walk from The Alima Suites, while Koala Shopping Center is 1.4 km from the property. The nearest airport is Kotoka International Airport, 3.1 km from the hotel.
                            Couples in particular like the location – they rated it 9.2 for a two-person trip.
                            The Alima Suites has been welcoming Booking.com guests since Aug 13, 2020
                            Distance in property description is calculated using © OpenStreetMa
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Kotaoka, this property has an excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now</button>
                        </div>
                    </div>
                </div>
            <MailList/>
            <Footer />
            </div>
        </div>
    )
}

export default Hotel;