export const colors = [
    "#ff6663",
    "#feb144",
    "#ffde53",
    "#9ee09e",
    "#9ec1cf",
    "#cc99c9",
];

export const WigglyText = (props) => {
    const changeCharColor = () => {
        const idx = Math.floor(Math.random() * colors.length);
        document.querySelector(".wiggly-text").style.setProperty("--char-color", colors[idx])
    }

    return (
        <div className="wiggly-text">
            {props.text.split("").map((letter, idx) => (
                <span
                    key={idx}
                    className={letter === " " ? "indent" : "wiggly-char"}
                    onMouseEnter={() => changeCharColor()}
                >
                    {letter}
                </span>
            ))}
        </div>
    )
}