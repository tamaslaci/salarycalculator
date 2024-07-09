const FamilyMemberTabs = ({users, setUsers, initialUser}) => {
  let actualUserIndex = users.findIndex(({selected}) => selected);
  let actualUser = users[actualUserIndex];
  const selectUser = (e) => {
    actualUser.selected = false;
    actualUserIndex = e.target.value;
    actualUser = users[actualUserIndex];
    actualUser.selected = true;
    setUsers(users.toSpliced(actualUserIndex, 1, actualUser));
  }
  const addUser = () => {
    actualUser.selected = false;
    setUsers([...users.toSpliced(actualUserIndex, 1, actualUser), initialUser])
  }
  return <div id="FamilyMemberTabs">
    {users.map((user, index) => (
      <button key={index} value={users.findIndex((usr) => usr === user)} onClick={selectUser} >
        {user.user}</button>))}
    <button onClick={addUser}><b>+</b></button>
  </div>;
};

export default FamilyMemberTabs;
