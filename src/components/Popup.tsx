import React, { useEffect, useState } from "react";
import { IoSadOutline, IoHappyOutline } from "react-icons/io5";

interface PopupProps {
  message: string;
  success: boolean;
  onClose: () => void;
}

const Popup = ({ message, success, onClose }: PopupProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // duration must match transition duration
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 text-colour2`}>
      <div
        className={`bg-background rounded-[20px] w-[300px] md:w-[400px] border-[4px] border-colour2 flex flex-col items-center justify-center p-[30px] gap-[10px] transform transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex justify-center text-center text-[40px]">
          {success ? <IoHappyOutline /> : <IoSadOutline />}
        </div>
        <p className="text-center text-[16px]">{message}</p>
        <button
          onClick={handleClose}
          className="cursor-pointer font-bold text-[20px] border-[3px] border-colour2 py-[5px] px-[15px] rounded-full bg-background hover:bg-colour2 hover:text-background transition-colors duration-500 ease-in-out"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default Popup;
