import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ task }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" color="gray">
        Description
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{task.title}</DialogHeader>
        <DialogBody divider>{task.description}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default Modal;
