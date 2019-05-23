import React,{Component} from 'react'
import { Form, Input, Button, Upload, Icon,   Select, Checkbox,  Row, Col } from 'antd';

class CreateCustomersForms extends React.Component {

    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
    

    render(){
        const { getFieldDecorator } = this.props.form;

        return(
            <div className="formbox">
                <h2> Step 4:  Create Customers </h2>
                <div>
                    <Row>
                        <Col span={12} >
                            <h3> Download Blank Sheet for Customer List </h3>    
                            <Button type="primary" >
                                Download Blank Sheet
                            </Button>                        
                        </Col>
                        <Col span={12}> 
                            <h3> Demo Sheet for understand how to write data in sheet  </h3>    
                            <Button type="primary" >
                                Download Demo Sheet
                            </Button>
                        </Col>
                    </Row>
<br />
                    <Row>
                        <Col span={24} >
                            <h3> Upload Customer Data Sheet</h3>    
                            <Form.Item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
                                {getFieldDecorator('upload', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                })(
                                    <Upload name="logo" action="/upload.do" listType="picture">
                                    <Button>
                                        <Icon type="upload" /> Click to upload
                                    </Button>
                                    </Upload>,
                                )}
                            </Form.Item>                            
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

 
}

const CreateCustomers = Form.create({ name: 'dynamic_rule' })(CreateCustomersForms);
export default CreateCustomers;



/*
import React,{Component} from 'react'
import { Form, Input, Button, Upload, Icon,   Select, Checkbox,  Row, Col } from 'antd';

class CreateCustomers extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="formbox">
                <h2> Step 4:  Create Customers </h2>
                <div>
                    <Row>
                        <Col span={12} >
                            <h3> Download Blank Sheet for Customer List </h3>    
                            <Button type="primary" >
                                Download Blank Sheet
                            </Button>                        
                        </Col>
                        <Col span={12}> 
                            <h3> Demo Sheet for understand how to write data in sheet  </h3>    
                            <Button type="primary" >
                                Download Demo Sheet
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24} >
                            <h3> Upload Customer Data Sheet</h3>    
                            <Form.Item label="Dragger">
                            <div className="dropbox">
                                {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                })(
                                <Upload.Dragger name="files" action="/upload.do">
                                    <p className="ant-upload-drag-icon">
                                    <Icon type="inbox" />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                </Upload.Dragger>,
                                )}
                            </div>
                            </Form.Item>                            
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default CreateCustomers;
*/