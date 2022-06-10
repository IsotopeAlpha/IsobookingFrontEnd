import "./propertyList.css";
import pic from "../../images/vibe.jpg"

const PropertyList = () =>{
    return(
        <div className="pList">
            <div className="pListItem">
                <img src={pic} alt=""  className="pListImg"/>
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={pic} alt=""  className="pListImg"/>
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={pic} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>2335 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={pic} alt="" className="pListImg"/>
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2225 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={pic} alt=""  className="pListImg"/>
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2320 hotels</h2>
                </div>
            </div>
        </div>
    );
}

export default PropertyList;