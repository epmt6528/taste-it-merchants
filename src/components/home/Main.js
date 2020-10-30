import React, { Component } from "react";
import FormHome from "./FormHome";
import TeamCard from "./TeamCard";
import { Element } from "react-scroll";
import  Banner  from "../../img/BannerOnNavigation.png";
import  HomepageImage1  from "../../img/Homepage-1.png";
import  HomepageImage2  from "../../img/Homepage-2.png";
import  SquareImage  from "../../img/ForEverySquareImages.png";
import "./Main.css"

class Main extends Component {
  render() {
    return (
      <main className="site-home-main">
        <section className="home-section1">
          <div className="section1-content1">
            <img src={Banner} alt="BannerMobile" />
            <div className="banner-text">
              <h1>Tailored for Your New Food Experiences.</h1>
              <p>
                Discover your next favourite food and expand your taste horizons
                through mystery dishes, customized just for you.
              </p>
            </div>
          </div>
          {/* <div className="section1-content2">
            <img alt="Home Section1" />
          </div> */}
          <div className="section1-content3" id="section1-content3">
            <p>How it works</p>
            <h1>Explore a exciting way to spice up your meals.</h1>
            <p>
              You will be provided with a unique culinary experience so that you
              can discover your next favourite food through mystery dishes.
            </p>
            <img src={HomepageImage1} alt="Home Section1" />
          </div>
          <div className="section1-content4">
            <div className="content4">
                <img src={SquareImage} alt="Sign Up" />

              <div className="content4-text">
                <p>Sign up and create your unique flavour profile.</p>
              </div>
            </div>
            <div className="content4">
                <img src={SquareImage} alt="Order Now" />

              <div className="content4-text">
                <p>Hit “Order Now” and we will do the rest</p>
              </div>
            </div>
            <div className="content4">
                <img src={SquareImage} alt="Suprising Meal" />

              <div className="content4-text">
                <p>Enjoy a surprising meal tailored just for you.</p>
              </div>
            </div>
          </div>
        </section>
        <div className="features-section">
          <section className="home-section2" id="home-section2">
            <div className="section2-content1">
              <img src={HomepageImage2} alt="Home Section2" />
            </div>
            <div className="section2-content2">
              <p>Features</p>
              <h1>A new way for your restaurant to manage your online orders.</h1>
            </div>
            <div className="section2-content3">
              <div className="content3">
                <div className="content3-image">
                  <img src={SquareImage} alt="Customize your menu" />
                </div>
                <div className="content3-text">
                  <p>Customize your menu</p>
                  <p>
                    Easily and quickly add, edit and remove your restaurant’s
                    dishes.
                  </p>
                </div>
              </div>
              <div className="content3">
                <div className="content3-image">
                  <img src={SquareImage} alt="Update your order statuses" />
                </div>
                <div className="content3-text">
                  <p>Update your order statuses</p>
                  <p>Keep your customers informed when order statuses change.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
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
                name: "Antriksh Saini",
                role: "Lead Developer",
                // imgUrl: require('../../../img/teamImg/Mert.jpg'),
                // socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                // socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_github.png'),
                // socialLink1:"https://www.linkedin.com/in/mert-oktem/",
                // socailLink2:"https://www.github.com/mert-oktem"
              }}
            />
          </div>
        </section>

        <div className="features-section">
          <section className="home-section4">
              <img src={HomepageImage1} alt="home-section4" />
            <div className="section4-content2">
              <h1>Ready to see what we are working on?</h1>
              <p>
                If you are curious to know all the details of our solution, please
                feel free to take a look at our project proposal
              </p>
            </div>
            <div className="section4-content3">
              <FormHome />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Main;
