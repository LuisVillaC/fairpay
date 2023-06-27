import logo from "src/logo.svg";

const About = () => {
  return (
    <div className="container mx-auto mt-8">
      <header className="flex flex-col justify-center">
        <img src={logo} className="h-20" alt="logo" />
        <p className="text-center">This is about page</p>
        <a
          className="text-center"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default About;
