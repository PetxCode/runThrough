import { Link } from "react-router-dom";
import Button from "../components/Button";
import { MdArrowDownward, MdArrowUpward, MdRecycling } from "react-icons/md";
import { useState } from "react";
const Header = () => {
  const [header, setHeader] = useState([
    { id: 1, title: "Home", url: "/", state: false },
    { id: 2, title: "About", url: "/about", state: false },
    { id: 1, title: "Product", url: "/product", state: false },
    { id: 2, title: "Contact", url: "/contact", state: false },
  ]);

  return (
    <div className="flex items-center h-[60px] border-b justify-between">
      <div className="flex gap-5 items-center">
        <div>Logo</div>
        <div className="flex gap-3 font-medium">
          {header?.map((el) => (
            <div
              className="flex items-center"
              onMouseEnter={() => {
                el.state = true;

                setHeader([...header]);
              }}
              onMouseLeave={() => {
                el.state = false;

                setHeader([...header]);
              }}
            >
              <Link to={el.url}>{el.title}</Link>
              {!el.state ? <MdArrowDownward /> : <MdArrowUpward />}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        <Button title="Login" />
        <Button title="Register" color icon={<MdRecycling />} />
      </div>
    </div>
  );
};

export default Header;
