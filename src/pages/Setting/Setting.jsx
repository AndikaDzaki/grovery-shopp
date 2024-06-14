import { useState } from 'react';
import './Setting.css';

const Setting = () => {
  const [selectedTab, setSelectedTab] = useState('profile');

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return <Profile />;
      case 'address':
        return <Address />;
      case 'change-password':
        return <ChangePassword />;
      case 'preferences':
        return <Preferences />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="setting-container">
      <div className="sidebar">
        <h2>Settings</h2>
        <ul>
          <li className={selectedTab === 'profile' ? 'active' : ''} onClick={() => setSelectedTab('profile')}>Profile</li>
          <li className={selectedTab === 'address' ? 'active' : ''} onClick={() => setSelectedTab('address')}>Address</li>
          <li className={selectedTab === 'change-password' ? 'active' : ''} onClick={() => setSelectedTab('change-password')}>Change Password</li>
          <li className={selectedTab === 'preferences' ? 'active' : ''} onClick={() => setSelectedTab('preferences')}>Preferences</li>
        </ul>
      </div>
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

const Profile = () => (
  <div>
    <h3>Profile Information</h3>
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Phone:
        <input type="tel" />
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
);

const Address = () => (
  <div>
    <h3>Address Information</h3>
    <form>
      <label>
        Address Line 1:
        <input type="text" />
      </label>
      <label>
        Address Line 2:
        <input type="text" />
      </label>
      <label>
        City:
        <input type="text" />
      </label>
      <label>
        State/Province:
        <input type="text" />
      </label>
      <label>
        ZIP/Postal Code:
        <input type="text" />
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
);

const ChangePassword = () => (
  <div>
    <h3>Change Password</h3>
    <form>
      <label>
        Current Password:
        <input type="password" />
      </label>
      <label>
        New Password:
        <input type="password" />
      </label>
      <label>
        Confirm New Password:
        <input type="password" />
      </label>
      <button type="submit">Change Password</button>
    </form>
  </div>
);

const Preferences = () => (
  <div>
    <h3>Account Preferences</h3>
    <form>
      <label>
        Language:
        <select>
          <option>Indonesia</option>
          <option>English</option>
          <option>French</option>
        </select>
      </label>
      <label>
        Currency:
        <select>
          <option>IDR</option>
          <option>EUR</option>
          <option>USD</option>
        </select>
      </label>
      <button type="submit">Save</button>
    </form>
  </div>
);

export default Setting;
