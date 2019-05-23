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

class CreateDeliveryBoysForm extends React.Component {
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
      <h2> Step 3:  Create Delivery Boy   </h2>
        <Row>
            <Col span={12}>
                <Form.Item {...formItemLayout} label="Enter Delivery Boy Name">
                    {getFieldDecorator('Routenumber', {
                        rules: [
                        {
                            required: true,
                            message: 'Please Enter Delivery Boy Name',
                        },
                        ],
                    })(<Input placeholder="Please Enter Delivery Boy Name" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input   placeholder="Please input your phone number!" />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="Select Route Number" hasFeedback>
                {getFieldDecorator('Select Route Number', {
                    rules: [{ required: true, message: 'Select Route Number' }],
                })(
                    <Select placeholder="Please Select Route Number">
                    <Option value="1">Root 1</Option>
                    <Option value="2">Root 2</Option>
                    </Select>,
                )}
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                    Create Delivery Boy 
                    </Button>
                </Form.Item>
            </Col>
        </Row>    
      </div>
      </div>
    );
  }
}

const CreateDeliveryBoys = Form.create({ name: 'dynamic_rule' })(CreateDeliveryBoysForm);
export default CreateDeliveryBoys;
