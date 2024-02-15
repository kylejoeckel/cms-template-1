import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
} from "@mui/material";

export const ContactModal = ({open, setOpen}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          setOpen(false);
        },
      }}
    >
      <DialogTitle>Message us</DialogTitle>
      <DialogContent>
        <DialogContentText>
          How can we help you? Send us a note with your contact info and we'll
          be sure to get back with you as soon as we can!
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Contact name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="message"
          name="message"
          multiline
          label="Message"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button type="submit">Send</Button>
      </DialogActions>
    </Dialog>
  );
};
