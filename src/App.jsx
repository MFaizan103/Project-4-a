import React from "react";
import "./App.css";
import usewebanimations from "@wellyshen/use-web-animations";

function App() {

  // Using WebAnimationApi Hook
  const animationclouds = {
    keyframes: {
      transform: ["translateX(100%)", "translateX(-100%)"],
    },
    timing: {
      duration: 2000,
      iterations: Infinity,
    },
  };
  const animationtrees = {
    keyframes: {
      transform: ["translateX(100%)", "translateX(-100%)"],
    },
    timing: {
      duration: 3000,
      fill: "forwards",
      iterations: Infinity,
    },
  };

  const clouds = usewebanimations(animationclouds);
  const trees = usewebanimations(animationtrees);
  const batman = usewebanimations();

// Playback Functions
  const jumpBatman = () => {
    batman.animate({
      keyframes: {
        transform: [
          "translateY(-300px)",
          "translateX(50px)",
          "traslateX(300px)",
        ],
      },
      timing: { duration: 5000 },
      easing: "ease",
    });
  };

  const pauseAll = () => {
    clouds.getAnimation().pause();
    trees.getAnimation().pause();
  };
  const playAll = () => {
    clouds.getAnimation().play();
    trees.getAnimation().play();
  };

  const speedAll = () => {
    clouds
      .getAnimation()
      .updatePlaybackRate(clouds.getAnimation().playbackRate * 1.5);
    trees
      .getAnimation()
      .updatePlaybackRate(clouds.getAnimation().playbackRate * 1.5);
  };
  const slowAll = () => {
    clouds
      .getAnimation()
      .updatePlaybackRate(clouds.getAnimation().playbackRate / 1.5);
    trees
      .getAnimation()
      .updatePlaybackRate(clouds.getAnimation().playbackRate / 1.5);
  };

  const reverseAll = () => {
    clouds.getAnimation().reverse();
    trees.getAnimation().reverse();
  };

  return (
    <div className="App">
      <div className="bg"></div>

      <div ref={batman.ref} onClick={jumpBatman} className="character">
        <img src="https://i.gifer.com/3RyU.gif" alt="img" />
      </div>

      <div ref={clouds.ref} className="clouds">
        <img
          id="cloud1"
          src="https://images.vexels.com/media/users/3/154317/isolated/preview/ff052a9e2f18d071b45d0d69ed2a9154-cloud-weather-flat-by-vexels.png"
          alt=""
        />
        <img
          id="cloud2"
          src="https://images.vexels.com/media/users/3/154317/isolated/preview/ff052a9e2f18d071b45d0d69ed2a9154-cloud-weather-flat-by-vexels.png"
          alt=""
        />
        <img
          id="cloud3"
          src="https://images.vexels.com/media/users/3/154317/isolated/preview/ff052a9e2f18d071b45d0d69ed2a9154-cloud-weather-flat-by-vexels.png"
          alt=""
        />
      </div>

      <div ref={trees.ref} className="trees">
        <img
          id="tree1"
          src="https://library.kissclipart.com/20190109/vjw/kissclipart-christmas-tree-silhouette-clipart-ifc-rooftop-gard-b6e33f5637e04baf.png"
          alt=""
        />
        <img
          id="tree2"
          src="https://library.kissclipart.com/20190109/vjw/kissclipart-christmas-tree-silhouette-clipart-ifc-rooftop-gard-b6e33f5637e04baf.png"
          alt=""
        />
        <img
          id="tree3"
          src="https://library.kissclipart.com/20190109/vjw/kissclipart-christmas-tree-silhouette-clipart-ifc-rooftop-gard-b6e33f5637e04baf.png"
          alt=""
        />
        <img
          id="tree4"
          src="https://library.kissclipart.com/20190109/vjw/kissclipart-christmas-tree-silhouette-clipart-ifc-rooftop-gard-b6e33f5637e04baf.png"
          alt=""
        />
      </div>

      <button onClick={playAll}>Play</button>
      <button onClick={pauseAll}>Pause</button>
      <button onClick={slowAll}>Decrese Speed</button>
      <button onClick={speedAll}>Increase Speed</button>
      <button onClick={reverseAll}>Reverse</button>
    </div>
  );
}

export default App;
