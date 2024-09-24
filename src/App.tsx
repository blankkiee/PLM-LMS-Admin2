import ListGroup from "./components/ListGroup";
// import Message from "./Message";
// import "./App.css";
// import Image from "./components/image";
import "./index.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* top nav */}
      <Navbar />
      <div className="flex flex-1">
        {/* side bar */}
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-slate-100 border-1 border-slate-300">
          <ListGroup />
        </main>
      </div>

      {/* <ListGroup></ListGroup>
      <Message></Message>
      <h1 className="text-red-500">Hello word!</h1>
      <Image></Image> */}
    </div>
  );
};

export default App;
