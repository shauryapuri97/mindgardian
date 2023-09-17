import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { NODE_TYPES } from "./NetworkGraphConsts";
import {
  DEFAULT_SPACING,
} from "../../constants/AppConstants";

export const CreateNewNodeModal = ({ isOpen, onClose, onCreate }) => {
  const [selectedType, setSelectedType] = useState(Object.keys(NODE_TYPES)[0]);

  const onSubmit = () => {
    onCreate(selectedType);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Create new node</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please select from the below options to continue
        </DialogContentText>
        <FormControl sx={{ marginTop: DEFAULT_SPACING }}>
          <InputLabel id="type-select-small-label">Type</InputLabel>
          <Select
            labelId="type-select-small-label"
            id="type-select"
            value={selectedType}
            label="Type"
            onChange={(event) => setSelectedType(event.target.value)}
            size="small"
          >
            {Object.keys(NODE_TYPES).map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};
