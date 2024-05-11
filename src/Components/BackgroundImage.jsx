import React from "react";
import background from "../../public/wallpaper.jpeg";
class BackgroundImage extends React.Component {
  render() {
    return (
      <>
        <div className="background-image">
          <img src={background} alt="" />
        </div>
      </>
    );
  }
}

export default BackgroundImage;
