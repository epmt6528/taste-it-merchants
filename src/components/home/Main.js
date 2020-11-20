// Libraries
import React, { Component } from "react";
import Parallax from 'react-rellax';
import { Link } from 'react-router-dom'

// Components
import TeamCard from "./TeamCard";

// Images
import  Banner  from "../../img/main/banner.jpg";
import  BannerWebP  from "../../img/main/banner.jpg.webp";
import  Pancake  from "../../img/main/pancake.png";
import  PancakeWebP  from "../../img/main/pancake.png.webp";
import  Lobster  from "../../img/main/lobster.png";
import  LobsterWebP  from "../../img/main/lobster.png.webp";
import  Heart  from "../../img/main/heart.png";
import  HeartWebP  from "../../img/main/heart.png.webp";
import  Champagne  from "../../img/main/champagne.png";
import  ChampagneWebP  from "../../img/main/champagne.png.webp";
import  Mouse  from "../../img/main/mouse.png";
import  MouseWebP  from "../../img/main/mouse.png.webp";
import  TomatoSoup  from "../../img/main/tomatoSoup.png";
import  TomatoSoupWebP  from "../../img/main/tomatoSoup.png.webp";
import  Sushi  from "../../img/main/sushi.png";
import  SushiWebP  from "../../img/main/sushi.png.webp";
import  Cooking  from "../../img/main/cooking.png";
import  CookingWebP  from "../../img/main/cooking.png.webp";


class Main extends Component {
  render() {
    return (
      <main className="site-home-main">
        <section className="home-section1">
          {/* Hero Section */}
          <Parallax speed={-1}>
            <picture>
              <source srcset={BannerWebP} type="image/webp" />
              <img src={Banner} alt="Hamburger, Fries, Drink and Egg" className="site-home-main__hero"/>
            </picture>
          </Parallax>
          
          <div className="hero">
            <div className="hero__textWrapper">
              <h1>Tailored for Your New Food Experiences.</h1>
              <p>
                Discover your next favourite food and expand your taste horizons
                through mystery dishes, customized just for you.
              </p>
              <Link to="/signIn"><button>Start Now</button></Link>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="howItWorks">
            <div className="howItWorks__textWrapper" id="section1-content3">
              <p className="subtitle">How it works</p>
              <h1>Explore an exciting way to spice up your meals.</h1>
              <p>
                You will be provided with a unique culinary experience so that you
                can discover your next favourite food through mystery dishes.
              </p>
            </div>
            
            <picture>
              <source srcset={PancakeWebP} type="image/webp" />
              <img src={Pancake} alt="Home Section1" className="pancakePic"/>
            </picture>
            
            <div className="howItWorks__stepsWrapper">
              <div className="howItWorks__step">
                <picture>
                  <source srcset={ChampagneWebP} type="image/webp" />
                  <img src={Champagne} alt="Champagne bottle" className="howItWorks__champagne" />
                </picture>

                <div className="howItWorks__step-text">
                  <p>Sign up and create your unique flavour profile.</p>
                </div>
              </div>
              <div className="howItWorks__step">
                <picture>
                  <source srcset={MouseWebP} type="image/webp" />
                  <img src={Mouse} alt="Cursol" className="howItWorks__cursol" />
                </picture>

                <div className="howItWorks__step-text">
                  <p>Hit “Order Now” and we will do the rest.</p>
                </div>
              </div>
              <div className="howItWorks__step">
                <picture>
                  <source srcset={HeartWebP} type="image/webp" />
                  <img src={Heart} alt="Heart" className="howItWorks__heart" />
                </picture>

                <div className="howItWorks__step-text">
                  <p>Enjoy a surprising meal tailored just for you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Features Section */}
        <div className="features-section">
          <section className="home-section2" id="home-section2">
            <div className="section2-content1">
              <picture>
                <source srcset={LobsterWebP} type="image/webp" />
                <img src={Lobster} alt="Lobster" />
              </picture>
            </div>
            
            <div className="home-section2__description">
              <div className="section2-content2">
                <p className="subtitle">Features</p>
                <h1>Discover new ways to manage your restaurant online orders.</h1>
              </div>
              <div className="section2-content3">
                <div className="content3">
                  <div className="content3-image">
                    <picture>
                      <source srcset={TomatoSoupWebP} type="image/webp" />
                      <img src={TomatoSoup} alt="Customize your menu" />
                    </picture>
                  </div>
                  <div className="content3-text">
                    <p className="subtitle">Customize your menu</p>
                    <p className="content3-description">
                      Easily and quickly add, edit and remove your restaurant’s
                      dishes.
                    </p>
                  </div>
                </div>
                <div className="content3">
                  <div className="content3-image">
                    <picture>
                      <source srcset={SushiWebP} type="image/webp" />
                      <img src={Sushi} alt="Update your order statuses" />
                    </picture>
                  </div>
                  <div className="content3-text">
                    <p className="subtitle">Update your order statuses</p>
                    <p className="content3-description">Keep your customers informed when order statuses change.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Meet the Team Section */}
        <section className="home-section3" id="home-section3">
          <div className="section3-content1">
            <h1>Meet The Team</h1>
            <p>
              Taste It is brought to you by 10 members from diverse backgrounds
              with different working experiences. As a team, we are passionate
              about solving daily problems creating a positive impact on the
              community through technology.
            </p>
          </div>

