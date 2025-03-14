import React from "react";
import LowNavBar from "./LowNavBar";
function GitHub(props) {
  const lstyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : props.colour,
  };
  return (
    <>
      <LowNavBar
        mode={props.mode}
        onClick={props.onClick}
        colour={props.colour}
        handleColourChange={props.handleColourChange}
      />
      <div className="container" style={{ paddingTop: "75px" }}>
        <div className="text-center" style={lstyle}>
          <h1>Hello, there!</h1>
          <p style={{ paddingTop: "10px" }}>
            Welcome to my News Website. In this project, I used an API called
            NewsAPI to search news online and present it in a structured format
            for easy viewing. Unfortunately, NewsAPI does not serve requests
            from URLs other than loclahost, so I cannot show you the live
            version of this website. However, I have recorded a few videos to
            show you how it works. Please have a look at them below.
          </p>
        </div>
        <br />
        <br />
        <h2 className="text-center" style={lstyle}>
          <strong>Category-wise news curation</strong>
        </h2>
        <p className="text-center" style={lstyle}>
          The website automatically sorts news by their categories into
          different pages, which can be navigated to using the navigation bar at
          the top. The categories are: General, Business, Entertainment, Health,
          Science, Sports, and Technology. <br />
          Also, there is an option to apply dark mode and you can even select
          the background colour of the website. The background colour can be any
          colour you like, and the website will remember your choice even if you
          navigate to a different category. The website will also remember your
          choice of dark mode or light mode.
        </p>
        <video
          width="1280"
          height="720"
          controls
          style={{ border: "2px solid green", borderRadius: "10px" }}
        >
          <source src="categories.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please try with a
          different browser. I personally use Microsoft Edge, but any
          sufficiently latest one should do.
        </video>
        <br />
        <br />
        <h2 className="text-center" style={lstyle}>
          <strong>Opening the actual articles</strong>
        </h2>
        <p className="text-center" style={lstyle}>
          A direct link to the original article is provided at the end of each
          news box. You can click on the link to open the article in a new tab.
        </p>
        <video
          width="1280"
          height="720"
          controls
          style={{ border: "2px solid green", borderRadius: "10px" }}
        >
          <source src="see_details.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please try with a
          different browser. I personally use Microsoft Edge, but any
          sufficiently latest one should do.
        </video>
        <br />
        <br />
        <h2 className="text-center" style={lstyle}>
          <strong>Search Feature</strong>
        </h2>
        <p className="text-center" style={lstyle}>
          You can even search for news yourself using the search bar at the top
          of the page. Just type in the keyword you want to search for and hit
          enter. The website will automatically fetch the news for you.
        </p>
        <video
          width="1280"
          height="720"
          controls
          style={{ border: "2px solid green", borderRadius: "10px" }}
        >
          <source src="search.mp4" type="video/mp4" />
          Your browser does not support the video tag. Please try with a
          different browser. I personally use Microsoft Edge, but any
          sufficiently latest one should do.
        </video>
        <br />
        <br />
      </div>
    </>
  );
}

export default GitHub;
