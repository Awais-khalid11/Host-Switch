import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { ROUTES } from "../../constants/Routes";

const PasswordModal = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Button
          variant="whitebtn"
          className="px-6 py-4 w-[339px]"
          onClick={() => navigate(ROUTES.LOGIN)}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default PasswordModal;
