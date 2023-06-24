import logo from "src/logo.svg";

const Home = () => {
  return (
    <header className="flex flex-col justify-center">
      <img src={logo} className="h-20" alt="logo" />
      <p className="text-center">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="text-center"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
