const FamilyDiscount = ({user, updateUsers}) => {

    const checkSalary = () => {
        if(user.netSalary > user.salary){
            const delta = user.netSalary - user.salary;
            user.family.discount -= delta;
            user.netSalary = user.salary;
        }
    }
    
    const calculateNetSalary = () => {
        if(user.family.applied){
            if(user.family.discountedDependants === 1){
                user.netSalary -= user.family.discount;
                updateUsers(user);
                user.family.discount = 10_000 * user.family.dependants;
                user.netSalary += user.family.discount;
                checkSalary();
                updateUsers(user);
            }else if(user.family.discountedDependants === 2){
                user.netSalary -= user.family.discount;
                updateUsers(user);
                user.family.discount = 20_000 * user.family.dependants;
                user.netSalary += user.family.discount;
                checkSalary();
                updateUsers(user);
            }else if(user.family.discountedDependants === 3){
                user.netSalary -= user.family.discount;
                updateUsers(user);
                user.family.discount = 33_000 * user.family.dependants;
                user.netSalary += user.family.discount;
                checkSalary();
                updateUsers(user);
            }else{
                user.netSalary -= user.family.discount;
                user.family.discount = 0;
                updateUsers(user);
            }
        }else{
            user.netSalary -= user.family.discount;
            user.family.discount = 0;
            updateUsers(user);
        }
    }

    const AdjustFamilyDiscount = (
        <div id="adjustFamilyDiscount">
            <button onClick={(e) => {
                if(user.family.dependants > 0){
                    --user.family.dependants;
                    if(user.family.dependants < user.family.discountedDependants){
                        user.family.discountedDependants = user.family.dependants;
                    }
                }
                calculateNetSalary();
            }}>-</button>
            { user.family.dependants }
            <button onClick={(e) => {
                ++user.family.dependants;
                calculateNetSalary();
            }}>+</button>
            <i>Eltartott, ebből kedvezményezett:</i>
            <button onClick={(e) => {
                if(user.family.discountedDependants > 0){
                    --user.family.discountedDependants;
                }
                calculateNetSalary();
            }}>-</button>
            { user.family.discountedDependants }
            <button onClick={(e) => {
                if(user.family.discountedDependants < 3 && user.family.discountedDependants < user.family.dependants){
                    ++user.family.discountedDependants;
                }
                calculateNetSalary();
            }}>+</button>
        </div>
    );

    return (
        <div id="familyDiscount">
            <input type="checkbox" name="family" id="family" checked={user.family.applied} onChange={e => {
                user.family.applied = e.target.checked;
                calculateNetSalary();
            }} />
            <label htmlFor="under25">Családi kedvezmény</label>
            {user.family.applied ? AdjustFamilyDiscount : ""}
        </div>
    );
}

export default FamilyDiscount;