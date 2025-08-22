import { useState } from "react";
import { helpText } from "./Constants";
import desktopBackground from "../assets/images/background-pattern-desktop.svg";
import mobileBackground from "../assets/images/background-pattern-mobile.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";

function Background() {
  return (
    <>
      <img
        className="absolute w-full object-cover hidden sm:block"
        src={desktopBackground}
        alt="Purple Background"
      />

      <img
        className="absolute w-full object-cover block sm:hidden"
        src={mobileBackground}
        alt="Purple Background"
      />
    </>
  );
}

function Heading() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <img className="w-8 h-8 sm:h-10 sm:w-10" src="../assets/images/icon-star.svg" alt="Star Icon" />
      <h1 className="text-4xl sm:text-5xl font-bold"> FAQs </h1>
    </div>
  );
}

function Section({ children, needBorder = true, text = "Default" }) {
  const [toggle, setToggle] = useState(false);
  const border = "pb-6 border-b-2 border-purple-100";

  return (
    <div className={`flex flex-col gap-4 ${needBorder && border}`}>
      <div className="flex flex-row justify-between items-center gap-14">
        <h2 className="font-semibold text-md transition-colors ease-in-out duration-200 hover:text-purple-600">
          {children}
        </h2>
        <img 
          src={toggle? minusIcon: plusIcon}
          alt={`${toggle? "Minus": "Plus"} Icon`}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && <p className="text-purple-900 animate-fade-in"> {text} </p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <div className="relative flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-8 sm:gap-10 bg-white shadow-lg rounded-lg sm:rounded-xl p-8 sm:p-10 max-w-93 sm:max-w-150">
          <Heading />
          <div className="flex flex-col gap-6">
            <Section text={helpText}>What is Frontend Mentor, and how will it help me?</Section>
            <Section>is Frontend Mentor free?</Section>
            <Section>
              Can I use Frontend Mentor projects in my portfolio?
            </Section>
            <Section needBorder={false}>
              How can I get help if I'm stuck on a challenge?
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
