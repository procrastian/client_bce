import "./style.css";
import { useState } from "react";
import { Form } from "../../Components/Form";

const initialFormData = {
  parentName: "",
  childName: "",
  childAge: 0,
  oneToOneYoung: false,
  threeToFiveYearsGroup: false,
  fiveToEightYearsGroup: false,
  eightToThirteenYearsGroup: false,
  parentAndBabyNature: false,
  oneToOneTutoring: false,
  joinCollective: false,
  enquiryReason: '',
  email: ''
};

export default function ContactForm() {
  const [formState, setFormState] = useState(initialFormData);

  const resetForm = () => {
    setFormState(initialFormData);
  };

  return (
    <>
      <div className="card" id="contact">
        <div className="image_container">
          <img
            id=""
            src={
              "https://images.unsplash.com/photo-1599921763085-f7a25401480d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1151&q=80"
            }
            alt=""
            draggable="false"
          />
        </div>
        <div className="text_container">
          <h1>Stay up to date with BCE!</h1>
        </div>
        <div id="contact_form">
          <Form
            formState={formState}
            setFormState={setFormState}
            resetForm={resetForm}
            initialFormData={initialFormData}
          />
        </div>
      </div>
    </>
  );
}
