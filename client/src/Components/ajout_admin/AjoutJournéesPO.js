import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Input,Select,DatePicker } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { FindAll } from '../../redux/actions/CenterActions';
const { Option } = Select;
 const JournéesPOCreateForm = ({ visible, onCreate, onCancel,errors }) => {
  const [form] = Form.useForm();
  const centers = useSelector(state => state.centers)
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(FindAll())
  }, [centers])

  return (
    <Modal
      visible={visible}
      title="Ajouter Une Journée portes ouvertes"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
      <Form.Item
          name="center"
          label="Centres de vaccination"
          rules={[
            {
              required: true,
              message: 'Please input the title of collection!',
            },
          ]}
      >
           <Select
            placeholder="Select a option and change input text above"
          
            allowClear
          >
            {
              centers.all.map(({_id, name})=>(
                    <>
                    <Option value={_id}>{name}</Option>

                    </>
              ))
            }

          </Select>
        </Form.Item>
        <Form.Item name="date" label="Date "
         rules={[
          {
            required: true,
            message: 'Please input the title of collection!',
          },
        ]}>
        <DatePicker />
      </Form.Item>
       
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
        </Form.Item>
      </Form>
    </Modal>
  );
};



export default JournéesPOCreateForm ;