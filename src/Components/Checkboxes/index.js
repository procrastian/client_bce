export default function Checkboxes({ handleChange, formState }) {
  return (
    <ul>
      <li>
        <label>
          1-1 mindfulness, meditation and Yoga practice for young people
          <input
            onChange={handleChange}
            checked={formState.oneToOneYoung}
            name="activity"
            type="checkbox"
            value="1-1 mindfulness, meditation and Yoga practice for young people"
          />
        </label>
      </li>
      <li>
        <label>
          3 to 5 years - Group mindfulness, meditation and Yoga practice for
          young people
          <input
            onChange={handleChange}
            checked={formState.threeToFiveYearsGroup}
            name="activity"
            type="checkbox"
            value="3 to 5 years - Group mindfulness, meditation and Yoga practice for young people"
          />
        </label>
      </li>
      <li>
        <label>
          5 to 8 years - Group mindfulness, meditation and Yoga practice for
          young people
          <input
            onChange={handleChange}
            checked={formState.fiveToEightYearsGroup}
            name="activity"
            type="checkbox"
            value="5 to 8 years - Group mindfulness, meditation and Yoga practice for young people"
          />
        </label>
      </li>
      <li>
        <label>
          8 to 13 years - Group mindfulness, meditation and Yoga practice for
          young people
          <input
            onChange={handleChange}
            checked={formState.eightToThirteenYearsGroup}
            name="activity"
            type="checkbox"
            value="8 to 13 years - Group mindfulness, meditation and Yoga practice for young people"
          />
        </label>
      </li>
      <li>
        <label>
          Parent and Baby Nature Sensory class
          <input
            onChange={handleChange}
            checked={formState.parentAndBabyNature}
            name="activity"
            type="checkbox"
            value="Parent and Baby Nature Sensory class"
          />
        </label>
      </li>
      <li>
        <label>
          1-1 Tutoring KS1 to KS5
          <input
            onChange={handleChange}
            checked={formState.oneToOneTutoring}
            name="activity"
            type="checkbox"
            value="1-1 Tutoring KS1 to KS5"
          />
        </label>
      </li>
    </ul>
  );
}
