import CustomNavbar from "../components/CustomNavbar"
import "../assets/css/about.css"
const About=()=>{
    return(
        <div className="abo">
            <header>
                <CustomNavbar></CustomNavbar>
            </header>

      
        <div className="about">
            <h2>ABOUT US</h2>
            <p className="para">
            Welcome to GENISM Academy, where we are dedicated to fostering a holistic approach to well-being through the ancient practice of yoga. Our academy is founded on the principles of creating a nurturing space for individuals to embark on a transformative journey of self-discovery, physical wellness, and inner balance.

Our Mission:
At GENISM Academy, our mission is to make the profound benefits of yoga accessible to everyone. We believe that yoga is not just a physical practice but a lifestyle that promotes harmony of mind, body, and spirit. Our dedicated team of experienced instructors is committed to guiding our students towards a deeper understanding of themselves and the world around them.
            </p>
            <br/>
            <br/>
            <br/>
            <h2>OUR ACHIEVEMENTS</h2>
            <div>
                <div><p>GREAT MANAGER AWARDS 2022</p></div>
                <div>
                    <p>ECONOMIC TIMES
                       FUTURE RECOGNITION AWARD 20222
                    </p>
                </div>
                <div>
                    <p>
                        MOST INCLUSIVE COMPANIES INDEX
                    </p>
                </div>
                <div>
                    <p>
                        ET HUMAN CAPITAL AWARDS
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About;                                                       

