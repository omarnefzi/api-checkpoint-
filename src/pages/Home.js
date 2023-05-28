import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTables from "../components/UsersTables";
import { fetchUsers } from "../store/usersSlice";



const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  useEffect(() => {
    setListOfUSer(users);
  }, [users]);

  console.log(listOfUSer);

  return (
    <>
      <div className="container display flex">
        {listOfUSer.map((user) => {
          return <UsersTables key={user.id} user={user} />;
        })}
      </div>
    
    </>
  );
};

export default Home;
