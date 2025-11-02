import { useState } from 'react';

const UserProfileUpdate = () => {
  const [profilePic, setProfilePic] = useState('https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp');
  const [name, setName] = useState('John Doe');
  const [newName, setNewName] = useState('');
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNameUpdate = () => {
    if (newName) {
      setName(newName);
      setNewName('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
   
    if (file) {
      setFile(URL.createObjectURL(file));
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleUpdateProfile = () => {
    if (email !== confirmEmail) {
      setEmailError('Emails do not match.');
    } else {
      setEmailError('');
      // Handle email update logic here
    }
  };

  return (
    <section className=" bg-gray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
          <div className="px-6 py-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    alt="Profile"
                    src={profilePic}
                    className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-6">
                <h3 className="text-2xl font-semibold leading-normal mb-2 text-gray-700">
                  {name}
                </h3>
                <input
                  type="text"
                  value={newName}
                  onChange={handleNameChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-3/4 md:w-1/2 mx-auto"
                  placeholder="Enter new name"
                />
                <button
                  onClick={handleNameUpdate}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Update Name
                </button>
              </div>
            </div>
            <div className="mt-10 text-center flex flex-col items-center">
              <label className="block mb-4">
                <span className="text-gray-700">Update Profile Picture:</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="mt-2 block text-gray-500"
                />
              </label>
            </div>
            <div className="mt-10 px-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Confirm Email:
                </label>
                <input
                  type="email"
                  value={confirmEmail}
                  onChange={handleConfirmEmailChange}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                  placeholder="Confirm your email"
                />
              </div>
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
              <button
                onClick={handleUpdateProfile}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfileUpdate;
