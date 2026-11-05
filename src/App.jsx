import { useState } from "react";
import "./App.css";
import Experience from "./components/Experience";
import General from "./components/General";
import Education from "./components/Education";
import { CV } from "./components/CV";
import Header from "./components/Header";
import previousIcon from "./assets/icons/previous.svg";
import nextIcon from "./assets/icons/next.svg";

const pages = [General, Education, Experience];

export default function App() {
    const [index, setIndex] = useState(0);
    const CurrentPage = pages[index];
    const nextPage = () => setIndex(index + 1);
    const prevPage = () => setIndex(index - 1);

    const [data, setData] = useState({
        firstName: "John",
        surname: "Doe",
        mobile: "07123456789",
        email: "j.doe@mail.com",
        linkedinUrl: "https://www.linkedin.com/",
        experience: [],
        education: [],
    });

    return (
        <>
            <div className="left-panel">
                <Header />
                {index > 0 && (
                    <button type="button" onClick={prevPage} className="img-btn prev-btn">
                        <img src={previousIcon} />
                    </button>
                )}
                <div className="form-content">
                    <CurrentPage data={data} setData={setData} />
                </div>
                {index < pages.length - 1 && (
                    <button type="button" onClick={nextPage} className="img-btn next-btn">
                        <img src={nextIcon} />
                    </button>
                )}
            </div>
            <div className="right-panel">
                <CV data={data} />
            </div>
        </>
    );
}
