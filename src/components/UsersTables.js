import Table from 'react-bootstrap/Table';

const UsersTables=({user}) =>{
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th> Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default UsersTables;