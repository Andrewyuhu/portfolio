import ProjectLayout from "../layouts/ProjectLayout";

function TalkyProject() {
  const inputImages = [
    {
      path: "vas-home-page.png",
      alt: "Vike and Sell Home Page Screenshot",
    },
    {
      path: "vas-listing.png",
      alt: "vike and Sell Listing Screenshot",
    },
    {
      path: "vas-listing-create.png",
      alt: "vike and Sell Listing Creation Screenshot",
    },
  ];

  return (
    <ProjectLayout
      title="Vike and Sell"
      subtitle="Used Marketplace Application"
      images={inputImages}
    >
      <p>
        Vike and Sell is a used market place application for University of
        Victoria students sell their used items and raise funds for charity.
      </p>
      <br></br>
      <p>
        This application was created in an agile environment with a team of 14
        people, split off into four different sub teams each with a specifcic
        responsibility. I worked on the frontend team focusing on providing
        users with a smooth and pleasant UI to use our application.
      </p>
      <br></br>
      <p>
        We used Typescript with React as our main frontend framework. We used
        Tailwind CSS and Charkra UI for styling and prebuild components. React
        Router and Tanstack Query were used for routing and API calls. Finally,
        we used Cypress for testing.
      </p>
      <br></br>
      <h3>Challenges & Solutions</h3>
      <p>
        One of the main challenges in this project was meeting tight deadlines
        while collaborating within a large team. While maintaining goals within
        our own sub-team was fairly straightforward, coordinating across teams
        proved more difficult early on. Our bi-weekly scrum meetings helped us
        stay updated on each other's progress, but syncing timelines remained a
        challenge. For example, the backend team completed the initial round of
        API integrations at 3:00 AM on the day of our deadline. As the frontend
        team, we had only a few hours left to integrate everything and finalize
        the application in time. Needless to say, it was a very rushed process.
      </p>
      <br></br>
      <p>
        To overcome this, we improved our communication with the backend team by
        setting clearer expectations and pushing for specific deliverables ahead
        of time. We also became more involved in their process—helping with
        debugging and offering support where possible. On our end, we began
        relying more on dummy data to simulate API responses, which allowed us
        to build and test our components earlier. This approach helped us
        integrate the APIs more seamlessly once they were ready and ensured we
        stayed on track for future milestones.
      </p>
      <br></br>
      <h3>What I Learned</h3>
      <p>
        Collaborating in a large team of 14 people reinforced the importance of
        clear communication and cross-team coordination. Early on, we struggled
        with syncing our progress with other sub-teams, which led to last-minute
        integrations and rushed development. By improving our communication
        through setting specific goals, offering support across teams, and not
        hesitating to follow up on deadlines, we created a more collaborative
        and efficient work environment. This experience highlighted how strong
        team dynamics and communication are essential for success in larger
        projects.
      </p>
      <br></br>
      <p>
        Operating in an agile environment gave me hands-on experience with
        iterative development, sprint planning, and bi-weekly scrum meetings. As
        my team's scrum master, I learned a lot about work load management and
        managing scrums.
      </p>
      <br></br>
      <p>
        This project also helped my understanding of several frontend
        technologies. I gained practical experience with TypeScript, React,
        Tailwind CSS, Chakra UI, React Router, and TanStack Query, which helped
        build a scalable and responsive UI. I also learned how to write
        end-to-end tests using Cypress, which was crucial for maintaining
        quality. Working with mocked and dummy data allowed us to decouple our
        development from backend delays and build in a more modular and testable
        way.
      </p>
    </ProjectLayout>
  );
}

export default TalkyProject;
