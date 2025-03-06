
import "../Pages_css/contactus.css";
export default function Contactus() {
    return (
        <div className="container1">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">Rajendrapur,Naihati,743166</div>
                        <div className="text-two">Near Blind school , Beside kalyani Highway</div>
                        <div className="text-two"><a href="https://maps.app.goo.gl/3ozy5TBkfuaZxZWc6">Google map Location</a></div>
                    </div>
                    <div className="phone details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        {/* <div className="text-one">XXXXX84934</div> */}
                        <div className="text-two" ><a href="tel:+919433237184" target="_self" style={{ cursor: "pointer" }}>9433237184</a></div>
                    </div>
                    <div className="email details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-two"><a href="mailto:987anupkrghosh@gmail.com" target="_self">987anupkrghosh@gmail.com</a></div>
                        <div className="text-two"></div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you have any types of quries can send us message from here.</p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="input-box message-box">
                            <input type="text" placeholder="Enter your massege" />
                        </div>



                        <div className="button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}