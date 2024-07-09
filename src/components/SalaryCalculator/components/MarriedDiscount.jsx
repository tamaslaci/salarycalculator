const MarriedDiscount = ({user, updateUsers}) => {

    const checkDate = (date) => {
        const weddingDate = new Date(date);
        const tolerance = (new Date(2024, 1, 1)).getTime() - (new Date(2022, 1, 1)).getTime();
        const today = new Date();
        const delta = today.getTime() - weddingDate.getTime();
        const month = weddingDate.getFullYear() === today.getFullYear() && weddingDate.getMonth() === today.getMonth();
        return (delta < tolerance && delta > 0 && !month);
    }

    const weddingDate = (
        <div id="weddingDate">
            <label htmlFor="weddingdate">Házasságkötés dátuma:</label>
            <input type="date" name="weddingDate" id="weddingdate" value={user.married.weddingDate} onChange={e => {
                user.married.weddingDate = e.target.value;
                if(checkDate(user.married.weddingDate) && !user.married.included){
                    user.netSalary += user.married.discount;
                    if(user.netSalary > user.salary){
                        const delta = user.netSalary - user.salary;
                        user.married.discount -= delta;
                        user.netSalary = user.salary;
                    }
                    user.married.included = true;
                }else if(!checkDate(user.married.weddingDate) && user.married.included){
                    user.netSalary -= user.married.discount;
                    if(user.married.discount !== 5_000) user.married.discount = 5_000;
                    user.married.included = false;
                }
                updateUsers(user);
            }} />
            {checkDate(user.married.weddingDate) ? <b><i>JOGOSULT!</i></b> : <b><i>NEM JOGOSULT!</i></b>}
        </div>
    );
    
    return (
        <div id="marriedDiscount">
            <input type="checkbox" name="married" id="married" checked={user.married.applied} onChange={e => {
                user.married.applied = e.target.checked;
                if(user.married.applied && checkDate(user.married.weddingDate)){
                    user.netSalary += user.married.discount;
                    if(user.netSalary > user.salary){
                        const delta = user.netSalary - user.salary;
                        user.married.discount -= delta;
                        user.netSalary = user.salary;
                    }
                    user.married.included = true;
                }else if(checkDate(user.married.weddingDate)){
                    user.netSalary -= user.married.discount;
                    if(user.married.discount !== 5_000) user.married.discount = 5_000;
                    user.married.included = false;
                }
                updateUsers(user);
            }} />
            <label htmlFor="personal">Friss házasok kedvezménye</label>
            {user.married.applied ? weddingDate : ""}
        </div>
    );
}

export default MarriedDiscount;