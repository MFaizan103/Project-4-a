import React from "react";
import "./App.css";
import usewebanimations from "@wellyshen/use-web-animations";

function App() {
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

  const jumpBatman = () => {
    batman.animate({
      keyframes: { transform: ["translateY(-300px)", "translateX(50px)", "traslateX(300px)"] },
      timing: { duration: 5000 },
      easing: 'ease',
    });
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
      <button
        onClick={() => {
          clouds.getAnimation().play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          clouds.getAnimation().pause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          clouds.getAnimation().reverse();
        }}
      >
        reverse
      </button>
      <button
        onClick={() => {
          clouds
            .getAnimation()
            .updatePlaybackRate(clouds.getAnimation().playbackRate * 1.5);
        }}
      >
        Increase Speed
      </button>
    </div>
  );
}

export default App;
