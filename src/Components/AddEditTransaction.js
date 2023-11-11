import React, { useState } from "react";
import { Modal, Button, Form, Input, Select } from "antd";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SchoolIcon from "@mui/icons-material/School";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AddCardIcon from "@mui/icons-material/AddCard";

import axios from "axios";
function AddEditTransaction({
  setShowAddEditTransactionModal,
  showAddEditTransactionModal,
  selectedItemForEdit,
  setSelectedItemForEdit,
  getTransactions,
}) {
  const MaterialUISelectOption = (icon, label, value) => (
    <Select.Option key={value} value={value}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: 8 }}>{icon}</span>
        {label}
      </div>
    </Select.Option>
  );
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      if (selectedItemForEdit) {
        await axios.post(
          `${process.env.REACT_APP_API}/transactions/edit-transaction`,
          {
            payload : {
             ...values,
             userid: user._id,
            },
           transactionId: selectedItemForEdit._id,
         }
        );
        getTransactions();
        toast.success("Transaction Updated successfully");
      } else {
        await axios.post(
          `${process.env.REACT_APP_API}/transactions/add-transaction`,
          { ...values, userid: user._id }
        );
        getTransactions();
        toast.success("Transaction added successfully");
      }
      setShowAddEditTransactionModal(false);
      setSelectedItemForEdit(null);
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const variants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div>
      <Modal
        title={selectedItemForEdit ? "Edit Transaction" : "Add Transaction"}
        open={showAddEditTransactionModal}
        onCancel={() => setShowAddEditTransactionModal(false)}
        footer={null}
      >
        {loading && <Spinner />}
        <Form
          layout="vertical"
          className="transactionForm"
          onFinish={onFinish}
          initialValues={selectedItemForEdit}
        >
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select>
              {MaterialUISelectOption(<AltRouteIcon />, "Other", "other")}
              {MaterialUISelectOption(<PriceCheckIcon />, "Salary", "salary")}
              {MaterialUISelectOption(
                <CoPresentIcon />,
                "Freelance",
                "freelance"
              )}
              {MaterialUISelectOption(<SchoolIcon />, "Education", "education")}
              {MaterialUISelectOption(
                <LocalPharmacyIcon />,
                "Medical",
                "medical"
              )}
              {MaterialUISelectOption(
                <AirplaneTicketIcon />,
                "Travel",
                "travel"
              )}
              {MaterialUISelectOption(<FastfoodIcon />, "Food", "food")}
              {MaterialUISelectOption(
                <SportsEsportsIcon />,
                "Entertainment",
                "entertainment"
              )}
              {MaterialUISelectOption(<AssuredWorkloadIcon />, "Tax", "tax")}
              {MaterialUISelectOption(
                <AddCardIcon />,
                "Investment",
                "investment"
              )}
            </Select>
          </Form.Item>

          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>

          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>

          <div className="d-flex justify-content-end">
            <Button
              type="primary"
              htmlType="submit"
              className="primary"
              size="large"
              variant="outlined"
              variants={variants}
              whileHover="hover"
              whileTap="tap"
              sx={{ marginTop: 2, borderRadius: 3 }}
              style={{
                fontSize: "17px",
                color: "white",
                backgroundColor: "#545454",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Save
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AddEditTransaction;
