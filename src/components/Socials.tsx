import React from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Socials = () => {
  return (
    <div className="md:p-10 w-full flex flex-col">
      <div
        className="bg-gradient-dark w-full flex flex-col md:flex-row sm:p-10
      p-4 rounded-tl-3xl rounded-br-[45px] gap-5"
      >
        <div className="w-full md:w-3/5 sm:px-10 text-left">
          <p className="font-josefin xxl:text-6xl xl:text-4x md:text-3xl text-xl text-white">
            The{" "}
            <span className="text-primary font-semibold">BARBERSHOP NAME</span>{" "}
            is a place decorated in my own way, always with good music and
            representing an authentic American barbershop in the best way, all
            of which combined makes&nbsp;
            <span className="text-primary font-semibold">BARBERSHOP NAME</span>{" "}
            a different place. Besides a great haircut, at&nbsp;
            <span className="text-primary font-semibold">BARBERSHOP NAME</span>{" "}
            you can enjoy a place where men can go to be my friend, I really
            love the relationship I have with clients and I want them to feel
            comfortable here. So come get a haircut at&nbsp;
            <span className="text-primary font-semibold">
              BARBERSHOP NAME
            </span>, relax and a cold one on me.
          </p>
        </div>
        <div className="md:w-2/5 w-full border-solid border-8 border-secondary rounded-tl-3xl rounded-br-3xl">
          <img
            src="/images/place.jpg"
            className="rounded-tl-2xl rounded-br-2xl w-full h-full object-cover"
            alt="place"
          />
        </div>
      </div>

      <div className="py-10 flex flex-col md:flex-row justify-center items-start text-center gap-5">
        <div className="p-10 bg-primary rounded-bl-3xl text-black font-bold text-4xl font-zilla">
          <h1>
            Monday <span className="font-josefin">&#10233;</span> Friday
          </h1>
          <p>
            10<span className="text-white font-josefin">am to&nbsp;</span>8
            <span className="text-white font-josefin">pm</span>
          </p>
        </div>
        <div className="p-10 bg-primary rounded-br-3xl text-black font-bold text-4xl font-zilla">
          <h1>Saturday</h1>
          <p>
            10<span className="text-white font-josefin">am to&nbsp;</span>4
            <span className="text-white font-josefin">pm</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
