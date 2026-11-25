import { useState } from "react";
import { useLocations } from "../context/LocationsContext";

const initialForm = {
  name: "",
  region: "",
  type: "City",
  lat: "",
  lng: "",
};

function AddLocationForm() {
  const { addLocation } = useLocations();

  const [formData, setFormData] = useState(initialForm);
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormError(null);
    setSuccessMessage(null);

    const name = formData.name.trim();
    const region = formData.region.trim();
    const type = formData.type;

    const lat = Number(formData.lat);
    const lng = Number(formData.lng);

    if (!name || !region) {
      setFormError("Name and region are required.");
      return;
    }

    if (formData.lat === "" || Number.isNaN(lat)) {
      setFormError("Latitude must be a number.");
      return;
    }

    if (formData.lng === "" || Number.isNaN(lng)) {
      setFormError("Longitude must be a number.");
      return;
    }

    if (lat < -90 || lat > 90) {
      setFormError("Latitude must be between -90 and 90.");
      return;
    }

    if (lng < -180 || lng > 180) {
      setFormError("Longitude must be between -180 and 180.");
      return;
    }

    addLocation({
      name,
      region,
      type,
      lat,
      lng,
    });

    setFormData(initialForm);

    setSuccessMessage(
      `${name} added. It currently exists only in local app state.`
    );

    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  }

  return (
    <form className="add-location-form" onSubmit={handleSubmit}>
      <h3>Add a location</h3>

      <label>
        Name
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Example: Lake Turkana"
        />
      </label>

      <label>
        Region
        <input
          name="region"
          type="text"
          value={formData.region}
          onChange={handleChange}
          placeholder="Example: Turkana County"
        />
      </label>

      <label>
        Type
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="City">City</option>
          <option value="Town">Town</option>
          <option value="Mountain">Mountain</option>
          <option value="Lake">Lake</option>
          <option value="National Park">National Park</option>
          <option value="National Reserve">National Reserve</option>
          <option value="Beach">Beach</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <div className="form-row">
        <label>
          Latitude
          <input
            name="lat"
            type="number"
            step="any"
            min="-90"
            max="90"
            value={formData.lat}
            onChange={handleChange}
            placeholder="Example: 3.2"
          />
        </label>

        <label>
          Longitude
          <input
            name="lng"
            type="number"
            step="any"
            min="-180"
            max="180"
            value={formData.lng}
            onChange={handleChange}
            placeholder="Example: 36.1"
          />
        </label>
      </div>

      <button type="submit">Add location</button>

      {formError && <p className="error">{formError}</p>}

      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default AddLocationForm;