import { Outlet } from "react-router-dom";
import Profile from "./ClassComponent";
const Contact = () => {
  return (
    <div className="mt-[100px]">
      <h1>Contact us page</h1>
      <Outlet />
    </div>
  );
};
export default Contact;
