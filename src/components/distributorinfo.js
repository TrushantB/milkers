import React,{Component} from 'react'
import { Form, Input, Button, Select, Checkbox,  Row, Col, InputNumber,message } from 'antd';
import axios from 'axios';
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 8 },
};
const { Option } = Select;

// const children = [];
// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

function handleChange(value) {
  console.log(`selected ${value}`);
}

class DistributorInfoForm extends React.Component {
    constructor() {
        super();
        this.state={
            locationData:[],
            states:[],
            citys:[],
            areas:[],
            pincodes:[],
        }
        
    }
componentDidMount() {
    axios.get("http://localhost:3005/location").then((response) => {
      this.setState({locationData:response.data})
      for(let data in this.state.locationData[0]) {
          if(data=='state') {
              this.state.locationData[0][data].map((item,index) =>{
                  this.state.states.push(<Option value={item} key={index}>{item}</Option>) 
                })
            }
            else if(data==='city') {
                this.state.locationData[0][data].map((item,index) =>{
                    this.state.citys.push(<Option value={item} key={index}>{item}</Option>) 
                  })
            }
            else if(data==='area') {
                this.state.locationData[0][data].map((item,index) =>{
                    this.state.areas.push(<Option value={item} key={index}>{item}</Option>) 
                  })
            }
            else if(data==='pincode') {
                this.state.locationData[0][data].map((item,index) =>{
                    this.state.pincodes.push(<Option value={item} key={index}>{item}</Option>) 
                  })
            }
        }
    })
    }
    
  check = () => {
    this.props.form.validateFields((err,values) => {
      if (!err) {
              axios.post("http://localhost:3005/Distributer",values).then((response) => {
                message.success("All information of distributer submited succesfully")
                this.props.form.resetFields();
              })
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
                    })(<InputNumber   placeholder="Please input your phone number!" style={{ width: '100%' }}/>)}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select State" hasFeedback>
                    {getFieldDecorator('state', {
                        rules: [{ required: true, message: 'Please select state!' }],
                    })(
                        <Select placeholder="Please select state">
                        {/* <Option value="maharastra">Maharastra</Option>
                        <Option value="gujrat">Gujrat</Option> */}
                        {this.state.states}
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select City" hasFeedback>
                    {getFieldDecorator('city', {
                        rules: [{ required: true, message: 'Please select city!' }],
                    })(
                        <Select placeholder="Please select city">
                        {this.state.citys}
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select Area" hasFeedback>
                    {getFieldDecorator('area', {
                        rules: [{ required: true, message: 'Please select area!' }],
                    })(
                        <Select placeholder="Please select area">
                        {this.state.areas}
                        </Select>,
                    )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Select Pincode" hasFeedback>
                    {getFieldDecorator('pincode', {
                        rules: [{ required: true, message: 'Please select area!' }],
                    })(
                        <Select placeholder="Please select area">
                        {this.state.pincodes}
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
                            {getFieldDecorator('distributerServiceAreas', {
                                rules: [{ required: true, message: 'Please select Distributor areas!' }],
                            })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select Distributor areas!"
                            // defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {this.state.areas}
                        </Select>,
                                )}
                    </Form.Item>

                    <Form.Item {...formItemLayout} label=" Service Pincodes" hasFeedback>
                            {getFieldDecorator('distributerServicePincodes', {
                                rules: [{ required: true, message: 'Please select Distributor Pincodes!' }],
                            })(
                        <Select
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Please select Distributor Pincodes!"
                            // defaultValue={['a10', 'c12']}
                            onChange={handleChange}
                        >
                            {this.state.pincodes}
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