import { Form, Input} from "antd";
import { UserOutlined } from "@ant-design/icons";
function InputGroup({ type, name, placeholder, onChange, errors }) {
  return (
    <>
      <Form.Item>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          name={name}
        />
        {
          errors && (<span style={{ color: "red"}}>{errors}</span>)
        }
      </Form.Item>
    </>
  );
}

export default InputGroup;
