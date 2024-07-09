const PersonalDiscount = ({user, updateUsers}) => {
    return (
        <div id="personalDiscount">
            <input type="checkbox" name="personal" id="personal" checked={user.personal.applied} onChange={e => {
                user.personal.applied = e.target.checked;
                if(e.target.checked){
                    user.netSalary += user.personal.discount;
                    if(user.netSalary > user.salary){
                        const delta = user.netSalary - user.salary;
                        user.personal.discount -= delta;
                        user.netSalary = user.salary;
                    }
                }else{
                    user.netSalary -= user.personal.discount;
                    if(user.personal.discount !== 77_300) user.personal.discount = 77_300;
                }
                updateUsers(user);
            }} />
            <label htmlFor="family">Személyi adókedvezmény</label>
        </div>
    );
}

export default PersonalDiscount;