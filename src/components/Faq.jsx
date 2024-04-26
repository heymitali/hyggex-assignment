import { faqQuestions } from "../utils/constants";
import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <div>
      <h1 className="font-inter text-4xl font-bold leading-none tracking-tight text-left mb-[30px] mt-[100px] text-transparent bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]">
        FAQ
      </h1>
      <div className="flex flex-col">
        {faqQuestions.map((question, index) => (
          <FaqCard question={question} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
