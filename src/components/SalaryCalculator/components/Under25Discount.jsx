const Under25Discount = ({user, updateUsers}) => {
    return (
        <div id="under25Discount">
            <input type="checkbox" name="under25" id="under25" checked={user.under25.applied} onChange={e => {
                user.under25.applied = e.target.checked;
                const salaryWithoutPersonalTax = 499_952;
                const personalTax = Math.round(user.salary * 0.15);
                const discountedPersonalTax = Math.round((user.salary - salaryWithoutPersonalTax) * 0.15);
                if(e.target.checked){
                    if(user.salary > salaryWithoutPersonalTax){
                        user.under25.discount = personalTax - discountedPersonalTax;
                        user.netSalary += user.under25.discount;
                        if(user.netSalary > user.salary){
                            const delta = user.netSalary - user.salary;
                            user.under25.discount -= delta;
                            user.netSalary = user.salary;
                        }
                    }else{
                        user.under25.discount = user.personalTax;
                        user.netSalary += user.under25.discount;
                        if(user.netSalary > user.salary){
                            const delta = user.netSalary - user.salary;
                            user.under25.discount -= delta;
                            user.netSalary = user.salary;
                        }
                    }
                }else{
                    if(user.salary > salaryWithoutPersonalTax){
                        user.netSalary -= user.under25.discount;
                        user.under25.discount = personalTax - discountedPersonalTax;
                    }else{
                        user.netSalary -= user.under25.discount;
                        user.under25.discount = user.personalTax;
                    }
                }
                updateUsers(user);
            }} />
            <label htmlFor="married">25 év alattiak SZJA mentessége</label>
        </div>
    );
}

export default Under25Discount;