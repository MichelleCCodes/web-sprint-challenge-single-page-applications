import React from 'react'; 

export default function Form () {
return (
<form className="form-container">
<div className="pizza-form">

<label>
<h3>Choice of Size</h3>
<p>Required</p>
{/* DROPDOWN */}
<select>
    <option value="">select size</option>
    <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
</select>
</label>

<label>
<h3>Choice of Sauce</h3>
<p>Required</p>
{/* RADIO */}
<div><input type="radio" name="sauce" value="original"/>Original Red</div>
<div><input type="radio" name="sauce" value="garlic" />Garlic Ranch</div>
<div><input type="radio" name="sauce" value="bbq" />BBQ Sauce</div>
<div><input type="radio" name="sauce" value="spinach" />Spinach Alfredo</div>
</label>

<label>
<h3>Add Toppings</h3>
<p>Choose up to 10</p>
{/* checkboxes */}
<input type="checkbox" name="pepperoni"/>pepperoni
<input type="checkbox" name="sausage"/>sausage
<input type="checkbox" name="onion"/>onion
<input type="checkbox" name="green-pepper"/>green pepper
<input type="checkbox" name="black-olives"/>black olives
<input type="checkbox" name="artichoke-hearts"/>artichoke hearts
<input type="checkbox" name="three-cheese"/>three cheese
</label>

</div>
</form>
); 
}