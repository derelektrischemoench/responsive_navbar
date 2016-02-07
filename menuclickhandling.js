jQuery(document).ready(function menuclickhandling() {
    jQuery('.clicktoexpand').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('ul.level1nav').toggleClass('active');
 
        e.preventDefault();
    });
});