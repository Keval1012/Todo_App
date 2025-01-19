import { Checkbox, Col, message, Row, Table } from "antd";
import React, { useState } from "react";
import AppButton from "../common/AppButton";
import AppModal from "../common/AppModal";
import AddTodo from "./AddTodo";
import { setTodoData } from "../redux/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
  const dispatch = useDispatch();
  const { todoData } = useSelector((state) => state.todo) ?? [];
  const [todoModalOpen, setTodoModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const todoColumns = [
    {
      key: "title",
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      render: (val) => (val ? <div>{val}</div> : <div>-</div>),
    },
    {
      key: "description",
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
      render: (val) => (val ? <div>{val}</div> : <div>-</div>),
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
      width: "6%",
      render: (index, record) => (
        <div className="d-flex-between" key={record?.id}>
          <Checkbox
            checked={record?.completed}
            onChange={() => changeTodo(record?.id)}
          />
        </div>
      ),
    },
  ];

  const handleTodoModal = () => {
    setTodoModalOpen(!todoModalOpen);
  };

  const getMessage = (type, content) => {
    return messageApi.open({ type: type, content: content });
  };

  const changeTodo = (id) => {
    const updatedTodos = todoData?.map((todo) =>
      todo?.id === id ? { ...todo, completed: !todo?.completed } : todo
    );
    const unChecked = updatedTodos?.filter((todo) => !todo?.completed);
    const checked = updatedTodos?.filter((todo) => todo?.completed);
    return dispatch(setTodoData([...unChecked, ...checked]));
  };

  const handleTodoFormValues = async (form) => {
    const values = form.getFieldsValue();
    const { title, description } = values;

    if (title) {
      if (form.getFieldsError().filter((x) => x.errors.length > 0).length > 0) {
        return;
      }

      let data = {
        id: Date.now(),
        title: title,
        description: description ?? "",
        completed: false,
      };

      try {
        if (data) {
          dispatch(setTodoData([data, ...todoData]));
          setTodoModalOpen(false);
          getMessage("success", "Todo Added Successfully !!!");
          return;
        }
      } catch (error) {
        getMessage("error", "something went wrong!");
      }
    } else {
      getMessage("error", "Please add required fields");
    }
  };

  return (
    <div>
      {contextHolder}
      <Row align="middle" justify="space-between">
        <Col xl={14} lg={14} md={14} sm={14} xs={14}></Col>
        <Col className="text-right">
          <AppButton
            label="+ Add Todo"
            className="addEventBtn appPrimaryButton"
            onClick={() => {
              setTodoModalOpen(true);
            }}
          />
        </Col>
      </Row>
      <br />

      <Table
        columns={todoColumns}
        dataSource={todoData}
        pagination={{ showSizeChanger: true }}
      />

      <AppModal
        title="Add Todo"
        open={todoModalOpen}
        children={
          <AddTodo
            setTodoModalOpen={setTodoModalOpen}
            handleTodoFormValues={handleTodoFormValues}
          />
        }
        onOk={handleTodoModal}
        onCancel={handleTodoModal}
      />
    </div>
  );
};

export default TodoApp;
