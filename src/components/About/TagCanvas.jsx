import tagCanvas from 'tag-canvas'
import React from 'react';


class TagCloud extends React.Component {
  // constructor(props:any) {
  //   super(props);
  // }

  renderTagCloud() {
    try {
      tagCanvas.Start("myCanvas", "tags", {
        textColour: "#4acdce",
        reverse: true,
        depth: 0.1,
        maxSpeed: 0.05,
        outlineMethod: "none",
        textHeight: 27,
        wheelZoom: false
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      // @ts-ignore
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  }

  componentDidMount() {
    this.renderTagCloud();
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <p>
              Anything in here will be replaced on browsers that do not support the canvas
              element
            </p>
          </canvas>
        </div>
        <div id="tags" style={{display: 'none'}}>
          <ul>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics" rel='noreferrer' target='_blank'>HTML</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" rel='noreferrer' target='_blank'>JavaScript</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Learn/CSS/First_steps/What_is_CSS" rel='noreferrer' target='_blank'>CSS</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Sass" rel='noreferrer' target='_blank'>SASS</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started" rel='noreferrer' target='_blank'>React</a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" rel='noreferrer' target='_blank'>BootsTrap</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Web_API" rel='noreferrer' target='_blank'>REST</a>
            </li>
            <li>
              <a href="https://es.wikipedia.org/wiki/Figma" rel='noreferrer' target='_blank'>Figma</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default TagCloud