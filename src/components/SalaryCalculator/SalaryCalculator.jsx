import Discounts from "./components/Discounts";
import MainInputFields from "./components/MainInputFields";
import Result from "./components/Result";
import SalaryAdjusment from "./components/SalaryAdjustment";
import Title from "./components/Title";

const SalaryCalculator = ({users, setUsers}) => {
  let userIndex = users.findIndex(({selected}) => selected );
  let user = users[userIndex];

  const updateUsers = (user) => {
    setUsers(users.toSpliced(userIndex, 1, user));
  }

  const resetFamilyDiscounts = () => {
    user.family.applied = false;
    user.netSalary -= user.family.discount;
    user.family.discount = 0;
    updateUsers(user);
  }

  const resetDiscounts = (user) => {
    user.under25.applied = false;
    user.married.applied = false;
    user.personal.applied = false;
    resetFamilyDiscounts();
  }

  return (
    <div id="SalaryCalculator">

      <Title user={user} userIndex={userIndex} users={users} setUsers={setUsers} /><br />

      <MainInputFields user={user} updateUsers={updateUsers} resetDiscounts={resetDiscounts} />
      
      <SalaryAdjusment user={user} updateUsers={updateUsers} resetDiscounts={resetDiscounts} />
      
      <Discounts user={user} updateUsers={updateUsers} />
      
      <Result netSalary={user.netSalary} />

    </div>
  );
};

export default SalaryCalculator;
