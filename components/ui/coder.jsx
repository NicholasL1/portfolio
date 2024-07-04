import { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { ThemeContext } from "../Header";
import codingBoyDark from "@/public/assets/coding-boy-dark.json";
import codingBoyLight from "@/public/assets/coding-boy-light.json";

const Coder = () => {
  const { darkMode } = useContext(ThemeContext) || false;
  const [key, setKey] = useState(0); // State to force re-render
  const [codingBoy, setCodingBoy] = useState(
    darkMode ? codingBoyDark : codingBoyLight
  );

  useEffect(() => {
    setCodingBoy(darkMode ? codingBoyDark : codingBoyLight);
    setKey((prevKey) => prevKey + 1); // Update key to force re-render
  }, [darkMode]);

  return <Lottie key={key} animationData={codingBoy} loop={true} />;
};

export default Coder;
