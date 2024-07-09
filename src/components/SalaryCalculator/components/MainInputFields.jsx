const MainInputFields = ({user, updateUsers, resetDiscounts}) => {

    const countInitialNetSalary = () => {
      user.personalTax = Math.round(user.salary * 0.15);
      user.socialTax = Math.round(user.salary * 0.185);
      user.netSalary = user.salary - user.personalTax - user.socialTax;
    }

    return (
    <div id="mainInputFields">
      <label htmlFor="user"><b>Családtag neve</b></label>
      <br />
      <input type="text" id="user" name="user" value={user.user} onChange={e => {
        user.user = e.target.value;
        updateUsers(user);
      }} />
      <p>Add meg a családtag nevét!</p>
      <label htmlFor="grossSalary"><b>Bruttó bér Ft-ban</b></label>
      <br />
      <input type="number" id="grossSalary" name="grossSalary" value={user.salary} onChange={e => {
        user.salary = e.target.value;
        resetDiscounts(user);
        countInitialNetSalary();
        updateUsers(user);
      }} />
      <p>Add meg a bruttó béredet!</p>
    </div>
    );
}

export default MainInputFields;