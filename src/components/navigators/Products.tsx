import { NavLink, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../models/navigatorProps";

type Props = {
    navConfProd: NavigatorProps;
}
export const Products: React.FC<Props> = (props) => {
    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "yellow", color: "black"}
        }
        return res;
    }
   function getItems (): JSX.Element[] {
        return props.navConfProd.navigatorConfig.map(el =>
            <li className="navigator-item">
            <NavLink style={({isActive}) => activeLink(isActive)} 
            to={el.navigatorTo}>{el.navigatorName}</NavLink>
        </li>)
    }
return <div>
    <nav>
    <ul className={props.navConfProd.classNameList}>
    {getItems()} 
                </ul> 
    </nav>
    <Outlet></Outlet>
</div>

}