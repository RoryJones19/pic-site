import './Picture.css'

function Picture() {

    return (
        <div className="Image">
            <img src={require("./testpic.jpg")}></img>
        </div>
    )
}

export default Picture;