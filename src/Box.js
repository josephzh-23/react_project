
import './Flexlayout.css';
const Box = () => {
    return (


        // How to Use the start 
        <div style={{ position: "relative" }}>
            <div className="c" style={{ textAlign: "center", margin: "20px" }}>Horizontal</div>
            <div className="container">
                <div className="item">Item 1</div>
                <div className="item">Item 2</div>
                <div className="item">Item 3</div>
            </div>

            <div className="c"
                style={{ textAlign: "center", margin: "60px 20px" }}>Vertical</div>
            <div className="vertical-container">
                <div className="item"
                    style={{ textAlign: "center", height: "40px" }}>Item 1</div>
                <div className="item"
                    style={{ textAlign: "center", height: "80px" }}>Item 2</div>
                <div className="item"
                    style={{ textAlign: "center", height: "120px" }}>Item 3</div>
            </div>

            // How to center sth 
            <div className="box-container">
                <div className="item"
                    style={{ textAlign: "center", height: "90px" }}>Item 1</div>
                <div className="item"
                    style={{ textAlign: "center", height: "80px" }}>Item 2</div>
                <div className="item"
                    style={{ textAlign: "center", height: "120px" }}>Item 3</div>
        // Main axis here
            </div>


        </div>


    )
}

export default Box