import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import DeleteIcon from "@mui/icons-material/Delete";

export function Chat({ title, selected, deleteConversationByName }) {
  return (
    <ListItem button={true} selected={selected}>
      <ListItemIcon>
        <AccountCircle fontSize="large" />
      </ListItemIcon>
      <div>
        <ListItemText primary={title} />
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => deleteConversationByName(title)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
