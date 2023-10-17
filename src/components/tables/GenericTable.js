import { Table, Button } from "react-bootstrap";

const GenericTable = ({
  header,
  data,
  title,
  hideBtn,
  onBtnClick,
  onEdit,
  onDelete
}) => {
  return (
    <div className="table-container">
      <div className="table-title-button">
        <h3>{title}</h3>
        {!hideBtn && <Button onClick={onBtnClick}>+ Add</Button>}
      </div>
      <Table size="md" striped={true} bordered={true}>
        <thead>
          <tr>
            {header.map((h) => {
              return <th key={h}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((b) => {
            return (
              <tr key={b.id}>
                {Object.values(b).map((d) => (
                  <td key={`${b.id} ${d}`}>{d}</td>
                ))}
                <td>
                  <span
                    onClick={() => {
                      onEdit(b.id);
                    }}
                  >
                    edit
                  </span>{" "}
                  /{" "}
                  <span
                    onClick={() => {
                      onDelete(b.id);
                    }}
                  >
                    delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default GenericTable;
