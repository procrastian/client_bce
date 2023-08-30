import "./style.css";

export default function About() {
  return (
    <div className="card" id="about_experience">
      <div className="image_container">
        <img
          id=""
          src={
            "https://images.unsplash.com/photo-1692613174661-a239fbf8ebe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
          }
          alt=""
          draggable="false"
        />
      </div>
      <div className="text_container" id="home_text">
        <h1>About my experience</h1>
        <p>
          From lifeguarding at summer camps, working with a Sport for
          Development charity in South Africa, mentoring undergraduates to
          working in UK secondary schools, I have enjoyed working with young
          people from all walks of life.
        </p>
        <p>
          I have ran two Personal Development (PSHE) and Career departments in
          secondary schools alongside teaching Geography at KS3,4 and 5 and
          English at KS3 and 4, as well as phonics to nurture groups.
        </p>
        <p>
          I have set up a GCSE Citizenship Studies (Politics and Law)
          department, as well as School Councils, Eco Clubs and Junior
          Leadership Teams. A personal highlight was being Lead Teacher for the
          'Campaign for Global Education', where myself and students travelled
          to both Kenya and the UK Parliament to campaign for Equity in
          Education.
        </p>
        <p className="quote">
          <em>
            "Never doubt that a small group of thoughtful, committed citizens
            can change the world; indeed, it's the only thing that ever has."
          </em>
          Margaret Mead.
        </p>
        <p>
          These experiences, as well as travelling to over 50 countries and
          being immersed in nature through hobbies, has taught me the true value
          of protecting childhood and the health and wellbeing of our children.
        </p>
        <p>
          Education is not confined to the four walls of a classroom. We learn
          everyday from a wealth of different experiences. Recognising this and
          our place in the world, is at the heart of <strong>Base Camp Education</strong>.
        </p>
        <p>
          Every child is unique and wonderful in their own way, and I strive to
          unlock the potential of each individual that walks through the doors
          of <strong>BCE</strong>. We face many challenges as we walk through life, and I aim to
          support young people and their families in finding the confidence and
          joy in embracing them.
        </p>
        <p>
          After years in formal teaching, I have made the decision to Home
          Educate, and as I enjoy the journey of Wild & Free Education with my
          own children, I hope to open the doors to yours also.
        </p>
        <p>
          Located in Hinckley, Leicestershire - Base Camp Education has a
          bespoke built cabin, allotment and greenhouse for families to enjoy. I
          look forward to hearing from you soon!
        </p>
      </div>
    </div>
  );
}
