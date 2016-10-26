import React from 'react';

import NavBar   from './navbar';
import Landing  from './landing';
import About    from './about';
import Services from './services';
import Contact  from './contact';
import Footer   from './footer';

import data from './data'


class FrontPage extends React.Component {
  render() {
    let lang = this.props.params.lang || 'en';

    let currData = data[lang];

    return (
      <div>{/*main*/}
        <div id="header">
          <div className="title">
            <header className="container">
              <h1>The <span className="cap">all</span> man <br/> brothers rock band</h1>
              <div className="subHead">
                are
              </div>

              <div className="members">

                <div className="member">
                  <div className="instrument guitar">
                  </div>
                  <div className="name">
                    Sando
                  </div>
                </div>

                <div className="member">
                  <div className="instrument keyboards">
                  </div>
                  <div className="name">
                    Mango
                  </div>
                </div>

                <div className="member">
                  <div className="instrument bass">
                  </div>
                  <div className="name">
                    Tito
                  </div>
                </div>

                <div className="member">
                  <div className="instrument drums">
                  </div>
                  <div className="name">
                    Matsov
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div id="content">
          <div id="content-border1">
            <div id="content-border2">
              <div className="inner-content">
                <div className="container inside">
                  <section id="upcoming">
                    <header>
                      <h2>Upcoming shows</h2>
                    </header>
                      <div>
                        <ul>
                          <li>
                            <div className="info">
                              <div className="date">november 15, 2016 @ 9</div>
                              <div>@barfly
                              <span className="pill">
                                <a href="https://www.google.ca/maps/place/Barfly/@45.5170557,-73.582089,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a332d002f1d:0xdb6c4d5276396185!8m2!3d45.5170557!4d-73.5799003">
                                  map
                                </a>
                                </span></div>
                            </div>
                            <div className="desc">
                              Doors at nine. 3 band bill. pay what you want at the door
                            </div>
                          </li>
                        </ul>
                      </div>
                  </section>

                  <section id="social">
                    <header>
                      <h2>Social media</h2>
                    </header>

                     <div className="media-list">
                      
                      <div>
                        <a href="https://www.instagram.com/the.all.man.brothers.rock.band/">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div>
                        <a href="https://twitter.com/TheALLmanBros">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div>
                        <a href="https://soundcloud.com/user-457283297">
                          <i className="fa fa-soundcloud" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div>
                        <a href="mailto:the.all.man.brothers.rock.band@gmail.com">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    );
  }
}

export default FrontPage