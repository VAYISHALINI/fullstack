import CustomNavbar from "../components/CustomNavbar"
// import CustomSideNav from "../components/CustomSideNav"
import "../assets/css/home.css"
import gen from "../assets/images/gen1.png"
import hatha from "../assets/images//hatha4.jpg"
import vin from "../assets/images/vin1.jpg";
import ash from "../assets/images/ash2.webp";
import { Link } from "react-router-dom";
import ins1 from "../assets/images/ins1.jpeg"
import ins2 from "../assets/images/ins2.jpg"
import ins3 from "../assets/images/ins3.jpg"


// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home=()=>{
 
 

    return(
        <div className="container">
            <header>
                <CustomNavbar></CustomNavbar>
                {/* <CustomSideNav></CustomSideNav> */}
                <div className="bg">
                </div>   
                <div className="gen" >
                    <img src={gen}/>
                </div>
                <h1>
                        <pre className="quo">
                  
                            Yoga is the journey <br/>of the self ,<br/>
                              to the self ,<br/>
                                 through the self !!! 
                   
                
                        </pre>
                        </h1>
            </header>
            <h2 className="cou">Courses</h2>
            {/* <section className="home-cards">
  <div className="car1">
    <img src="https://i.ibb.co/LZPVKq9/card1.png" alt="" />
    <h3>New Surface Pro 7</h3>
    <p>
      See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put
      her plans into play.
    </p>
    <a href="#">
      Learn More <i className="fas fa-chevron-right" />
    </a>
  </div>
  <div className="car2">
    <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
    <h3>New Surface Laptop 3</h3>
    <p>
      Express yourself powerfully with a thin, light, and elegant design, faster
      performance, and up to 11.5 hours battery life.
    </p>
    <a href="#">
      Learn More <i className="fas fa-chevron-right" />
    </a>
  </div>
  <div className="car3">
    <img src="https://i.ibb.co/2cnshH6/card3.png" alt="" />
    <h3>Save $150 + free controller</h3>
    <p>
      Buy an Xbox One X console and double your fun with a free select extra
      controller. Starting at $349.
    </p>
    <a href="#">
      Learn More <i className="fas fa-chevron-right" />
    </a>
  </div>
  
</section> */}
 <div className="btn"  style={{marginTop:"-80px"}} >
    <a href="#" className="icon-link">
      <Link to='/courses' style={{textDecoration:"none"}}>
      Explore more courses
      </Link>
      <svg
        fill="none"
        className="rubicons arrow-right-up"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
        <path
          d="M5.9645 17.9645l12-12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
<div className="card1">
 
  <img
    className="card-img"
    src={hatha}
    alt="product-image"
  />
  <div className="flex-row space-between w-full mb-sm">
    <p className="product">Hatha Yoga</p>
    <p>A gentle and foundational practice that involves basic postures and breath control. 
        Its a good starting point for beginners.</p>
  </div>
  <div className="btn-col">
    <a href="#" className="icon-link">
    <Link to={'/admission'}> Enroll Now</Link>
      <svg
        fill="none"
        className="rubicons arrow-right-up"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
        <path
          d="M5.9645 17.9645l12-12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
</div>

<div className="card2">
 
  <img
    className="card-img"
    src={vin}
    alt="product-image"
  />
  <div className="flex-row space-between w-full mb-sm">
    <p className="product">Vinyasa Yoga</p>
    <p> A dynamic and flowing style where movements are synchronized with the breath. 
        Its often referred to as flow yoga.</p>
  </div>
  <div className="btn-col">
    <a href="#" className="icon-link">
      Enroll Now
      <svg
        fill="none"
        className="rubicons arrow-right-up"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
        <path
          d="M5.9645 17.9645l12-12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
</div>
<div className="card3">
 
  <img
    className="card-img"
    src={ash}
    alt="product-image"
  />
  <div className="flex-row space-between w-full mb-sm">
    <p className="product">Ashtanga Yoga</p>
    <p>A rigorous and physically demanding practice that follows a specific sequence of postures.
         Its known for its focus on strength, flexibility, and endurance.</p>
  </div>
  <div className="btn-col">
    <a href="#" className="icon-link">
      Enroll Now
      <svg
        fill="none"
        className="rubicons arrow-right-up"
        xmlns="http://www.w3.org/2000/svg"
        width="auto"
        height="auto"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path d="M17.9645 12.9645l.071-7h-7.071" strokeLinecap="round" />
        <path
          d="M5.9645 17.9645l12-12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </div>
</div>

<>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
  <br/><br/>
 <h1>Famous Institutions</h1>
  <div className="cards">
    <div className="cardi">
      <h4 className="card-title">Tranquil Asana Academy</h4>
      <img
        src={ins1}
        alt=""
      />
      <p className="card-desc">
      Tranquil Asana Academy is an institution of higher education that offers 
      a wide range of academic programs and degrees. It is characterized by its 
      commitment to research, teaching, and the development of critical thinking skills. 
    
      </p>
    </div>
    <div className="cardi">
      <h4 className="card-title">Zen Harmony Yoga Institute</h4>
      <img
        src={ins2}
        alt=""
      />
      <p className="card-desc">
      At Zen Harmony Yoga Institute, students engage in a diverse range of courses, 
      gaining both theoretical knowledge and practical skills. Research is a fundamental 
      aspect of the institutes life, 
      with faculty members and students contributing to advancements in knowledge and innovation. 
      </p>
    </div>
    <div className="cardi">
      <h4 className="card-title">Pure Presence Yoga School</h4>
      <img
        src={ins3}
        alt=""
      />
      <p className="card-desc">
      Pure Presence Yoga School plays a crucial role in preparing students for 
      professional careers, encouraging personal growth, and promoting a lifelong
       love of learning. It is an important contributor to societal development,
        producing skilled graduates, conducting groundbreaking research,
       and serving as a cultural and intellectual center within its community.
      </p>
    </div>
  </div>
</>

<>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <footer className="footer_area section_padding_130_0">
    <div className="container">
      <div className="row">
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="single-footer-widget section_padding_0_130">
            {/* Footer Logo*/}
            <div className="footer-logo mb-3" />
            
            {/* Copywrite Text*/}
            <div className="copywrite-text mb-5" style={{marginLeft:"630px",marginBottom:"50px"}}>
              <p className="mb-0">
                Made with <i className="lni-heart mr-1" />
                by
                <a
                  className="ml-1"
                  href="https://wrapbootstrap.com/user/DesigningWorld"
                >
                  Genism
                </a>
              </p>
            </div>
            {/* Footer Social Area*/}
            <div className="footer_social_area" style={{marginLeft:"600px",marginBottom:"70px"}}>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook" style={{color:"white"}}/>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Linkedin"
              >
                <i className="fa fa-linkedin" style={{color:"white"}}/>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Instagram"
                style={{backgroundColor:"rgb(138, 109, 160)"}}
              >
                <i className="fa fa-instagram" style={{color:"white"}}/>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                style={{backgroundColor:"rgb(138, 109, 160)"}}
                data-original-title="Twitter"
              >
                <i className="fa fa-twitter" style={{color:"white"}} />
              </a>
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg" style={{marginLeft:"200px",marginBottom:"-200px"}}>
          <div className="single-footer-widget section_padding_0_130">
            {/* Widget Title*/}
            <h5 className="widget-title">About</h5>
            {/* Footer Menu*/}
            <div className="footer_menu" >
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Corporate Sale</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Policy</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg"style={{marginLeft:"700px",marginBottom:"-200px"}}>
          <div className="single-footer-widget section_padding_0_130" >
            {/* Widget Title*/}
            <h5 className="widget-title" >Support</h5>
            {/* Footer Menu*/}
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Help &amp; Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Single Widget*/}
        <div className="col-12 col-sm-6 col-lg" style={{marginLeft:"1100px",marginTop:"-220px"}}>
          <div className="single-footer-widget section_padding_0_130">
            {/* Widget Title*/}
            <h5 className="widget-title">Contact</h5>
            {/* Footer Menu*/}
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Call Centre</a>
                </li>
                <li>
                  <a href="#">Email Us</a>
                </li>
                <li>
                  <a href="#">Term &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

           
        </div>
    )
}
export default Home;