import mail from "./4202011_email_gmail_mail_logo_social_icon.png";
function Footer() {
  return (
    <div>
      <section>
        <footer className="flex lg:gap-24  sm:gap-10 lg:flex-row sm:flex-col  shadow-inner shadow-black bg-slate-400 h-24  sm:h-fit sm:w-full  sm:flex sm:flex-wrap">
          <p className="flex justify-start items-start text-start ">
            Copyright @ 2024 LOGO, All rights reserved.
          </p>
          <div>
            <h1 className=" font-semiboldm text-lg underline mb-4">
              Connect with me
            </h1>
            <ul className="flex justify-start items-center  lg:gap-24 sm:gap-10">
              <li type="none">
                <a href="https://github.com/Pushpa-rajput9" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li type="none">
                <a
                  href="https://www.instagram.com/pushpa._.rajput._/?igsh=cDhweHE5eW8xYXVw"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li type="none">
                <a
                  href="https://www.linkedin.com/in/pushpa-rajput-3ba4491a0/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.com/users/25490757"
                  target="_blank"
                >
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg"
                    alt="25490757"
                    height="20"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a href="https://hashnode.com/@pushpa662" target="_blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hashnode.svg"
                    alt="@pushpa662"
                    height="20"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.leetcode.com/pushparajput" target="_blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
                    alt="pushparajput"
                    height="20"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/ja8379by" target="_blank">
                  <img
                    align="center"
                    src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg"
                    alt="ja8379by"
                    height="20"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:pr4541285@gmail.com" target="_blank">
                  <img
                    align="center"
                    src={mail}
                    alt="ja8379by"
                    height="20"
                    width="20"
                  />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
