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

class DistributorInfoForm extends React.Component {

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
      <h2> Step 1: Distributor Information  </h2>
        <Row>
            <Col span={12}>
                    <Form.Item {...formItemLayout} label="Company Name">
                    {getFieldDecorator('companyname', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input your company name',
                        },
                        ],
                    })(<Input placeholder="Please input company name" />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="First Name">
                    {getFieldDecorator('firstname', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input first name',
                        },
                        ],
                    })(<Input placeholder="Please input first name" />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Last Name">
                    {getFieldDecorator('lastname', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input last name',
                        },
                        ],
                    })(<Input placeholder="Please input last name" />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Phone Number">
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(<Input   placeholder="Please input your phone number!" />)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select State" hasFeedback>
                    {getFieldDecorator('select state', {
                        rules: [{ required: true, message: 'Please select state!' }],
                    })(
                        <Select placeholder="Please select state">
                        <Option value="maharastra">Maharastra</Option>
                        <Option value="gujrat">Gujrat</Option>
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select City" hasFeedback>
                    {getFieldDecorator('select city', {
                        rules: [{ required: true, message: 'Please select city!' }],
                    })(
                        <Select placeholder="Please select city">
                        <Option value="pune">Pune</Option>
                        <Option value="dhule">Dhule</Option>
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select Area" hasFeedback>
                    {getFieldDecorator('select area', {
                        rules: [{ required: true, message: 'Please select area!' }],
                    })(
                        <Select placeholder="Please select area">
                        <Option value="dattawadi">Dattawadi</Option>
                        <Option value="navi peth">Navi Peth</Option>
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select Pincode" hasFeedback>
                    {getFieldDecorator('select area', {
                        rules: [{ required: true, message: 'Please select area!' }],
                    })(
                        <Select placeholder="Please select area">
                        <Option value="411030">411030</Option>
                        <Option value="411031">411031</Option>
                        </Select>,
                    )}
                    </Form.Item>    
        
                    <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                        Check
                    </Button>
                    </Form.Item>

            </Col>

            <Col span={12}>

                    <Form.Item {...formItemLayout} label=" Service Areas" hasFeedback>
                            {getFieldDecorator('select distributer service areas', {
                                rules: [{ required: true, message: 'Please select Distributor areas!' }],
                            })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select Distributor areas!"
                            // defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {children}
                        </Select>,
                                )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label=" Service Pincodes" hasFeedback>
                            {getFieldDecorator('select distributer service Pincodes', {
                                rules: [{ required: true, message: 'Please select Distributor Pincodes!' }],
                            })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select Distributor Pincodes!"
                            // defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {children}
                        </Select>,
                            )}
                    </Form.Item>        
            </Col>
        </Row>    
        
      </div>
      </div>
      
    );
  }
}

const DistributorInfo = Form.create({ name: 'dynamic_rule' })(DistributorInfoForm);
export default DistributorInfo;