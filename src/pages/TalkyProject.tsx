import ProjectLayout from "../layouts/ProjectLayout";

function TalkyProject() {
  const inputImages = [
    {
      path: "talky-main.png",
      alt: "Talky Homepage Screenshot",
    },
    {
      path: "talky-convo.png",
      alt: "Talky Conversation Screenshot",
    },
  ];

  return (
    <ProjectLayout
      title="Talky"
      subtitle="Real Time Chat Application"
      images={inputImages}
    >
      <p>
        Talky is a real-time chat application built with Vue on the frontend and
        Golang on the backend. It supports WebSocket-based messaging, live user
        updates, and persistent message storage using PostgreSQL. User
        authentication is handled via JWT tokens.
      </p>
      <br></br>
      <p>
        I created this application as a way to learn new technologies,
        specfically Golang and Vue. I wanted to challenge myself to learn a new
        language and I was drawn to Golang due to its clean syntax, powerful
        concurreny model, and cute mascot. I heard that Vue was a very intuitive
        frontend framework so I decided that I would learn the basics of Vue
        with this project.
      </p>
      <br></br>
      <h3>Challenges & Solutions</h3>
      <p>
        The biggest challenge was juggling several unfamiliar technologies at
        once. I had no experience with Go or Vue, and had never worked with
        WebSockets before.
      </p>
      <br></br>
      <p>
        What better way to learn then through breaking something and trying to
        fix it. I took inspiration from best practices from Go community guides
        to build an idiomatic backend structure, which gave me a solid
        foundation to build on. Vue felt familiar thanks to its similarities
        with React, and I picked up the basics after watching a video or two.
        Integrating WebSockets turned out to be one of the most rewarding parts.
        Initially somewhat overwhelming, but after studying Gorilla WebSocket's
        documentation and examples, things started to click.
      </p>
      <br></br>
      <h3>What I Learned</h3>
      <p>
        This project helped my knowledge of both Go and Vue. It also reinforced
        the importance of thoughtful project architecture. On the frontend, I
        practiced isolating state with dedicated state management solutions
        instead of prop drilling. Overall, this was a fun experience that taught
        me to be more deliberate in how I design and organize my applications.
      </p>
    </ProjectLayout>
  );
}

export default TalkyProject;
