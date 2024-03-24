import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from "@mui/material";
import FeedbackSnackbar from '../FeedbackSnackbar/FeedbackSnackbar';
import CustomTextField from '../CustomTextField/CustomTextField';
import { RestaurantInfo } from "../../content/RestaurantInfo";

export const ContactModal = ({ open, setOpen }) => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  useEffect(() => {
    const isValid = formValues.name.trim() && formValues.email.includes('@') && formValues.message.trim();
    setIsFormValid(isValid);
  }, [formValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const resetForm = () => {
    setFormValues(initialState);
    setIsFormValid(false);
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const sendMail = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(process.env.REACT_APP_SMTP_ENDPOINT + 'dev/send_email', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_address: `Website Message <mail@${RestaurantInfo.domainName}>`,
          to_address: RestaurantInfo.contactEmail,
          subject: `${formValues.name} - ${formValues.email}`,
          body: formValues.message
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send email.");
      setSnackbar({ open: true, message: "Message sent successfully!", severity: 'success' });
      handleClose();
    } catch (error) {
      setSnackbar({ open: true, message: error.message || "Error sending message.", severity: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} PaperProps={{
        component: "form",
        onSubmit: sendMail,
        noValidate: true,
        sx: {
          backgroundColor: "white",
          margin: "12px",
          borderRadius: "16px",
          padding: "16px 0px 0px 0px",
        },
      }}>
        <DialogTitle sx={{fontWeight: 'bold', margin: '8px 12px'}}>How can we help?</DialogTitle>
        <DialogContent sx={{borderTop: 'solid 2px rgba(0,0,0,0.3)', padding: '32px'}}>
          <DialogContentText sx={{color: "black", marginTop: '24px'}}>
            Send us a note with your contact info and we'll be sure to get back with you as soon as we can!
          </DialogContentText>
          <CustomTextField
            id="name"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <CustomTextField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <CustomTextField
            id="message"
            name="message"
            label="Message"
            type="text"
            multiline
            rows={4}
            value={formValues.message}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions sx={{padding: '12px 32px'}}>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button type="submit" disabled={!isFormValid || isLoading} color="primary">
            {isLoading ? <CircularProgress size={24} /> : "Send"}
          </Button>
        </DialogActions>
      </Dialog>
      <FeedbackSnackbar
        open={snackbar.open}
        handleClose={handleCloseSnackbar}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </>
  );
};

export default ContactModal;
