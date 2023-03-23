import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import styles from "./Table.module.css";

export default function Main() {
  return (
    <div className="d-flex flex-column d-flex align-items-center">
      <div className="w-25 d-flex justify-content-between mb-3 mt-3">
        <Button variant="warning">Block</Button>
        <Button variant="success">Unblock</Button>
        <Button variant="danger">Delete</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className={styles.pole}>
              <Button className={styles.pole}>выделить / снять</Button>
            </th>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>registrated</th>
            <th>Last seen</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" />
            </td>
            <td>1</td>
            <td>artem</td>
            <td>@mdo</td>
            <td>22.02</td>
            <td>33.03</td>
            <td>banned</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" />
            </td>
            <td>2</td>
            <td>den</td>
            <td>@fat</td>
            <td>11.01</td>
            <td>33.03</td>
            <td>active</td>
          </tr>
          <tr>
            <td>
              <input class="form-check-input" type="checkbox" />
            </td>
            <td>3</td>
            <td>matvei</td>
            <td>@twitter</td>
            <td>33.03</td>
            <td>33.03</td>
            <td>active</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
