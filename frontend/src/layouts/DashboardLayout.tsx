import React from "react";

const DashboardLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <header className="flex items-center justify-between bg-gray-900">
        <div className="container mx-auto flex items-center justify-between bg-gray-900 px-0 pl-4">
          <div className="flex items-center">
            <a href="/" className="contents">
              <img src="/logo_fairpay.png" alt="Logo" className="h-1/4 w-2/6" />
            </a>
          </div>
          <div className="hidden items-center justify-end md:flex ">
            <img
              src="/fair_pay_header.jpg"
              className="h-[11rem] w-[26rem] rounded-tr-3xl"
              alt="right-header"
            />
          </div>
        </div>
      </header>
      <div
        className=" container h-[1px] w-full"
        style={{
          display: "block",
          height: "9px",
          background: "#262626",
          marginTop: "-9px",
        }}
      ></div>

      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
