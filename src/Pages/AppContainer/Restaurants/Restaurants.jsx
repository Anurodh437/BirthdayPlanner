import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData, getWeatherData } from "../../../api/travelAdvisorAPI";
import List from "../../../components/List/List";
import Map from "../../../components/Map/Map";
import "./Restaurants.scss";
import { useHistory } from "react-router";

const Restaurants = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);

      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bounds, type]);

  // const onLoad = (autoC) => setAutocomplete(autoC);

  // const onPlaceChanged = () => {
  //   const lat = autocomplete.getPlace().geometry.location.lat();
  //   const lng = autocomplete.getPlace().geometry.location.lng();

  //   setCoords({ lat, lng });
  // };

  const history = useHistory();
  const goToDashboard = () => {
    history.push("/planBirthday");
  };

  return (
    <div className="restaurant_container">
      <h2 className="dashboard" onClick={goToDashboard}>
        Go Back
      </h2>
      <CssBaseline />
      <Grid
        className="restaurants_list"
        container
        spacing={1}
        style={{ width: "100%" }}
      >
        <Grid item xs={10} md={5}>
          <List
            isLoading={isLoading}
            childClicked={childClicked}
            places={filteredPlaces.length ? filteredPlaces : places}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>

        <Grid
          item
          xs={10}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setChildClicked={setChildClicked}
            setBounds={setBounds}
            setCoords={setCoords}
            coords={coords}
            places={filteredPlaces.length ? filteredPlaces : places}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <h4> * if page dosen't load . Please refresh.</h4>
    </div>
  );
};

export default Restaurants;