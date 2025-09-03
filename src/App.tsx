import { Button, Form, Input, Radio, Upload, RadioChangeEvent } from "antd"
import React from "react"
import TemplateInternal from "./templates/Internal"
import TemplateOutsource from "./templates/OutSource"

const App: React.FunctionComponent = () => {

  const [fullName, setFullName] = React.useState<string>()
  const [typeKaryawan, setTypeKaryawan] = React.useState<string>('internal')
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const onchangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value)
  }

  const onChangeTypeKaryawan = (e: RadioChangeEvent) => {
    console.log(e.target.value);
    setTypeKaryawan(e.target.value)
  }

  const handleBeforeUpload = (file: File) => {
    const objectURL = URL.createObjectURL(file)
    setPreviewUrl(objectURL)
    return false
  }

  const printCard = () => {
    const printContents = document.getElementById("print-area")?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }

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
              <Form
                layout="vertical"
                initialValues={{
                  tipe_karyawan: typeKaryawan,
                }}
              >
                <Form.Item name={'tipe_karyawan'} label="Tipe Karyawan">
                  <Radio.Group
                    block
                    optionType="button"
                    buttonStyle="solid"
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
                    beforeUpload={handleBeforeUpload}
                  >
                    <Button>Click to Upload</Button>
                  </Upload>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="w-1/2 rounded-2xl border border-gray-500/20 p-5">
            <div className="font-bold mb-5">Hasil</div>

            <div id="print-area" className="print:block">
              {
                typeKaryawan === 'internal' ?
                  <TemplateInternal fullName={fullName} images={previewUrl} />
                  : <TemplateOutsource fullName={fullName} images={previewUrl} />
              }
            </div>
          </div>
        </div>

        <Button onClick={printCard}>Cetak Kartu</Button>
      </div>
    </>
  )
}

export default App
