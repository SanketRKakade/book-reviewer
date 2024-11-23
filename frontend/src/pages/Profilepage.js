import React from "react";

const ProfilePage = () => {
  // Replace with actual user data if authentication is implemented
  const user = { name: "John Doe", email: "johndoe@example.com" };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg">Name: {user.name}</p>
      <p className="text-lg">Email: {user.email}</p>
    </div>
  );
};

export default ProfilePage;
