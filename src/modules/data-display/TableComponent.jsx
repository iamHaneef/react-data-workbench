import { useEffect, useState } from "react";
import { Table } from "antd";
import { usersMock } from "../../core/mock/userMock";
import { getUsers } from "../../core/api/userApi";

const USE_MOCK = false;

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      if (USE_MOCK) {
        setData(usersMock);
      } else {
        const apiData = await getUsers();
        setData(apiData);
      }
    };

    loadData();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};

export default TableComponent;
