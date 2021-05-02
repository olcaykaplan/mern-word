import {MenuItem as  ItemMenu} from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";


const MenuItem = ({item}) => {
  return (
    <ItemMenu
      component={Link}
      to={`${item.to}`}
      variant={`${item.variant}`}
      size={`${item.size}`}
      color={`${item.color}`}
    >
      {item.name}
    </ItemMenu>
  );
};

export default MenuItem