import { NightMode } from "../styles/Elements.style";
import { BsSun, BsMoon } from "react-icons/bs";

const NightModeToggle = ({ theme, setTheme }) => {
  
  const toggleTheme = () => {
      theme ? setTheme(false) : setTheme(true);
  };

  return (
    <NightMode>
      {theme ? (
        <BsSun onClick={toggleTheme} />
      ) : (
        <BsMoon onClick={toggleTheme} />
      )}
    </NightMode>
  );
};

export default NightModeToggle;
