import { Form, Input} from "antd";
function InputGroup({ type, name, placeholder, onChange, errors }) {
  return (
    <>
      <Form.Item>
        <Input
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
