import React from "react";
import Spinner from "../assets/loading.gif";

const LoadingSpinner: React.FC = () => {
  return (
    <div>
      <h3>잠시만 기다려주세요.</h3>
      <img src={Spinner} alt="로딩" width="10%" />
    </div>
  );
};

export default LoadingSpinner;
