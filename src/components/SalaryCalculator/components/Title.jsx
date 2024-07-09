const Title = ({user, userIndex, users, setUsers}) => {
    let title = <h1>{user.user} BÉRÉNEK KISZÁMÍTÁSA</h1>;
    if(user.user === ""){
      title = <h1>BÉRKALKULÁTOR</h1>;
    }
    return (
    <div id="title">
      {title}
      <button onClick={e => {
        setUsers(users.toSpliced(userIndex, 1));
      }}><i className="material-icons">delete_forever</i></button>
    </div>
    );
}

export default Title;