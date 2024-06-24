import React from "react";
import github from "./317712_code repository_github_repository_resource_icon.png";

function Contact() {
  return (
    <div className=" bg-gray-200 ">
      <div className="flex w-full justify-center items-center relative bottom-7  z-10 ">
        <button className=" w-60 h-16 border-b-4 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-amber-500 shadow-2xl shadow-black ">
          Contact Me
        </button>
      </div>
      <div className="mid flex flex-col flex-wrap  justify-center items-center">
        <div className="left w-2/4 flex flex-wrap flex-col  lg:p-20 max-sm:p-0">
          <h1 className=" lg:text-4xl max-sm:text-2xl pb-5 underline font-bold text-blue-500">
            Connect With me
          </h1>
          <p className="lg:text-xl max-sm:text-sm  decoration-from-font text-gray-700 mb-6">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>
          <form method="get">
            <label className=" text-lg ">Name</label>
            <br />
            <input
              className="pl-3 mt-3 mb-5 bg-slate-800 text-white w-full h-12 rounded-xl "
              type="text"
              placeholder="Enter your name"
            />
            <br />
            <label className=" text-lg">Email</label>
            <br />
            <input
              className=" mt-3 mb-5 pl-3 bg-slate-800 text-white w-full h-12 rounded-xl "
              type="email"
              placeholder="XYZW@example.com"
            />
            <br />
            <label className=" text-lg">Message</label>
            <br />
            <textarea
              className="mt-3  flex text-start pl-3 bg-slate-800 text-white w-full h-40 rounded-xl "
              type="text"
              placeholder="Enter your message here"
            />
            <br />
            <a
              className="mt-5 underline mr-10"
              href="mailto:pr4541285@gmail.com"
            >
              Send me email directly
            </a>

            <div className="flex w-full justify-end items-center">
              <button className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400">
                <a href="mailto:pr4541285@gmail.com">Submit</a>
              </button>
            </div>
          </form>
        </div>
        <div className="right w-2/4 flex flex-col items-end  lg:p-20 max-sm:p-0">
          <div className="top m-8 w-64">
            <h1 className=" font-bold text-5xl decoration-from-font mb-5">
              Email
            </h1>
            <p className="text-lg text-blue-700 font-semibold">
              pr4541285@gamil.com
            </p>
          </div>
          <div className="mid m-8 w-64">
            <h1 className=" font-bold text-5xl decoration-from-font mb-5">
              Address
            </h1>
            <p className="text-lg text-blue-700 font-semibold">
              New Ashok Nagar, East Delhi
              <br />
              Pincode: 110096
            </p>
          </div>

          <div className="last m-8 w-64">
            <h1 className=" font-bold text-5xl decoration-from-font mb-5">
              Social
            </h1>
            <div className="flex  gap-5 flex-wrap w-64">
              <a
                href="https://linkedin.com/in/pushpa-rajput-3ba4491a0"
                target="_blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="pushpa-rajput-3ba4491a0"
                  height="30"
                  width="40"
                />
              </a>
              <a
                href="https://stackoverflow.com/users/25490757"
                target="_blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
                  alt="25490757"
                  height="30"
                  width="40"
                />
              </a>
              <a href="https://instagram.com/pushpa._.rajput._" target="_blank">
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                  alt="pushpa._.rajput._"
                  height="30"
                  width="40"
                />
              </a>
              <a href="https://hashnode.com/@pushpa662" target="_blank">
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg"
                  alt="@pushpa662"
                  height="30"
                  width="40"
                />
              </a>
              <a href="https://www.leetcode.com/pushparajput" target="_blank">
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                  alt="pushparajput"
                  height="30"
                  width="40"
                />
              </a>
              <a href="https://discord.gg/ja8379by" target="_blank">
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
                  alt="ja8379by"
                  height="30"
                  width="40"
                />
              </a>
              <a
                className=" w-12 h-12"
                href="https://github.com/Pushpa-rajput9"
                target="_blank"
              >
                <img
                  align="center"
                  src={github}
                  alt="ja8379by"
                  height="30"
                  width="40"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
