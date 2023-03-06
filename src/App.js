import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// sonradan responsive ekle

function App() {
  return (
    <div className="bg-slate-100 h-screen flex flex-row justify-around main-container">
      {/* Left Side*/}
      <div className="flex text-center flex-col space-y-5 justify-center items-center h-screen">
        <div className="text-4xl font-bold">
          <p>Welcome Back !</p>
        </div>

        <div className="text-slate-400">
          <p>
            Lorem ipsum dolor sit amet, sed do eiusmod tempor
            <br /> ut labore et dolore magna aliqua. Sed arcu.
          </p>
        </div>

        <div>
          <button className="bg-blue-600 text-white font-bold py-2 px-10 rounded-full">
            SIGN IN
          </button>
        </div>
      </div>

      {/* Right Side*/}
      <div className="flex flex-col space-y-6 h-screen justify-center items-center">
        <div className="text-4xl font-bold">
          <p>Create Account</p>
        </div>

        <div className="flex flex-row space-x-9">
          <FaFacebook
            size={22}
            className="text-zinc-500 rounded-full cursor-pointer"
          />
          <FaLinkedinIn size={22} className="text-zinc-500 cursor-pointer" />
          <FaTwitter size={22} className="text-zinc-500 cursor-pointer" />
        </div>

        <div className="flex flex-col space-y-5 ">
          <input
            type="text"
            placeholder="Name"
            className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Email"
            className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none bg-transparent border border-zinc-500 px-5 h-10 rounded-full"
          />
        </div>

        <div>
          <button className="bg-blue-600 text-white font-bold py-2 px-10 rounded-full">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
