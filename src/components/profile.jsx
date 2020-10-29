import React from "react";
import {useHistory} from "react-router-dom";

const Profile = (props) => {
    const history = useHistory()
  return (
    <>
      <h1>profile</h1>
      <button
        onClick={() => {
          history.push("/home");
        }}
      >
        go to home
      </button>
    </>
  );
};
export default Profile;
