import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <p>
        <small>Thank you for visiting our website</small>
      </p>
      <ul>
        <small className="flex justify-center gap-4 my-2">
          <li>
            <a href="/">terms</a>
          </li>
          <li>
            <a href="/">privacy</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
        </small>
      </ul>
    </div>
  );
};

export default Footer;
