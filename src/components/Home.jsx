import React ,{useState } from 'react';
import './home.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMarkerClick = (props, marker, e) => {
    setSelectedPlace(props);
  };
  const onInfoWindowClose = () => {
    // Handle InfoWindow close event if needed
  };
  const navigate = useNavigate();
 
  return (
   
  
    <div>
        <div id="root">
  <div className="uwa-capture" style={{ display: "inline" }}>
    <div id="wrapper">
      <div className="_css-dqxzrQ">
        <div id="" className="_css-rDQkr">
          <span className="_css-hOYqoY">
            <div className="_css-fakebm">
              <div className="_css-llANtD">
                
              </div>
            </div>
          </span>
          <main id="" className="_css-lkkCoR">
            <div id="" className="_css-gcucDA">
              <section id="" className="_css-hBBvKT">
                <div>
                  <div data-baseweb="block" className="_css-hssbTQ">
                    <section className="_css-eGliSp">
                      <div className="_css-crYmov">
                        <h1 className="_css-hXFNgB">Get a ride</h1>
                        <div className="_css-fcAgFN">
                          <div className="_css-gvERBW">
                            <div
                              data-baseweb="select"
                              data-testid="pudo-select-v1"
                              className="_css-legtfT"
                            >
                              <div className="_css-kINfkN">
                                <div className="_css-ipqQZy">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <title>Radio button selected</title>
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div className="_css-gvRkiA">
                                  <div className="_css-gHAfEC">
                                    <input
                                      aria-autocomplete="list"
                                      aria-expanded="false"
                                      aria-haspopup="listbox"
                                      aria-label=""
                                      role="combobox"
                                      tabIndex={0}
                                      className="_css-hqBMbI"
                                      defaultValue="PickUp Location"
                                    />
                                    <div className="_css-bpKRkl" />
                                  </div>
                                 
                                </div>
                                <div className="_css-jYsWkC" />
                              </div>
                            </div>
                            <div
                              data-baseweb="select"
                              data-testid="pudo-select-v1"
                              className="_css-ebYpPW"
                            >
                              <div className="_css-iJqiTD">
                                <div className="_css-ipqQZy">
                                  <svg
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <title>Dropoff</title>
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M22 2H2v20h20V2Zm-7 7H9v6h6V9Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <div className="_css-gvRkiA">
                                  <div className="_css-gHAfEC">
                                    <input
                                      aria-autocomplete="list"
                                      aria-expanded="false"
                                      aria-haspopup="listbox"
                                      aria-label=""
                                      role="combobox"
                                      tabIndex={0}
                                      className="_css-hqBMbI"
                                      defaultValue="Dropoff Location"
                                    />
                                    <div className="_css-bpKRkl" />
                                  </div>
                                
                                </div>
                                <div className="_css-jYsWkC" />
                              </div>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      <span className="_css-dwEvWf">
                        <div className="_css-gvERBW" />
                      </span>
                      <div className="_css-gcOPzz">
                        <button
                          data-baseweb="button"
                          disabled=""
                          className="_css-cztaBj"
                        >
                          Search
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
              <div class="_css-iziFvP">
              <Map google={props.google}
             
              initialCenter={{
                lat: 23.022505, // Specify the initial latitude
                lng: 72.571365, // Specify the initial longitude
              }} zoom={14}>
        <Marker onClick={onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={onInfoWindowClose}>
          <div>
            <h1>{selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
      </div>
            </div>
          </main>
        </div>
      </div>
      <div className="_css-PKJb" />
    </div>
  </div>
</div>

    </div>
  )
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyB9olf9UScOGxqnfOHN2hdAZBs8isl7X2c"
})(Home)
