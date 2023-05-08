import { lighten } from "polished";
import { styled } from "@mui/material/styles";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";

import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen} position>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact us</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
