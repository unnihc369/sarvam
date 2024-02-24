import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState("");

  
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');

    try {
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } else {
        navigate('/login'); // Redirect if no user data found
      }
    } catch (error) {
      console.error('Error parsing stored user data:', error);
      localStorage.removeItem('currentUser');
      navigate('/');
    }
  }, []);


  return (
    <>
      <nav className="nav" id="navbar">
        <div className="logo">
          <img src="assets/SarvamLogo.png" alt="Logo" />
        </div>
        <div className="navi">
          <Link to="/">Home</Link>
          <a href="#">Services</a> 
          <Link to='/about'>About Us</Link>
        </div>
        <div className="button-container">
          <button>Sign Up</button>
          <Link to='/login'><button>Log in</button></Link>
        </div>
      </nav>

    <section className="hero">
      <div className="descript">
        <h1 className="h_heading">We are <span className="brand">SARVAM</span></h1>
        <div id="bt_hero">
          <div>
            <button className="shrink-border" id="lm">Learn More</button>
            <button className="shrink-border">Join us</button>
          </div>
        </div>
      </div>
    </section>

    <section className="mission">
      <div className="goal">
        <h2>Our Mission</h2>
        <p className="stat_y">Are you passionate about making a difference? Sarvam invites you to be part of our mission to create a better world. Whether you’re an event organizer, an agricultural expert, or simply someone who cares deeply about the future of our planet and its people, there’s a meaningful place for you in our community. Join us in fostering positive change and building a brighter tomorrow together</p>
      </div>
    </section>

  <section className="sec_y" id="donation">
      <div className="donate">
        <h1 className="vol_slogan2">Attention party hosts and event organizers!</h1>
        <img src="" alt="image for donating" className="image" />
        <div className="text">
          <p>Don't let excess food go to waste. Do you ever have leftover food after a gathering? Instead of letting it go to waste, turn it into hope for someone in need. Donate your surplus food to Sarvam, and help us ensure no one goes to bed hungry. Join us in supporting Sarvam by donating surplus food. Together, we can combat hunger and ensure no one goes to bed hungry. Together, we can create a community where everyone has access to nourishing food. Let's fight hunger, one delicious bite at a time!</p>
        </div>
        <form>
          <a href="https://donate.stripe.com/test_4gw9CZdEgc0r3FmeUU">
          <button type="button" className="shrink-border">
            Donate
          </button>
          </a>
        </form>
      </div>
    </section>

    <div className="container">
      <h1 className="vol_slogan">Join hands, Change lives: Volunteer for compassion, care, and cultivation!</h1>
      <div id="card-area">
        <div className="wrapper">
          <div className="box-area">
            <div className="box">
              <img src="assets/volunteer.jpeg" className="img-fluid" alt="volunteering doctor" />
              <div className="overlay">
                <h3>Focus on medical professionals!</h3>
                <p>Your expertise is needed to bring healthcare to remote areas. Join our Sarvam to provide medical assistance where it is most needed. Your experience can save lives and have a lasting impact. Contact us to volunteer and be part of this important mission!</p>
                <button type="button" className="btn btn-outline-light">Join Now</button>
              </div>
            </div>
            <div className="box" id="sec2">
              <img src="assets/agri_vol.jpeg" className="img-fluid" alt="general volunteers" />
              <div className="overlay">
                <h3>Cultivating Change in Agriculture</h3>
                <p>Agricultural experts take note! Your expertise is invaluable to farmers in need. Volunteer with us to provide discussion sessions on agricultural practices and decision-making. Together we empower farmers for sustainable production and development. Join us to make a positive impact on agriculture. Contact us today to volunteer!</p>
                <button type="button" className="btn btn-outline-light">Join Now</button>
              </div>
            </div>
            <div className="box">
              <img src="assets/volunteer3.jpg" className="img-fluid" alt="volunteering agri experts" />
              <div className="overlay">
                <h3>Be the Change</h3>
                <p>Calling all volunteers! Help us reach those in need by identifying individuals who require food assistance. Join Sarvam in posting information about those in need, and together, let's ensure surplus food reaches hungry mouths. Your efforts can make a meaningful difference. Contact us to volunteer and support our mission!</p>
                <button type="button" className="btn btn-outline-light">Join Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="sec_y" id="community">
      <div className="com_call">
        <h1>Join our farmer community: Collaborate, Connect, and Thrive together!</h1>
        <p className="info">Farmers, unite! Are you prepared to advance your agricultural endeavors? Come be a part of our dynamic farming community where success is largely determined by cooperation, sharing of resources, and knowledge. By working together, we can take advantage of contemporary technological services and products to increase yields, optimize resources, and improve productivity. Through establishing relationships with local farmers and creating a strong community, we can overcome obstacles, share ideas, and clear the path for a successful future in agriculture. Come along with us as we pool our resources, plant the seeds of creativity, and build a prosperous farming community that will last for many years.</p>
        <div id="farm_bt">
          <Link to='/farm'><button className="shrink-border">Learn More</button></Link>
        </div>
      </div>
    </section>


    </>
  )
}

export default Home;
