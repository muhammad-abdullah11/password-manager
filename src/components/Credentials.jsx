import { useState ,useContext} from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import CredentialsContext from "../Contexts/credentialsContext";
import { CredentialsProvider } from "../Contexts/credentialsContext";

const credentials = [
  {
    id: 1,
    name: "Google",
    gmail: "google@gmail.com",
    username: "123456789",
    password: "password123",
  },
  {
    id: 2,
    name: "Facebook",
    gmail: "facebook@gmail.com",
    username: "123456789",
    password: "password123",
  },
  {
    id: 3,
    name: "Twitter",
    gmail: "twitter@gmail.com",
    username: "123456789",
    password: "password123",
  },
  {
    id: 4,
    name: "LinkedIn",
    gmail: "linkedin@gmail.com",
    username: "123456789",
    password: "password123",
  },
];

const iconMap = {
  Google: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path fill="#2A5BD7" d="M15.078 15.625c1.758-1.64 2.54-4.375 2.07-6.992h-6.992v2.89h3.985c-.157.938-.703 1.72-1.485 2.227z"></path><path fill="#34A853" d="M3.516 13.32a7.5 7.5 0 0 0 11.562 2.305l-2.422-1.875c-2.07 1.367-5.508.86-6.68-2.344z"></path><path fill="#FBBC02" d="M5.975 11.406a4.45 4.45 0 0 1 0-2.851L3.515 6.64c-.9 1.797-1.173 4.336 0 6.68z"></path><path fill="#EA4335" d="M5.977 8.555c.859-2.696 4.53-4.258 6.992-1.954l2.148-2.109C12.07 1.562 6.133 1.68 3.516 6.641z"></path></svg>,
  Facebook: <FaFacebook className="text-blue-600" />,
  Twitter: <FaTwitter className="text-sky-500" />,
  LinkedIn: <FaLinkedin className="text-blue-700" />,
};

const Credentials = () => {
  const { credentials } = useContext(CredentialsContext);
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (id) => {
    setShowPassword((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="max-w-7xl mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <section>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Credentials</h1>
        <p className="text-gray-600">
          Manage and view your saved credentials securely.
        </p>
        <CreateCredential />
      </section>

      {credentials.map((credential) => (
        <div
          key={credential.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-xl">
              {iconMap[credential.name]}
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {credential.name}
            </h2>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-400" />
              <span>{credential.gmail}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUser className="text-gray-400" />
              <span>{credential.username}</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FaLock className="text-gray-400" />
                <span>
                  {showPassword[credential.id]
                    ? credential.password
                    : "••••••••"}
                </span>
              </div>

              <button
                onClick={() => togglePassword(credential.id)}
                className="text-gray-500 hover:text-gray-800 transition"
              >
                {showPassword[credential.id] ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Credentials;



function CreateCredential() {
  const {addCredential} = useContext(CredentialsContext);
  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =()=>{
    const newCredential = {
      id: Date.now(),
      name,
      gmail,
      username,
      password
  }
  addCredential(newCredential);
  setName("");
  setGmail("");
  setUsername("");
  setPassword("");
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-100">
        <form action="" onSubmit={handleSubmit}>

        <div className="flex items-center gap-3 mb-4">
          <div className="text-xl">
            {iconMap[name] || <FaUser className="text-gray-400" />}
          </div>
          <input
            type="text"
            placeholder="Platform (e.g. Google)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-lg font-semibold text-gray-800 outline-none bg-transparent"
          />
        </div>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaUser className="text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <FaLock className="text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none"
            />
          </div>
        </div>

        <button 
        type="submit"
        className="mt-5 w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Save Credential
        </button>
              </form>
      </div>
    </div>
  );
}
