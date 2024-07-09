import FamilyDiscount from "./FamilyDiscount";
import MarriedDiscount from "./MarriedDiscount";
import PersonalDiscount from "./PersonalDiscount";
import Under25Discount from "./Under25Discount";

const Discounts = ({user, updateUsers}) => {
    return (
        <div id="discounts">
            
            <h3><b>KEDVEZMÉNYEK</b></h3>

            <Under25Discount user={user} updateUsers={updateUsers} />

            <MarriedDiscount user={user} updateUsers={updateUsers} />

            <PersonalDiscount user={user} updateUsers={updateUsers} />

            <FamilyDiscount user={user} updateUsers={updateUsers} />

        </div>
    );
}

export default Discounts;