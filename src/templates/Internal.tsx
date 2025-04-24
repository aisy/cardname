import * as React from 'react';

interface ITemplateInternalProps {
  fullName: string | undefined;
}

const TemplateInternal: React.FunctionComponent<ITemplateInternalProps> = ({ fullName }) => {
  return (
    <div>
      <div className="ring ring-gray-300 rounded-xl w-[260px] h-[407.5px] shadow-2xl">
        <div className="flex flex-col h-full">
          <div className="py-2 px-4">
            <div className="w-full mb-4">
              <img className="h-8" src={'/LogoSatkomindo.png'} alt="logo-satkom" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="w-full font-bold text-xl leading-tight">
                {fullName}
              </div>
              <div className="h-0.5 w-2/4 bg-amber-500"></div>
            </div>
          </div>
          <div className="flex flex-row flex-1">
            <div className="w-1/4 h-full rounded-bl-xl bg-amber-100"></div>
            <div className="w-3/4 h-full rounded-br-xl bg-red-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateInternal;
