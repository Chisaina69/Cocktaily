import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black py-4 text-white text-center">
      <div className="flex justify-center mb-4">
        <a
          href="https://twitter.com/muyekwe_quincy"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </a>
        <a
          href="https://github.com/Chisaina69"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Cocktaily. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
