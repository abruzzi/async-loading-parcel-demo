import './ProTools.css';

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

const ProTools = () => {
  return (
    <li>
      <MenuTrigger>
        <Button aria-label="Menu">
          <span className="material-symbols-outlined">more_horiz</span>
        </Button>
        <Popover>
          <Menu onAction={x => console.log(x)}>
            <MenuItem id="open">Open</MenuItem>
            <MenuItem id="rename">Rename…</MenuItem>
            <MenuItem id="duplicate">Duplicate</MenuItem>
            <MenuItem id="share">Share…</MenuItem>
            <MenuItem id="delete">Delete…</MenuItem>
          </Menu>
        </Popover>
      </MenuTrigger>
    </li>
  );
};

export default ProTools;
