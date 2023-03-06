import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const videoSrc = {
  type: "video",
  sources: [
    {
      src: "5l7Qji38oSU",
      provider: "youtube"
    }
  ]
};

// learn more https://github.com/sampotts/plyr#the-source-setter

export default function Dark() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

export const MyComponent = () => {
  return (
    <>
      <Plyr source={videoSrc} />
    </>
  );
};
