import React, { useEffect, useState } from "react";
import "./tableData.css";
import { getData } from "../../api/getData";
import { Link } from "react-router-dom";

const TableData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => setData(res?.data?.topic?.relatedTopics));
  }, []);
  return (
    <div className="tableContainer">
      {data.length !== 0 ? (
        <div className="tableWrapper">
          <h1 className="tableHeader">Topics Related to React</h1>
          <table>
            <tbody>
              <tr>
                <th className="tableId">ID</th>
                <th>Name</th>
                <th>StargazerCount</th>
                <th>ViewMore</th>
              </tr>

              {data.map((topic) => (
                <tr key={topic.id}>
                  <td className="tableId">{topic.id}</td>
                  <td className="tableName">{topic.name}</td>
                  <td>{topic.stargazerCount}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/${topic.id}`,
                        state: { data: topic },
                      }}
                    >
                      <button className="tableButton">More</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading......</h1>
      )}
    </div>
  );
};

export default TableData;
