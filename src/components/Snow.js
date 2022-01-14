import Particles from "react-tsparticles";

function importAll(files) {
  return files.keys().map(key => (
    { "src": files(key) }
  ));
}

export const Snow = () => {
  const flakeImages = importAll(require.context('../imgs/flakes', false, /\.png$/));

  return (
    <Particles
      id="tsparticles"
      options={
        {
          "fullScreen": {
            "zIndex": -1
          },
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "repulse"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble"
              }
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 0.3,
                "opacity": 1,
              },
              "grab": {
                "distance": 400,
                "links": {
                  "opacity": 0.5
                }
              }
            }
          },
          "particles": {
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 500,
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "direction": "bottom",
              "enable": true,
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              }
            },
            "number": {
              "density": {
                "enable": true
              },
              "value": 400
            },
            "opacity": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 0.1,
                "max": 0.5
              },
              "animation": {
                "speed": 1,
                "minimumValue": 0.1
              }
            },
            shape: {
              type: "image",
              images: flakeImages,
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 8,
                "max": 20
              },
              "animation": {
                "speed": 40,
                "minimumValue": 0.1
              }
            }
          }
        }
      }
    />
  )
}