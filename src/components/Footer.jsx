import React from "react";
import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="">
      <Heading
        title={'Gadget Heaven'}
        subtitle={'Leading the way in cutting-edge technology and innovation.'}
      ></Heading>
      <hr className="w-11/12 mx-auto" />
      <footer className="footer text-base  text-[#676363] flex justify-evenly py-5">
        <nav>
          <h6 className="font-extrabold text-xl text-[#06092e]">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-extrabold text-xl text-[#06092e]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-extrabold text-xl text-[#06092e]">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
