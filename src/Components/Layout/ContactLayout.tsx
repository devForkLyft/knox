import React from "react";

interface ContactLayoutProps {
  mainText: string;
  subText?: string;
  description?: string;
  locations?: string[];
  children: React.ReactNode;
  layoutBgColor: string;
  layoutTextColor: string;
}

const ContactLayout = ({  mainText, subText, description, locations, layoutBgColor, layoutTextColor, children }: ContactLayoutProps) => {
  return (
    <div className="h-full" style={{backgroundColor: layoutBgColor}}>
     <div className="md:flex md:flex-row flex-col justify-around gap-10 px-5">
        <div className="w-auto md:w-[300px] flex flex-col gap-5 text-base font-normal leading-6" style={{color: layoutTextColor}}>
          <p className="text-2xl mono">{mainText}</p>
          <p className="text-base font-normal leading-6" style={{color: layoutTextColor}}>{subText? subText : ""}</p>
          <p className="text-base font-normal leading-6" style={{color: layoutTextColor}}>{description? description : ""}</p>
         {locations && <div className="w-auto md:w-[200px] flex flex-col gap-2.5 pt-5 leading-6">
            <p>Or drop by at any of our studios:</p>
            <div className="flex items-center gap-2.5">
              {locations?.map((location, index) => (
                <span
                  key={index}
                  className="hover:underline cursor-pointer"
                  style={{color: layoutTextColor}}
                >
                  {location}
                  {index < (locations?.length ?? 0) - 1 && " ,"}
                </span>
              ))}
            </div>
          </div>}
        </div>

        {children}
      </div>
    </div>
  );
};

export default ContactLayout; 