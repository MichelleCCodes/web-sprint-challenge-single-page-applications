import React from 'react'; 

export default function Form () {
return (
    <form className="form-container">
<div className="pizza-form">

<h3>Choice of Size</h3>
<p>Required</p>
{/* DROPDOWN */}
<h3>Choice of Sauce</h3>
<p>Required</p>
{/* RADIO */}
<h3>Add Toppings</h3>
<p>Choose up to 10</p>
{/* checkboxes */}
<h3>Choice of Choice of Substitute</h3>
<p>Choose up to 1</p>
{/*toggle bar*/}<span>Gluten Free Crust (+$1.00)</span>
<h3>Special Instructions</h3>
{/*Input text placeholder: Anything else you'd like to add?*/}
{/* QUANTITY BAR + Add to Order (submit button)*/}
</div>

    </form>
); 
}