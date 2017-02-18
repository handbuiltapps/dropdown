#Custom Dropdown using jQuery#
This is a light-weight jquery plugin that provides a wrapper for the native HTML **SELECT** tag which will allow you to add custom CSS styling for the select tag without losing it's native behaviour.

##Requirements##
[jQuery](https://jquery.com) 1.4+

##Installation##
```html
<!-- jQuery library (served from Google) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- HBA Dropdown file -->
<script type="text/javascript" src="js/jquery.hbaDropdown.js"></script>
<!-- HBA Dropdown CSS file -->
<script type="text/javascript" src="js/jquery.hbaDropdown.css"></script>
```
##Usage##
```javascript
$('#select').hbaDropdown();
```
##Configuration Options##
```javascript
$('#select').hbaDropdown({
    promptClass: "empty",
    //CSS class to be added when selected option in null/empty. 
    //Defaults to "hba-prompt".
    selectedClass: "selected-item",
    //CSS class name for the tag showing the selected option. 
    //Defaults to "hba-selected-item".
    onChange: function(element, value, text) {
        //Code to be executed on changing an option.
    }
});
```
##Methods##
###destroy()###
Removes the select wrapper completely. This will return the element back to its pre-init state. You can find the code sample below.
```javascript
//Initialise the plugin
var dropdown = $('#select').hbaDropdown();
//Invoke the destroy method
dropdown.destroy();
```

##Author##
[Balaji Viswanath](https://github.com/balajigans)
