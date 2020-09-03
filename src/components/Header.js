import React from 'react';
import config from '../../config';
import eol from 'eol';
import SimplexNoise from 'simplex-noise';

const logoText = `
........xxxxxxxxxxxxx.........xxxxxxxxxxxxx.........xxxxxxxxxxxxx
.....xxxaaaaaaaaaaaax......xxxaaaaaaaaaaaax......xxxaaaaaaaaaaaax
...xxaaaaaaaaaaaaaaax....xxaaaaaaaaaaaaaaax....xxaaaaaaaaaaaaaaax
..xaaaaaxxxxxxxxaaaax...xaaaaaxxxxxxxxaaaax...xaaaaaxxxxxxxxaaaax
.xaaaaax.......xxxxxx..xaaaaax.......xxxxxx..xaaaaax.......xxxxxx
xaaaaax...............xaaaaax...............xaaaaax..............
xaaaaax...............xaaaaax...............xaaaaax..............
xaaaaax....xxxxxxxxxx.xaaaaax...............xaaaaax..............
xaaaaax....xaaaaaaaax.xaaaaax...............xaaaaax..............
xaaaaax....xxxxxaaaax.xaaaaax...............xaaaaax..............
xaaaaax........xaaaax.xaaaaax...............xaaaaax..............
.xaaaaax.......xaaaax..xaaaaax.......xxxxxx..xaaaaax.......xxxxxx
..xaaaaaxxxxxxxxaaaax...xaaaaaxxxxxxxxaaaax...xaaaaaxxxxxxxxaaaax
...xxaaaaaaaaaaaaaaax....xxaaaaaaaaaaaaaaax....xxaaaaaaaaaaaaaaax
.....xxxaaaaaaxxxaaax......xxxaaaaaaaaaaaax......xxxaaaaaaaaaaaax
........xxxxxx...xxxx.........xxxxxxxxxxxxx.........xxxxxxxxxxxxx
`;

function rect(props) {
  const { ctx, x, y, width, height, color } = props;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = color;
}

function renderCanvas(ctx, canvas, props) {
  ctx.clearRect(0, 0, 1500, 900);
  // draw children “components”

  var splitLogo = eol.split(logoText);
  var simplex = new SimplexNoise();

  // loop through lines
  for (let n = 0; n < splitLogo.length; n++) {
    const line = splitLogo[n];
    var charArray = line.split('');

    // loop through chars
    for (let i = 0, spaceBuffer = 0; i < charArray.length; i++) {
      const character = charArray[i];
      var color = '#ffffff';
      var isdraw = false;
      if (character == 'x') {
        color = `rgb(255, 0, 0)`;
        isdraw = true;
      } else if (character == 'a') {
        isdraw = true;
        var noiseVal = simplex.noise3D(
          i * 0.1,
          n * 0.1,
          props.etime / 1000000000000000000000
        );
        if (noiseVal > 0.5) {
          isdraw = true;
          color = `rgb(150, 0, 0)`;
        } else if (noiseVal > 0.1) {
          isdraw = true;
          color = `rgb(255, 80, 80)`;
        } else {
          isdraw = false;
          color = `rgb(90, 0, 0)`;
        }
      } else {
        // draw nothing
      }

      // fade out
      if (window.scrollY > 500) {
        ctx.globalAlpha = 1 / (window.scrollY / 100);
      } else {
        ctx.globalAlpha = 1;
      }

      if (isdraw == true) {
        if (canvas.getBoundingClientRect().width < 600) {
          rect({
            ctx,
            x:
              i * 20 +
              spaceBuffer +
              canvas.width / 2 -
              (charArray.length * 20) / 2 -
              20 +
              Math.random() * 2,
            y: n * 24 + (Math.random() * window.scrollY) / 2,
            width: 10,
            height: 10,
            color: color,
          });
        } else {
          rect({
            ctx,
            x:
              i * 10 +
              spaceBuffer +
              canvas.width / 2 -
              (charArray.length * 10) / 2 -
              Math.random() * 2 +
              3,
            y: n * 12 + (Math.random() * window.scrollY) / 2,
            width: 5,
            height: 5,
            color: color,
          });
        }
      }
    }
  }
}
class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crefs: this.refs,
      etime: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ etime: this.state.etime + 1 }),
      100
    );
    this.updateCanvas(this.state);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.updateCanvas(this.state);
  }
  componentWillUpdate(newState) {
    this.updateCanvas(newState);
  }

  updateCanvas(newState) {
    renderCanvas(this.refs.canvas.getContext('2d'), this.refs.canvas, newState);
  }

  render() {
    return <canvas id="logoCanvas" ref="canvas" width={1500} height={900} />;
  }
}

export default function Header() {
  return (
    <div id="header">
      <div className="CanvasContainer">
        <CanvasComponent />
      </div>
    </div>
  );
}
