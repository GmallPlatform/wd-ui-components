import { useEffect, useState } from "react";
import { Icon_loader } from "./Icons";
export const ParangaForViewport = () => {
  const [dispalyElement, setDispalyElement] = useState(false);
  const parangaSetDisplay = () => {
    setDispalyElement(true);
  };
  const parangaSetHide = () => {
    setDispalyElement(false);
  };
  useEffect(() => {
    window.addEventListener("hideParange", parangaSetHide);
    window.addEventListener("showParange", parangaSetDisplay);

    return () => {
      window.removeEventListener("hideParange", parangaSetHide);
      window.removeEventListener("showParange", parangaSetDisplay);
    };
  }, []);
  return (
    <>
      {dispalyElement && (
        <div className="fixed inset-0 top-0 left-0 z-[1311] flex items-center justify-center w-screen h-screen transition-all duration-500 ease-in-out bg-[rgba(255,255,255,0.65)]">
          <Icon_loader className="rotate" />
        </div>
      )}
    </>
  );
};

export default ParangaForViewport;
