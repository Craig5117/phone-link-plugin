import { registerBlockType } from '@wordpress/blocks';

registerBlockType('plugin/phone-link', {
  title: 'Phone Link',
  icon: 'phone',
  category: 'common',
  attributes: {
    telNumber: { type: 'string' },
    telMessage: { type: 'string' },
  },
  edit: (props) => {
    function updateTelNumber(event) {
      props.setAttributes({ telNumber: event.target.value });
    }

    function handleSelect(event) {
      props.setAttributes({ telMessage: event.target.value });
    }

    return (
      <>
        <p style={{fontSize: ".75em"}}>
          Enter the phone number below as a 10 digit number with no other
          characters or spaces (e.g. 7778675309).<br/>
          Select how you want to display the number type (e.g. Mobile: (777)...). You can choose Fax as an option.<br/>
          If you select none, only the number link will display.
        </p>
        <select
          name="phone-type-select"
          id="phone-type-select"
          onChange={handleSelect}
          style={{marginRight: "2em", verticalAlign: "bottom"}}
        >
          <option value="">none</option>
          <option value="Mobile:">Mobile:</option>
          <option value="Telephone:">Telephone:</option>
          <option value="Tel:">Tel:</option>
          <option value="Phone:">Phone:</option>
          <option value="Fax:">Fax:</option>
        </select>
        <input
          type="text"
          placeholder="Enter Phone Number..."
          value={props.attributes.telNumber}
          onChange={updateTelNumber}
          style={{verticalAlign: "bottom"}}
        />
        
      </>
    );
  },
  save: (props) => {
    const numbersArr = props.attributes.telNumber.split('');
    const formattedNumber =
      numbersArr.length === 10
        ? `(${numbersArr[0]}${numbersArr[1]}${numbersArr[2]}) ${numbersArr[3]}${numbersArr[4]}${numbersArr[5]}-${numbersArr[6]}${numbersArr[7]}${numbersArr[8]}${numbersArr[9]}`
        : null;
    return (
      <p className="phone-link-container">
        {props.attributes.telMessage && (
          <span className="phone-link-message">{props.attributes.telMessage} </span>
        )}
        {formattedNumber ? (
          <span itemprop={props.attributes.telMessage === "Fax:"?"fax":"telephone"}>
            <a
              className="phone-link"
              href={`tel:+1${props.attributes.telNumber}`}
            >
              {formattedNumber}
            </a>
          </span>
        ) : (
          <span>invalid number</span>
        )}
      </p>
    );
  },
});
