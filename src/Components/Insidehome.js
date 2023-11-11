import React, { useEffect, useState } from "react";
import Redirect from "./Redirect";
import "./Transaction.css";
import { Button, DatePicker, Select, Table } from "antd";
import AddEditTransaction from "./AddEditTransaction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./Spinner";
import axios from "axios";
import "./Insidehome.css";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
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
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  AreaChartOutlined,
  UnorderedListOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Analatics from "./Analatics";

const { RangePicker } = DatePicker;
const Insidehome = () => {
  const [showAddEditTransactionModal, setShowAddEditTransactionModal] =
    useState(false);

  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionsData, setTransactionsData] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [type, setType] = useState("all");
  const [selectedRange, setSelectedRange] = useState([]);
  const [viewType, setViewType] = useState("table");
  const icons = {
    salary: <PriceCheckIcon />,
    freelance: <CoPresentIcon />,
    education: <SchoolIcon />,
    medical: <LocalPharmacyIcon />,
    food: <FastfoodIcon />,
    entertainment: <SportsEsportsIcon />,
    tax: <AssuredWorkloadIcon />,
    other: <AltRouteIcon />,
    travel: <AirplaneTicketIcon />,
    investment: <AddCardIcon />,
  };

  const getTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API}/transactions/get-all-transactions`,
        {
          userid: user._id,
          frequency,
          ...(frequency === "custom" && { selectedRange }),
          type,
        }
      );
      setTransactionsData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("something went wrong");
    }
  };

  const deleteTransaction = async (record) => {
    try {
      setLoading(true);
      await axios.post(
        `${process.env.REACT_APP_API}/transactions/delete-transaction`,
        {
          transactionId: record._id,
        }
      );
      toast.success("Transaction Deleted successfully");
      getTransactions();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    getTransactions();
  }, [frequency, selectedRange, type]);

  useEffect(() => {
    getTransactions();
  }, [frequency, selectedRange, type]);

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (date) => formatDateString(date),
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (category) => (
        <div className="d-flex align-items-center">
          <div className="mx-2">{icons[category]}</div>
          {category}
        </div>
      ),
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => {
        return (
          <div>
            <DriveFileRenameOutlineOutlinedIcon
              onClick={() => {
                setSelectedItemForEdit(record);
                setShowAddEditTransactionModal(true);
              }}
              style={{ cursor: "pointer" }}
            />
            <DeleteOutlineOutlinedIcon
              className="mx-2"
              onClick={() => deleteTransaction(record)}
              style={{ cursor: "pointer" }} 
            />
          </div>
        );
      },
    },
  ];

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
    <Redirect>
      <ToastContainer position="top-left" />
      {loading && (
        <div className="loader-container">
          <Spinner />
        </div>
      )}

      <div className="filter d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h6>Select Frequency</h6>
            <Select value={frequency} onChange={(value) => setFrequency(value)}>
              <Select.Option value="7">Last 1 week</Select.Option>
              <Select.Option value="30">Last 1 month</Select.Option>
              <Select.Option value="365">Last 1 year</Select.Option>
              <Select.Option value="custom">Custom</Select.Option>
            </Select>

            {frequency === "custom" && (
              <div className="mt-2">
                <RangePicker
                  value={selectedRange}
                  onChange={(values) => setSelectedRange(values)}
                />
              </div>
            )}
          </div>
          <div className="d-flex flex-column mx-5">
            <h6>Select Type</h6>
            <Select value={type} onChange={(value) => setType(value)}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </div>
        </div>

        <div className="d-flex">
          <div>
            <div className="view-switch mx-5">
              <PlaylistAddOutlinedIcon
                className={`icon mx-3 mt-1 ${
                  viewType === "table" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("table")}
                style={{ cursor: "pointer"
                
                 }}
                size={30}
              />
              
              <AreaChartOutlined
                className={`${
                  viewType === "analytics" ? "active-icon" : "inactive-icon"
                } `}
                onClick={() => setViewType("analytics")}
                size={30}
              />
            </div>
          </div>

          <Button
            className="primary"
            size="large"
            color="primary"
            variant="outlined"
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            sx={{ marginTop: 2, borderRadius: 4 }}
            style={{
              fontSize: "17px",
              color: "white",
              backgroundColor: "#545454",
              fontFamily: "Poppins, sans-serif",
            }}
            onClick={() => setShowAddEditTransactionModal(true)}
          >
            Add New
          </Button>
        </div>
      </div>

      <div className="table-analtics">
        {viewType === "table" ? (
          <div className="table">
            <Table columns={columns} dataSource={transactionsData} />
          </div>
        ) : (
          <Analatics transactions={transactionsData} />
        )}
      </div>

      {showAddEditTransactionModal && (
        <AddEditTransaction
          showAddEditTransactionModal={showAddEditTransactionModal}
          setShowAddEditTransactionModal={setShowAddEditTransactionModal}
          selectedItemForEdit={selectedItemForEdit}
          getTransactions={getTransactions}
          setSelectedItemForEdit={setSelectedItemForEdit}
        />
      )}
    </Redirect>
  );
};

export default Insidehome;
