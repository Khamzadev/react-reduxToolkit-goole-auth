import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Board}  from "./Board";
import  {Unlogged}  from "./Unlogged";
import { setLogout } from "../../redux/reducers/generalSlice";
import "./style.css";

const Home = () => {
  const { isLogged, user } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(setLogout());

  return (
    <div className="page">
      <div className="board">
        {isLogged ? <Board user={user} logout={handleLogout} /> : <Unlogged />}
      </div>
    </div>
  );
};

export default Home;
