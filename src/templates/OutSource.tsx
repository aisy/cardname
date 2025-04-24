import * as React from 'react';

interface ITemplateOutsourceProps {
  fullName: string | undefined;
}

const TemplateOutsource: React.FunctionComponent<ITemplateOutsourceProps> = ({ fullName }) => {
  return (
    <div>
      <div className="ring ring-gray-300 rounded-xl w-[260px] h-[407.5px] bg-blue-900 shadow-2xl">
        <div className="flex flex-col h-full items-center">
          <div className=' h-2/5 w-full rounded-t-xl'>
            <div className="flex items-center justify-center h-fit mb-4 px-6 py-6">
              <img className="h-8 w-auto items-center" src={'/LogoSatkomindo.png'} alt="logo-satkom" />
            </div>
          </div>

          <div className="bg-white h-3/5 w-full items-center rounded-t-4xl rounded-b-xl">
            <div className='flex items-center justify-center h-fit -mt-16'>
              <div className='h-36 w-36 bg-gray-400 border-2 border-white rounded-full flex items-center justify-center bg-center'>
                asdasdas
              </div>
            </div>
            <div className="flex flex-col space-y-1 p-3">
              <div className="w-full font-bold text-xl leading-none capitalize text-center">
                {fullName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateOutsource;
