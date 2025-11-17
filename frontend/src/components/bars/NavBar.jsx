import BackButton from "../buttons/BackButton";
import BreadCrumbs from "./BreadCrumbs";

export default function NavBar(){
    return <div className="nav">
        <BackButton/>
        <BreadCrumbs/>
    </div>
}