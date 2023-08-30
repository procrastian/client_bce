import "./style.css";

export default function Checkboxes({ handleChange, formState, setFormState }) {
  return (
    <div id="courseInterestCheckboxes">
      <ul>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.oneToOneYoung}
              name="courseOption"
              type="checkbox"
              value="1-1 mindfulness, meditation and Yoga practice for young people"
            />
            1-1 mindfulness, meditation and Yoga practice for young people
          </label>
        </li>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.threeToFiveYearsGroup}
              name="courseOption"
              type="checkbox"
              value="3 to 5 years - Group mindfulness, meditation and Yoga practice for young people"
            />
            3 to 5 years - Group mindfulness, meditation and Yoga practice for
            young people
          </label>
        </li>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.fiveToEightYearsGroup}
              name="courseOption"
              type="checkbox"
              value="5 to 8 years - Group mindfulness, meditation and Yoga practice for young people"
            />
            5 to 8 years - Group mindfulness, meditation and Yoga practice for
            young people
          </label>
        </li>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.eightToThirteenYearsGroup}
              name="courseOption"
              type="checkbox"
              value="8 to 13 years - Group mindfulness, meditation and Yoga practice for young people"
            />
            8 to 13 years - Group mindfulness, meditation and Yoga practice for
            young people
          </label>
        </li>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.parentAndBabyNature}
              name="courseOption"
              type="checkbox"
              value="Parent and Baby Nature Sensory class"
            />
            Parent and Baby Nature Sensory class
          </label>
        </li>
        <li>
          <label>
            <input
              className="checkbox"
              onChange={handleChange}
              checked={formState.oneToOneTutoring}
              name="courseOption"
              type="checkbox"
              value="1-1 Tutoring KS1 to KS5"
            />
            1-1 Tutoring KS1 to KS5
          </label>
        </li>
      </ul>
    </div>
  );
}
