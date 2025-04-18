import ExampleImage from "../assets/vas-listing-create.png";

function ProjectCard2() {
  return (
    <div className="project-card-container">
      <div className="project-card-thumbnail">
        <div className="project-card-overlay"></div>
        <div className="project-card-gradient">
          <BackgroundGradient></BackgroundGradient>
        </div>
        <img className="project-card-image" src={ExampleImage}></img>
      </div>
      <div className="project-card-text">
        <div>
          <h3 className="project-card-header">Talky</h3>
          <p className="project-card-description">
            A real-time chat application build with Golang, Vue and Typescript.
          </p>
        </div>
        <div className="project-card-cta">Read more</div>
      </div>
    </div>
  );
}

const BackgroundGradient = () => {
  return (
    <svg
      className="gradient-svg"
      width="800"
      height="600"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        className="bg-gradient-one"
        opacity="0.5"
        cx="305.095"
        cy="294.189"
        rx="292.729"
        ry="272.493"
        transform="rotate(-41.7514 305.095 294.189)"
        fill="url(#bg-gradient-one)"
      ></ellipse>
      <ellipse
        className="bg-gradient-two"
        opacity="0.6"
        cx="314.947"
        cy="283.229"
        rx="314.947"
        ry="283.229"
        transform="matrix(0.8571 -0.51515 -0.51515 -0.8571 373.81 726)"
        fill="url(#bg-gradient-two)"
      ></ellipse>
      <defs>
        <radialGradient
          id="bg-gradient-one"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(319.628 260.311) rotate(88.8263) scale(253.398 377.821)"
        >
          <stop offset="0.25" stop-color="var(--gradient-clr-one)"></stop>
          <stop
            offset="0.744792"
            stop-color="var(--gradient-clr-one)"
            stop-opacity="0"
          ></stop>
        </radialGradient>
        <radialGradient
          id="bg-gradient-two"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(330.582 248.016) rotate(89.4327) scale(234.804 286.235)"
        >
          <stop stop-color="var(--gradient-clr-two)"></stop>
          <stop
            offset="1"
            stop-color="var(--gradient-clr-two)"
            stop-opacity="0"
          ></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ProjectCard2;