          <div className="section3-content2">
            <TeamCard
              about={{
                name: "Mert Oktem",
                role: "Lead Developer",
                imgUrl: require('../../img/teamImg/Mert.jpg'),
                imgWebPUrl: require('../../img/teamImg/Mert.jpg.webp'),
                linkedIn:"https://www.linkedin.com/in/mert-oktem/",
                github:"https://www.github.com/mert-oktem"
              }}
            />

            <TeamCard
              about={{
                name: "Chloe Bui",
                role: "Lead Designer",
                imgUrl: require('../../img/teamImg/Chloe.jpg'),
                imgWebPUrl: require('../../img/teamImg/Chloe.jpg.webp'),
                linkedIn:"https://www.linkedin.com/in/chloe-buii/",
                behance:"https://www.behance.net/chloebui"
              }}
            />

            <TeamCard
              about={{
                name: "Milad Mokhtari",
                role: "Project Manager",
                imgUrl: require('../../img/teamImg/Milad.jpg'),
                imgWebPUrl: require('../../img/teamImg/Milad.jpg.webp')
              }}
            />

            <TeamCard
              about={{
                name: "Antriksh Saini",
                role: "Full Stack Developer",
                imgUrl: require('../../img/teamImg/Antrix.jpg'),
                imgWebPUrl: require('../../img/teamImg/Antrix.jpg.webp'),
              }}
            />

            <TeamCard
              about={{
                name: "Taichi Murai",
                role: "Full Stack Developer",
                imgUrl: require('../../img/teamImg/Taichi.jpg'),
                imgWebPUrl: require('../../img/teamImg/Taichi.jpg.webp'),
                linkedIn:"https://www.linkedin.com/in/taichimurai/",
                github:"https://github.com/epmt6528"
              }}
            />

            <TeamCard
              about={{
                name: "Arjun Dhingra",
                role: "Front End Developer",
                imgUrl: require('../../img/teamImg/Arjun.jpg'),
                imgWebPUrl: require('../../img/teamImg/Arjun.jpg.webp'),
              }}
            />

            <TeamCard
              about={{
                name: "Bokai Hsu",
                role: "UI/UX Designer",
                imgUrl: require('../../img/teamImg/Kai.jpg'),
                imgWebPUrl: require('../../img/teamImg/Kai.jpg.webp'),
                linkedIn:"https://www.linkedin.com/in/bokai-hsu/",
                behance:"https://www.behance.net/bokaihsu"
              }}
            />

            <TeamCard
              about={{
                name: "Harmanpreet Kaur",
                role: "UI/UX Designer",
                imgUrl: require('../../img/teamImg/Harman.jpg'),
                imgWebPUrl: require('../../img/teamImg/Harman.jpg.webp'),
              }}
            />

            <TeamCard
              about={{
                name: "Manpreet Kaur",
                role: "UI/UX Designer",
                imgUrl: require('../../img/teamImg/Manpreet.jpg'),
                imgWebPUrl: require('../../img/teamImg/Manpreet.jpg.webp'),
              }}
            />

            <TeamCard
              about={{
                name: "Hiril Kainth",
                role: "UI/UX Designer",
                imgUrl: require('../../img/teamImg/Hiril.jpg'),
                imgWebPUrl: require('../../img/teamImg/Hiril.jpg.webp')
              }}
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <div className="cta">
          <section className="home-section4">
            <picture>
              <source srcset={CookingWebP} type="image/webp" />
              <img src={Cooking} alt="Cooking salmon and toast" />
            </picture>
            <div className="section4-content2">
              <h1>Ready to see what we are working on?</h1>
              <p>
                If you are curious to know all the details of our solution, please
                feel free to take a look at our project proposal
              </p>
              <button>Download Now</button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
