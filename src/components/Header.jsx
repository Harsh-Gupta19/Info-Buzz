import Dropdown from "./UI/Dropdown";
import { dropDownData } from "../utils/data";
import ArticleContext from "../store/ArticleContext";
import { useContext, useState } from "react";

/**
 * Header Component
 * 
 * Component responsible for displaying the header section with a dropdown for selecting time duration.
 * Header component containing the title, dropdown, and sub-header.
 */

const Header = () => {

    const [timeline, setTimeline] = useState('Trending')
    const articleCtx = useContext(ArticleContext);
    const handleDropDownChange = (event) => {
        articleCtx.changeDuration(event.target.value);
        fetchSubHeader(event.target.value);
    }
    const fetchSubHeader = (val) => {
        let duration = dropDownData.find((item)=> item.id === val);
        setTimeline(duration.value);
    }

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <h1>New York Times</h1>
                </div>
                <div className="control">
                    <Dropdown id="duration"
                        name="duration"
                        data={dropDownData}
                        onChange={handleDropDownChange}
                    />
                </div>
            </header>
            <div className="sub-header">
                <h2>{timeline}</h2>
                <hr className="span-line" />
            </div>
        </>
    )
}

export default Header;