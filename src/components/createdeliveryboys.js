import React,{Component} from 'react'
import { Form, Input, Button, Select, Checkbox,  Row, Col,message } from 'antd';
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

class CreateDeliveryBoysForm extends React.Component {
  constructor() {
    super();
    this.state={
      routesData:[],
      routes:[],
      boyCreate:false,
      boyData:[]
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3005/Route').then((response)=> {
      this.setState({routesData:response.data})
      this.state.routesData.map((data,index) => {
        this.state.routes.push(<Option value={data.routenumber} key={index}>{data.routenumber}</Option>)
      })
    })
  }

  boyCreated=()=> {
    return <span>Delivery boy <b>{this.state.routeData.routenumber}</b> is created for {this.state.routeData.areas.map((item) =>{
      return <b>{item} </b>;
    })}areas </span>
  }
  check = () => {
    this.props.form.validateFields((err,values) => {
      if (!err) {
         axios.post('http://localhost:3005/Boy',values).then((response) => {
          message.success("All information of Route created succesfully")
          this.setState({boyCreate:true,boyData:response.data})
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
                {getFieldDecorator('route', {
                    rules: [{ required: true, message: 'Select Route Number' }],
                })(
                    <Select placeholder="Please Select Route Number">
                    {this.state.routes}
                    </Select>,
                )}
                </Form.Item>
                <Form.Item {...formTailLayout}>
                    <Button type="primary" onClick={this.check}>
                    Create Delivery Boy 
                    </Button>
                </Form.Item>
            </Col>
            <Col span={12}>
              {
                this.state.routeCreate ? this.boyCreated() :null
              }
            </Col>
        </Row>    
      </div>
      </div>
    );
  }
}

const CreateDeliveryBoys = Form.create({ name: 'dynamic_rule' })(CreateDeliveryBoysForm);
export default CreateDeliveryBoys;
