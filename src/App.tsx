import { Button, Form, Input, Radio, Upload, RadioChangeEvent } from "antd"
import React from "react"
import TemplateInternal from "./templates/Internal"
import TemplateOutsource from "./templates/OutSource"

const App: React.FunctionComponent = () => {

  const [fullName, setFullName] = React.useState<string>()
  const [typeKaryawan, setTypeKaryawan] = React.useState<string>('internal')

  React.useEffect(() => {

  }, [fullName, typeKaryawan])

  const onchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const onChangeTypeKaryawan = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setTypeKaryawan(e.target.value)
  }

  return (
    <>
      <div className='top-0 fixed z-50 w-full'>
        <div className="px-6 py-6 bg-white shadow-sm">
          <div className="flex flex-row justify-between items-center">
            <div>asdasd</div>
            <div>asdasd</div>
          </div>
        </div>
      </div>

      <div className="mt-32 mx-6">
        <div className="flex flex-row space-x-5">
          <div className="w-1/2 rounded-2xl border border-gray-500/20 p-5">
            <div className="font-bold mb-5">Data Karyawan</div>
            <div>
              <Form layout="vertical">
                <Form.Item name={'tipe_karyawan'} label="Tipe Karyawan">
                  <Radio.Group
                    block
                    optionType="button"
                    buttonStyle="solid"
                    defaultValue={typeKaryawan}
                    options={[
                      { label: 'Internal', value: 'internal' },
                      { label: 'Outsource', value: 'outsource' }
                    ]}
                    onChange={onChangeTypeKaryawan}
                  />
                </Form.Item>
                <Form.Item name={'nama_karyawan'} label="Nama Karyawan">
                  <Input onChange={onchangeName} placeholder="Nama Karyawan" />
                </Form.Item>
                <Form.Item name={'gambar_karyawan'} label="Gambar Karyawan">
                  <Upload
                    accept="image/*"
                    showUploadList={false}
                    maxCount={1}
                    beforeUpload={
                      (file) => {
                        console.log(file)
                        return false
                      }
                    }
                  >
                    <Button>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="w-1/2 rounded-2xl border border-gray-500/20 p-5">
            <div className="font-bold mb-5">Hasil</div>
            {
              typeKaryawan === 'internal' ?
                <TemplateInternal fullName={fullName} />
                : <TemplateOutsource fullName={fullName} />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
