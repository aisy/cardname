import * as React from 'react';
import { Image } from 'antd';

interface ITemplateInternalProps {
  fullName: string | undefined;
  images: string | null;
}

const TemplateInternal: React.FunctionComponent<ITemplateInternalProps> = ({ fullName, images }) => {
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
            <div className="w-3/4 h-full rounded-br-xl bg-red-100">
              {
                images && (
                  <Image
                    preview={false}
                    src={images}
                    alt="Preview"
                    width={160}
                    height={160}
                    className='rounded-full max-w-xs'
                  />
                )
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateInternal;
