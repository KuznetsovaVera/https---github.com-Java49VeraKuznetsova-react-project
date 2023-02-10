import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import { NavLink, Outlet } from "react-router-dom"
import { NavigatorProps } from "../../models/navigatorProps";
import "./navigator.css"

type Props = {
    navItemConf: NavigatorProps
 };

export const Layout: React.FC<Props> = (props) => {
    function activeLink(isActive: boolean): React.CSSProperties|undefined {
        let res: React.CSSProperties = {};
        if (isActive) {
            res = {backgroundColor: "blue", color: "white"}
        }
        return res;
    }
    return <div>
      
    <nav>
        <ul className={props.navItemConf.classNameList}>
        {props.navItemConf.navigatorConfig.map(el => 
            <li className="navigator-item">
            <NavLink style={({isActive}) => activeLink(isActive)} to={el.navigatorTo}>{el.navigatorName}</NavLink>
        </li>
          )}
        </ul>
    </nav>
        <Outlet></Outlet>
    </div>
}

/*
<li className="navigator-item">
<NavLink style={({isActive}) => activeLink(isActive)} to="/">Home</NavLink>
</li>
<li className="navigator-item">
<NavLink style={({isActive}) => activeLink(isActive)}to="/customers">Customers</NavLink>
</li>
<li className="navigator-item">
<NavLink style={({isActive}) => activeLink(isActive)}to="/orders">Orders</NavLink>
</li>
<li className="navigator-item">
<NavLink style={({isActive}) => activeLink(isActive)}to="/products">Products</NavLink>
</li>
*/
