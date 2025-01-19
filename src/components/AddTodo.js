import { Col, Divider, Form, Row } from "antd";
import React from "react";
import TextInput from "../common/TextInput";
import TextArea from "antd/es/input/TextArea";
import AppButton from "../common/AppButton";
import "../styles/AddTodo.css";

const AddTodo = ({ setTodoModalOpen, handleTodoFormValues }) => {
  const [todoAddForm] = Form.useForm();
  return (
    <div>
      <Divider />

      <Form
        preserve={false}
        form={todoAddForm}
        layout="vertical"
      >
        <div>
          <Row justify="space-between">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <TextInput
                label="Title"
                name="title"
                type="text"
                required={true}
                requiredMsg="Title is required"
              />
            </Col>
          </Row>
          <Row justify="space-between">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <Form.Item
                label="Description"
                name="description"
                type="text"
                required={false}
              >
                <TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
        </div>

        <div>
          <Divider />
          <Row justify="end">
            <Col xl={8} lg={8} md={8} sm={8} xs={8}>
              <AppButton
                onClick={() => {
                  handleTodoFormValues(todoAddForm);
                }}
                className="appPrimaryButton formWidth"
                label="Save"
              />
              <AppButton
                label="Cancel"
                className="appButton formWidth btn-left"
                onClick={() => {
                  todoAddForm.resetFields();
                  setTodoModalOpen(false);
                }}
              />
            </Col>
          </Row>
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;
