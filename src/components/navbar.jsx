import React from "react";
import $ from "jquery";
import animateScrollTo from 'animated-scroll-to';
import logo1 from "../img/male1.png";
import logo2 from "../img/male.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1,
      isTop: true,
    };
    this.collapseNavbar = this.collapseNavbar.bind(this)
    this.toggleNavBar = this.toggleNavBar.bind(this)
  }

  componentDidMount() {
    const height = this.divElement.outerHeight || 0

    window.addEventListener("scroll", () => {
      const isTop = window.pageYOffset < 50
      this.setState({
        isTop: isTop,
        logo: isTop? logo1 : logo2
      })
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        console.log(this)
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - height + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

  }

  toggleNavBar(){
    this.state.isTop = !this.state.isTop
  }

  collapseNavbar(evt){
    console.log(evt)
  }


  render() {
    return (
      <nav
        className={`navbar navbar-b navbar-expand-md fixed-top ${this.state.isTop? 'navbar-trans' : 'navbar-reduce'}`}
        ref={ (divElement) => { this.divElement = divElement } }
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top" onClick={this.collapseNavbar}>
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "25px" }}
            />
          </a>
          
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home" onClick={this.collapseNavbar}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about" onClick={this.collapseNavbar}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work" onClick={this.collapseNavbar}>
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact" onClick={this.collapseNavbar}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
