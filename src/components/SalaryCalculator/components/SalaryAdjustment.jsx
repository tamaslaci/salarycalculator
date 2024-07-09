const SalaryAdjusment = ({user, updateUsers, resetDiscounts}) => {
    return (
        <div id="salaryAdjustment">
            <input type="range" id="salarySlider" name="salarySlider"
                min={1} max={2_000_000} value={user.salary} onChange={e => {
                user.salary = e.target.value;
                resetDiscounts(user);
                user.personalTax = Math.round(user.salary * 0.15);
                user.socialTax = Math.round(user.salary * 0.185);
                user.netSalary = user.salary - user.personalTax - user.socialTax;
                updateUsers(user);
                }} />
            <br />
            <button onClick={e => {
                user.salary = Math.round(user.salary * 0.95);
                resetDiscounts(user);
                user.personalTax = Math.round(user.salary * 0.15);
                user.socialTax = Math.round(user.salary * 0.185);
                user.netSalary = user.salary - user.personalTax - user.socialTax;
                updateUsers(user);
            }}>-5%</button>
            <button onClick={e => {
                user.salary = Math.round(user.salary * 0.99);
                resetDiscounts(user);
                user.personalTax = Math.round(user.salary * 0.15);
                user.socialTax = Math.round(user.salary * 0.185);
                user.netSalary = user.salary - user.personalTax - user.socialTax;
                updateUsers(user);
            }}>-1%</button>
            <button onClick={e => {
                user.salary = Math.round(user.salary * 1.01);
                resetDiscounts(user);
                user.personalTax = Math.round(user.salary * 0.15);
                user.socialTax = Math.round(user.salary * 0.185);
                user.netSalary = user.salary - user.personalTax - user.socialTax;
                updateUsers(user);
            }}>+1%</button>
            <button onClick={e => {
                user.salary = Math.round(user.salary * 1.05);
                resetDiscounts(user);
                user.personalTax = Math.round(user.salary * 0.15);
                user.socialTax = Math.round(user.salary * 0.185);
                user.netSalary = user.salary - user.personalTax - user.socialTax;
                updateUsers(user);
            }}>+5%</button>
        </div>
    );
}

export default SalaryAdjusment;