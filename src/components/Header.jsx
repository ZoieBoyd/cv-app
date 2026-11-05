import downloadIcon from "../assets/icons/download.svg";

export default function Header() {
    return (
        <header>
            <h1 style={{ color: "var(--sky)" }}>
                <span style={{ color: "var(--blue)" }}>My</span>CV
            </h1>
            <button type="button">
                <img src={downloadIcon} />
                Download
            </button>
        </header>
    );
}
