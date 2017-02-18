(function ($) {
    $.fn.hbaDropdown = function (options) {
        //Default Options
        var defaults = {
            promptClass: "hba-prompt",
            selectedClass: "hba-selected-item",
            onChange: null
        };
        var settings = $.extend({}, defaults, options);

        /****************************
         CORE FUNCTION FOR THIS PLUGIN
         *****************************/
        var core = {
            init: function (element, settings) {
                var selected = '.' + settings.selectedClass;

                //Check if tag is select
                if (element.tagName != 'SELECT') {
                    alert('The plugin must be used only with select element');
                    return false;
                }

                //Check if element is already initialised
                if ($(element).closest('.hba-dd').length) {
                    console.log('Element has already been initialized');
                    return false;
                }
                
                //Create wrapper div
                var container = $('<div/>', {
                    'class': 'hba-dd',
                    'style': 'position: relative'
                });
                if(element.id)
                    container.attr('id', element.id + 'hba_dd');

                //Wrap select inside the created wrapper
                $(element).wrap(container);

                //Add CSS for select tag
                $(element).css({
                    "opacity" : 0,
                    "position" : "absolute",
                    "top" : 0,
                    "right" : 0,
                    "width" : "100%",
                    "height" : "100%"
                });
                
                //Div to hold the selected value
                var selected = $('<div/>', { 
                    'class': settings.selectedClass,
                    'html': '<span></span>'
                });
                if(element.id)
                    selected.attr('id', element.id + 'hba_dd_selected');
                
                //Append to container
                $(element).before(selected);
                
                //Trigger change on init
                core.trigger.onChange(element);
                
                //Events
                $(element).bind('change', function (e) {
                    core.trigger.onChange(this);
                });
            },
            trigger: {
                onChange: function (element) {
                    var el = $(element),
                        container = el.closest('.hba-dd'),
                        label = el.find('option:selected').text();
                        selectedItem = container.find('.' + settings.selectedClass);
                    
                    selectedItem.find('span').text(label);
                    if(el.val() === "")
                        selectedItem.addClass(settings.promptClass);
                    else
                        selectedItem.removeClass(settings.promptClass);

                    if ($.isFunction(settings.onChange))
                        settings.onChange(element, value, text);
                },
                destroy: function (element) {
                    //Unbind click events
                    $(element).unbind('change');

                    //Remove selected item
                    $(element).prev().remove();

                    //Remove the wrapper
                    if($(element).parent().is( "div.hba-dd" )) {
                        $(element).unwrap();
                    }
                }
            }
        };
        
        /********************
         INITIALIZE THE PLUGIN
         *********************/
        this.each(function () {
            core.init(this, settings);
        });

        this.destroy = function () {
            core.trigger.destroy(this);
        };

        return this;
    };
}(jQuery));
