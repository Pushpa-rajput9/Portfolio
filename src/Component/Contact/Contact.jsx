import React from "react";
import github from "./317712_code repository_github_repository_resource_icon.png";

function Contact() {
  return (
    <div className=" bg-gray-200  ">
      <div className="flex w-full justify-center items-center  ">
        <button className=" w-60 relative bottom-20  max-md:w-52 h-12 max-md:text-lg border-b-4 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-amber-500 shadow-2xl shadow-black ">
          Contact Me
        </button>
      </div>
      <div className="mid flex justify-center items-center max-sm:flex  max-sm:flex-col max-sm:items-center max-sm:justify-center">
        <div className="left w-2/4 max-sm:w-full flex flex-wrap flex-col  lg:p-20 max-sm:p-2">
          <h1 className=" lg:text-4xl max-sm:text-2xl pb-5 underline font-bold text-blue-500  max-sm:p-2">
            Connect With me
          </h1>
          <p className="lg:text-xl max-sm:text-sm  decoration-from-font text-gray-700 mb-6  max-sm:p-2">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className=" bg-gray-300 w-full  max-sm:p-2 max-sm:pb-5 p-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="15c123b3-0331-49f4-ac60-7f03c8f7b376"
            />
            <label className=" text-lg ">Name</label>
            <br />
            <input
              name="Name"
              className="pl-3 mt-3 mb-5 bg-slate-800 text-white w-full h-12 rounded-xl "
              type="text"
              placeholder="Enter your name"
            />
            <br />
            <label className=" text-lg">Email</label>
            <br />
            <input
              name="Email"
              className=" mt-3 mb-5 pl-3 bg-slate-800 text-white w-full h-12 rounded-xl "
              type="email"
              placeholder="XYZW@example.com"
            />
            <br />
            <label className=" text-lg">Message</label>
            <br />
            <textarea
              name="Message"
              className="mt-3  flex text-start pl-3 bg-slate-800 text-white w-full h-40 rounded-xl "
              type="text"
              placeholder="Enter your message here"
            />
            <br />
            <a
              className="mt-5 underline mr-10 max-sm:mb-4"
              href="mailto:pr4541285@gmail.com"
            >
              Send me email directly
            </a>

            <div className="flex w-full justify-end items-center max-sm:mt-7">
              <button
                formTarget="_blank"
                className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="right w-2/4 max-sm:w-full flex flex-col items-center  max-sm:p-5">
          <div className="top m-8 w-64 max-sm:mb-4">
            <h1 className=" font-bold text-5xl max-sm:text-3xl  decoration-from-font mb-5">
              Email
            </h1>
            <p className="text-lg text-blue-700 font-semibold">
              pr4541285@gamil.com
            </p>
          </div>
          <div className="mid m-8 w-64 max-sm:mb-4">
            <h1 className=" font-bold text-5xl max-sm:text-3xl decoration-from-font mb-5">
              Address
            </h1>
            <p className="text-lg text-blue-700 font-semibold">
              New Ashok Nagar, East Delhi
              <br />
              Pincode: 110096
            </p>
          </div>

          <div className="last m-8 w-64 max-sm:mb-4">
            <h1 className=" font-bold text-5xl max-sm:text-3xl decoration-from-font mb-5">
              Social
            </h1>
            <div className="flex  gap-5  flex-wrap w-64">
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
