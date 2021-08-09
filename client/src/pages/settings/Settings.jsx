import React, { useContext, useState } from "react";
import SideBar from "../../components/sideBar/SideBar";
import "./settings.css";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_START",
    });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({
        type: "UPDATE_SUCCESS",
        payload: res.data,
      });
      setTimeout(function () {
        setSuccess(false);
      }, 5000);
      console.log(res.data);
    } catch (err) {
      dispatch({
        type: "UPDATE_FAILURE",
      });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              hidden
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            required
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            required
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{
                backgroundColor: "rgb(0, 180, 75)",
                color: "#fff",
                textAlign: "center",
                marginTop: "20px",
                fontSize: "20px",
                border: "1px solid rgb(0, 180, 75)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Profile has been updated ✔️
            </span>
          )}
        </form>
      </div>
      <SideBar />
    </div>
  );
}
