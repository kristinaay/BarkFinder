import React, { useEffect, useState, useMemo } from "react";
import "./table.css";
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";

const Table = () => {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/getdogs")
        .then((res) => res.json())
        .then((result) => {
          setDogs(result);
          setLoaded(true);
        });
      console.log("dogs", dogs);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []); // Only run the first time

  const renderRowSubComponent = (row) => {
    const { name, gender, picLink } = row.original;
    return (
      <Card style={{ width: "18rem", margin: "0 auto" }}>
        <CardImg top src={picLink} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <strong>{`${name}`} </strong>
          </CardTitle>
        </CardBody>
      </Card>
    );
  };

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? "👇" : "👉"}
          </span>
        ),
      },
      {
        Header: "Breed",
        accessor: "breed",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },

      {
        Header: "Gender",
        accessor: "gender",
        disableSortBy: true,
        Filter: SelectColumnFilter,
        filter: "equals",
      },
    ],
    []
  );

  if (loaded) {
    return (
      <Container style={{ marginTop: 100 }}>
        <TableContainer
          columns={columns}
          data={dogs}
          renderRowSubComponent={renderRowSubComponent}
        />
      </Container>
    );
  } else {
    return (
      <div className="loadingbg">
        <h1 className="loading">
          Loading! Thank you for your patience! The dogs appreciate it!
        </h1>
      </div>
    );
  }
};

export default Table;
