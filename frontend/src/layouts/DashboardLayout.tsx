import React from "react";
const DashboardLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <header className="flex items-center justify-between bg-gray-900 px-0 pl-4">
        <div className="flex items-center">
          <img src="logo_fairpay.png" alt="Logo" className="h-1/4 w-2/6" />
        </div>
        <div className="flex items-center justify-end">
          <img
            src="fair_pay_header.jpg"
            className="h-[11rem] w-[26rem] rounded-tr-3xl"
            alt="right-header"
          />
        </div>
      </header>

      <div className="container mx-auto mt-8">{children}</div>
    </>
  );
};

export default DashboardLayout;
