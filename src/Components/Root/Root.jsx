import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import './root.css';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center gap-5"> 
        <aside>
          <p>Nav item -1</p>
          <p>Nav item -2</p>
          <p>Nav item -3</p>
          <p>Nav item -4</p>
          <p>Nav item -5</p>
        </aside>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
