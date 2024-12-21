import axios from "axios";
import { Button } from "../pages/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(response => {
        setUsers(response.data.alluser);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [filter]);

  // Filter the users based on the search query
  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(filter.toLowerCase());
  });

  return (
    <>
      <div className="font-bold mt-6 text-lg">
        Users
      </div>
      <div className="my-6">
        <input 
          onChange={(e) => { setFilter(e.target.value); }} 
          placeholder="Search Users" 
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div>
        {filteredUsers.map(user => <User user={user} key={user.username} />)}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full w-12 h-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]} {/* Display first letter of firstName */}
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <Button 
          onClick={() => {
            navigate("/sendmoney?id=" + user.id + "&name=" + user.firstName);
          }} 
          label={"Send Money"} 
        />
      </div>
    </div>
  );
}
