import React, { useState } from "react";
import Button from "../Button/Button";

const PasswordModal = () => {
  return (
    <div>
        <div className="flex items-center gap-2.5 mb-4">
          <Button variant="whitebtn" className="px-6 py-4">
            Sign In
          </Button>
        </div>
    </div>
  );
};

export default PasswordModal;
