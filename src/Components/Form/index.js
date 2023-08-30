import "./style.css";
import Checkboxes from "../Checkboxes";
import Radio from "../Radio";

export function Form({ formState, setFormState, resetForm, initialFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    resetForm();
    setFormState(initialFormData);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    console.log("e.target", e.target.value);
    if (type === "checkbox" && name === "activity") {
      setFormState({ ...formState, [value]: checked });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>
          For all enquires, please contact via the form below, and someone will
          be in touch!
        </h2>

        <label>
          What is your name?
          <input
            onChange={handleChange}
            type="text"
            name="parentName"
            value={formState.parentName}
          />
        </label>

        <label>
          What is the name of your child?
          <input
            onChange={handleChange}
            type="text"
            name="childName"
            value={formState.childName}
          />
        </label>

        <label>
          How old is your child?
          <input
            onChange={handleChange}
            type="number"
            min={0}
            max={18}
            name="childAge"
            value={formState.childAge}
          />
        </label>

        <div className="form__group">
          <h3>Which courses are you interested in?</h3>
          <Checkboxes handleChange={handleChange} formState={formState} />
        </div>

        <div className="form__group radio">
          <h3>Would you like to join our Home Educator Collective?</h3>
          <Radio handleChange={handleChange} formState={formState} />
        </div>

        <label>
          What is the reason for your enquiry?
          <textarea
            onChange={handleChange}
            name="reason"
            cols="30"
            rows="10"
            value={formState.enquiryReason}
          ></textarea>
        </label>

        <label>
          What email address can we contact you at?
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={formState.email}
          />
        </label>

        <input className="form__submit" type="submit" value="Submit Enquiry!" />
      </form>
    </>
  );
}
