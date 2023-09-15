

const Checkout = props =>{


    return (
        <form >
      <div >
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' />
      </div>
      <div >
        <label htmlFor='address'>Address</label>
        <textarea rows='5' id='opening-text' ></textarea>
      </div>
      <button onClick={props.HideForm}>Cancel</button>
      <button>Order</button>
    </form>
    );
};

export default Checkout;