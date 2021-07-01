import { registerBlockType } from '@wordpress/blocks';

registerBlockType('plugin/phone-link', {
  title: 'Phone Link',
  icon: 'phone',
  category: 'common',
  attributes: {
    telNumber: { type: 'string' },
    telMessage: { type: 'string' }
  },
  edit: (props) => {
    function updateTelNumber(event) {
      props.setAttributes({ telNumber: event.target.value });
    }

    return (
      <>
        <p>
          Enter the phone number below as a 10 digit number with no other
          characters or spaces. E.g. 7778675309.
        </p>
        <input
          type="text"
          placeholder="Enter Phone Number..."
          value={props.attributes.telNumber}
          onChange={updateTelNumber}
        />
      </>
    );
  },
  save: (props) => {
      const numbersArr = props.attributes.telNumber.split('');
      const formattedNumber = `(${numbersArr[0]}${numbersArr[1]}${numbersArr[2]}) ${numbersArr[3]}${numbersArr[4]}${numbersArr[5]}-${numbersArr[6]}${numbersArr[7]}${numbersArr[8]}${numbersArr[9]}`;
    return (
      <p className="phone-link-container">
        Tel: <span itemprop="telephone">
          <a className="phone-link" href={`tel:+1${props.attributes.telNumber}`}>{formattedNumber}</a>
        </span>
      </p>
    );
  },
});
