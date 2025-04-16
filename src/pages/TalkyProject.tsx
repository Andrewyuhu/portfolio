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
        Talky is a real-time chat application built using Vue for the frontend
        and Go for the backend. It supports WebSocket-based messaging, live user
        updates, and persistent message storage using PostgreSQL. JWT tokens
        were used for user authentication.
      </p>
      <br></br>
      <p>
        I decided to create this application to explore new technologies, Golang
        and Vue. I wanted to learn another langauge and landed on Golang because
        I like it's programming patterns, error handling, concurrency handling
        and the funny logo. I opted to use Vue for the frontend as I had only
        ever used React before and I wanted to try something new instead.
      </p>
      <br></br>
      <h3>Challenges & Solutions</h3>
      <p>
        I think the main challenge was tackling many new things at once. I had
        very little Golang experience besides reading some books and no Vue
        experience at all. I also was not familiar with Websockets at all.
      </p>
      <br></br>
      <p>
        Personally, I think the best way to learn is through mistakes, so I
        decided to dive in. I followed some guides for how to develop idomatic
        Golang backend APIs which helped me a lot to structure my project. For
        Vue, it was easy enough to pick up as it shared many similarities with
        React. Integrating websockets was probably the most interesting part.
        Initially daunting, but after reading the docs for Gorilla Websockets
        and their example, everything made a lot of sense and I was able to
        starting piecing everything together.
      </p>
      <br></br>
      <h3>What I Learned</h3>
      <p>
        This project helped me further my understanding of both Golang and Vue.
        As someone who mainly uses Javascript and Python, this was a nice change
        of pace. This project also reminded me how important it is to properly
        structure my projects and think about how each part would interact with
        each other. I also started focusing on trying to isolate my frontend end
        components more, using different state managment tools instead of
        drilling state down multiple layers.
      </p>
    </ProjectLayout>
  );
}

export default TalkyProject;
