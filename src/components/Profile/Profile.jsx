import { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simulate fetching profile data
    const fetchProfileData = () => {
      const data = {
        name: "John Doe",
        email: "john.doe@example.com",
        address: "123 Main St, Anytown, USA",
        phone: "(555) 555-5555",
        avatarUrl: "https://via.placeholder.com/150",
      };
      setProfileData(data);
    };

    fetchProfileData();
  }, []);

  const handleChangeAvatar = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevState) => ({
          ...prevState,
          avatarUrl: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile">
      <h1>Profile</h1>
      {profileData ? (
        <div className="profile-details">
          <img src={profileData.avatarUrl} alt="Profile" className="profile-avatar" />
          <label htmlFor="file-input" className="profile-file-label">Change Avatar</label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleChangeAvatar}
            className="profile-file-input"
          />
          <p><strong>Name:</strong> {profileData.name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>Phone:</strong> {profileData.phone}</p>
        </div>
      ) : (
        <div className="loading-message">Loading...</div>
      )}
    </div>
  );
};

export default Profile;
