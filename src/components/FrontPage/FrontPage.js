import React from 'react';

import Nameplate from '../Nameplate/Nameplate';
import InstaFeed from '../InstaFeed/InstaFeed';

class FrontPage extends React.Component {
  render() {
    return (
      <div>{/*main*/}
        <div id="header">
          <div className="title">
            <header className="container">
              <h1><span className="cap">all-man</span><br/> brothers</h1>
              <div className="subHead">
                are
              </div>

              <div className="members">
                <Nameplate name="Sando"  instrument="guitar" />
                <Nameplate name="Mango"  instrument="keyboards" />
                <Nameplate name="Tito"   instrument="bass" />
                <Nameplate name="Matsov" instrument="drums" />
              </div>
            </header>
          </div>
        </div>

        <div id="content">
          <div id="content-border1">
            <div id="content-border2">
              <div className="inner-content">
                <div className="inside">
                  <section id="tagline">
                    <header>
                      <h2> A funk rock <br/><span className="cap">experience</span></h2>
                    </header>
                  </section>

                  <section id="upcoming" className="container">
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

                  <section id="instagram-feed" className="container">
                    <InstaFeed />
                  </section>

                  <section id="social" className="container">
                    <header>
                      <h2>Social media</h2>
                    </header>

                     <div className="media-list">
                      
                      <div>
                        <a href="https://www.instagram.com/realmanbros/">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </div>

                      <div>
                        <a href="https://twitter.com/realManBros">
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