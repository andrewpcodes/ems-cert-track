import { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Grid, Link, Button, Typography } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

import { styling } from "./styling";
import { courses } from "./courseInfo";

import { MapView, Heading, Text } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import "@aws-amplify/ui-react/styles.css";
Amplify.configure(awsExports);

const defaultCourse = {
  id: 0,
  label: "Select a course from the left to find out more",
  coordinates: {
    latitude: 42.25,
    longitude: -71.2,
  },
  factoids: {
    city: "",
    levelsOffered: "",
    region: "",
    expiration: "",
  },
  facts: {
    "Address: ": "",
    "Phone #: ": "",
  },
};

let factoids = Object.entries(defaultCourse.factoids);
let facts = Object.entries(defaultCourse.facts);

const Courses = () => {
  const [currentCourse, setCurrentCourse] = useState(defaultCourse);
  const [showPopup, setShowPopup] = useState(false);

  const handleMarkerClick = ({ originalEvent }) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  const updateMap = (course) => {
    setCurrentCourse(course);
    factoids = Object.entries(course.factoids);
    facts = Object.entries(course.facts);
  };

  const openLinkNewTab = (courseURL) => {
    window.open(courseURL);
  };

  return (
    <Grid container>
      {currentCourse === defaultCourse ? (
        <Grid container sx={styling.page}>
          <Typography variant="h3" sx={styling.title}>
            Find a Course Near You
          </Typography>
          <Grid item sx={styling.mapHintContainer} />
          <Grid item sx={styling.courses}>
            {courses.map((course) => (
              <Button
                startIcon={<PublicIcon />}
                variant="outlined"
                sx={styling.buttons}
                onClick={() => updateMap(course)}
              >
                {course.label}
              </Button>
            ))}
          </Grid>
          <Grid item sx={styling.information}>
            <Typography
              variant="h6"
              gutterBottom={true}
              sx={styling.courseName}
            >
              {currentCourse.label}
            </Typography>
          </Grid>
          <Grid item sx={styling.mapContainer}>
            <MapView
              style={styling.map}
              initialViewState={{
                latitude: currentCourse.coordinates.latitude,
                longitude: currentCourse.coordinates.longitude,
                zoom: 8,
              }}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container sx={styling.page}>
          <Typography variant="h3" sx={styling.title}>
            Find a Course Near You
          </Typography>
          <Grid item sx={styling.mapHintContainer}>
            <Typography sx={styling.mapHint} variant="body2" fontStyle="italic">
              Hint: Click the map marker to learn more!
            </Typography>
          </Grid>
          <Grid item sx={styling.courses}>
            {courses.map((course) => (
              <Button
                startIcon={<PublicIcon />}
                variant="outlined"
                sx={styling.buttons}
                onClick={() => updateMap(course)}
              >
                {course.label}
              </Button>
            ))}
          </Grid>
          <Grid item sx={styling.information}>
            <Typography
              variant="h6"
              gutterBottom={true}
              sx={styling.courseName}
            >
              {currentCourse.label}
            </Typography>
            {factoids.map(([fact, oid]) => (
              <Typography variant="body1" paddingLeft={1}>
                {"> "}
                {oid}
              </Typography>
            ))}
            <Link
              sx={{ cursor: "crosshair" }}
              onClick={() => openLinkNewTab(currentCourse.route)}
            >
              Visit their website
            </Link>
          </Grid>
          <Grid item sx={styling.mapContainer}>
            <MapView>
              <Marker
                latitude={currentCourse.coordinates.latitude}
                longitude={currentCourse.coordinates.longitude}
                onClick={handleMarkerClick}
              >
                {showPopup && (
                  <Popup
                    latitude={currentCourse.coordinates.latitude}
                    longitude={currentCourse.coordinates.longitude}
                    offset={{ bottom: [0, -40] }}
                    onClose={() => setShowPopup(false)}
                  >
                    <Heading level={6}>{currentCourse.label}</Heading>
                    {facts.map((fact) => (
                      <Text>{fact}</Text>
                    ))}
                  </Popup>
                )}
              </Marker>
            </MapView>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Courses;
