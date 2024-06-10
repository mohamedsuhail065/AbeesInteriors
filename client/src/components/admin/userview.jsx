import { useEffect, useState } from "react";
import AXIOS from "axios";
import { Table } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
export default function Userview() {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    console.log("useeffect working");
    const url = "http://localhost:9000/fetchAllemp";
    AXIOS.get(url).then((res) => {
      setRecord(res.data);
      console.log("data reached");
    });
  },); //useeffect end
  const deleteuser = (userid) => {
    let ans = window.confirm("Do you want to delete?");
    if (ans) {
      const url = `http://localhost:9000/deleteuser/${userid}`;
      AXIOS.get(url).then((res) => {
        alert(res.data);
      });
    }
  };

  let slnumber=1;

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Sl</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((ls) => {
            return (
              <tr key={ls._id}>
                <td>{slnumber++}</td>
                <td>{ls.fname}</td>
                <td>{ls.email}</td>
                <td>{ls.mob}</td>
                <td>
                  <MdDeleteForever
                    onClick={() => {
                      deleteuser(ls._id);
                    }}
                    style={{ color: "red", fontSize: "35px" }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
