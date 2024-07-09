const HouseholdSummary = ({users, setUsers}) => {
  let actualUserIndex = users.findIndex(({selected}) => selected);
  let actualUser = users[actualUserIndex];

  const selectUser = (e) => {
    actualUser.selected = false;
    actualUserIndex = e.target.closest("tr").rowIndex - 1;
    actualUser = users[actualUserIndex];
    actualUser.selected = true;
    setUsers(users.toSpliced(actualUserIndex, 1, actualUser));
  }
  
  return <div id="HouseholdSummary">
    <h1>Háztartás összesített jövedelme</h1>
    <table>
      <thead>
        <tr>
          <th><b>Családtag</b></th>
          <th><b>Nettó bér</b></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) =>
          (<tr key={index} value={users.findIndex((usr) => usr === user)} onClick={selectUser}>
            <td>{user.user}</td>
            <td>{user.netSalary} Ft</td>
          </tr>))}
      </tbody>
      <tfoot>
        <tr>
          <td>Összesen:</td>
          <td id="summary">
            {users.reduce((acc, curr) => acc + curr.netSalary, 0)} Ft
          </td>
        </tr>
      </tfoot>
    </table>
  </div>;
};

export default HouseholdSummary;
