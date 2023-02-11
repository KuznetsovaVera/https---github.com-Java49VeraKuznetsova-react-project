import { NavLink, Outlet } from "react-router-dom";
import { NavigatorProps } from "../../models/navigatorProps";
import "./navigator.css";

type Props = {
    navConf: NavigatorProps;
}
export const Navigator: React.FC<Props> = ({navConf }) => {
    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "blue", color: "white"}
        }
        return res;
    }
   function getItems (): JSX.Element[] {
        return navConf.navigatorConfig.map(el =>
            <li className="navigator-item">
            <NavLink style={({isActive}) => activeLink(isActive)} 
            to={el.navigatorTo}>{el.navigatorName}</NavLink>
        </li>)
    }
return <div>
    <nav>
    <ul className={navConf.classNameList}>
    {getItems()} 
                </ul> 
    </nav>
    <Outlet></Outlet>
</div>

}
