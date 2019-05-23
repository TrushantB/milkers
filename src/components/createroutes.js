import React,{Component} from 'react'
import { Form, Input, Button, Select, Checkbox,  Row, Col } from 'antd';

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 8 },
};
const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

class CreateRoutesInfoForm extends React.Component {
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div>
      <div className="formbox">
      <h2> Step 2: Create Routes </h2>
        <Row>
            <Col span={12}>
            <Form.Item {...formItemLayout} label="Enter Route Number">
            {getFieldDecorator('Routenumber', {
                rules: [
                {
                    required: true,
                    message: 'Please input your Route number',
                },
                ],
            })(<Input placeholder="Please input your Route number" />)}
            </Form.Item>

        <Form.Item {...formItemLayout} label="Select Route 1 Areas" hasFeedback>
                {getFieldDecorator('Please select Route 1 areas!', {
                    rules: [{ required: true, message: 'Please select Route 1 areas!' }],
                })(
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select Route 1 areas!"
                        // defaultValue={['a10', 'c12']}
                        onChange={handleChange}
                    >
                        {children}
                    </Select>,
                )}
        </Form.Item>

        <Form.Item {...formItemLayout} label=" Select Route 1 Pincodes" hasFeedback>
                {getFieldDecorator('select Route pincodes', {
                    rules: [{ required: true, message: 'Please Select Route 1 Pincodes' }],
                })(
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please Select Route 1 Pincodes"
                        // defaultValue={['a10', 'c12']}
                        onChange={handleChange}
                    >
                        {children}
                    </Select>,
                )}
        </Form.Item>   
       
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Create Route
          </Button>
        </Form.Item>

            </Col>
        </Row>    
      </div>
      </div>
    );
  }
}


const CreateRoutes = Form.create({ name: 'dynamic_rule' })(CreateRoutesInfoForm);
export default CreateRoutes;

