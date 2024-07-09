import { useState } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  const [users, setUsers] = useState([]);

  const initialUser = {
    user: "",
    salary: 0,
    under25: {
      applied: false,
      discount: 0,
    },
    married: {
      applied: false,
      weddingDate: "",
      included: false,
      discount: 5_000,
    },
    personal: {
      applied: false,
      discount: 77_300,
    },
    family: {
      applied: false,
      dependants: 0,
      discountedDependants: 0,
      discount: 0,
    },
    netSalary: 0,
    personalTax: 0,
    socialTax: 0,
    selected: true,
  }
  if(users.length == 0){
    setUsers([initialUser]);
  }
  if(users.findIndex(({selected}) => selected) === -1 && users.length > 0){
    const firstUser = users[0];
    firstUser.selected = true;
    setUsers(users.toSpliced(0, 1, firstUser));
  }

  return (
    <>
      <header>
        <FamilyMemberTabs users={users} setUsers={setUsers} initialUser={initialUser} />
      </header>
      <main>
        <SalaryCalculator users={users} setUsers={setUsers} />
        <HouseholdSummary users={users} setUsers={setUsers} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
