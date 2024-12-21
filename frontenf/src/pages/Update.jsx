import { useState } from "react";
import { Heading } from "../Components/Heading";
import { Inputbox } from "../Components/Inputbox";
import { Subheading } from "../Components/Subheading";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");

  const handleSubmit = async () => {
    // Check if any field is empty
    if(! username.endsWith("@gmail.com")){
      alert("invaild email please enter a vaild email")
      return;
    }
    if (firstName === "" || lastName === "" || passsword === "") {
      alert("Please fill in all fields. None of the fields can be empty.");
      return;
    }

    // If all fields are filled, make the API call
    try {
      await axios.put("http://localhost:3000/user/update", {
        username,
        lastName,
        firstName,
        passsword, // Fix typo here from 'passsword' to 'password'
      });
      alert("Your details have been updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      alert("There was an error updating your details. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-90 text-center">
            <Heading label={"Update"} />

            <Subheading label={"Update your credentials here!"} />
            <Inputbox
              onChange={(e) => setUsername(e.target.value)}
              label={"Username"}
              placeholder={"username@gmail.com"}
            />
            <Inputbox
              onChange={(e) => setFirstName(e.target.value)}
              label={"First Name"}
              placeholder={"Tendu"}
            />
            <Inputbox
              onChange={(e) => setLastName(e.target.value)}
              label={"Last Name"}
              placeholder={"Kumar"}
            />
            <Inputbox
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
              placeholder={"********"}
              type="password" // Added 'password' type for better UX
            />
            <div className="py-2">
              <Button onClick={handleSubmit} label={"Update"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
