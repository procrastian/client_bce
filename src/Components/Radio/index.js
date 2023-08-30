import "./style.css";

export default function Radio({ handleChange, formState }) {
  return (
    <div id="collective_radio">
      <ul>
        <li>
          <input
            id="collectiveYes"
            type="radio"
            name="joinCollective"
            value="true"
            onChange={handleChange}
            checked={formState.joinCollective === true}
          />
          <label htmlFor="collectiveYes">Yes</label>
        </li>
        <li>
          <input
            id="collectiveNo"
            type="radio"
            name="joinCollective"
            value="false"
            onChange={handleChange}
            checked={formState.joinCollective === false}
          />
          <label htmlFor="collectiveNo">No</label>
        </li>
      </ul>
    </div>
  );
}
