var codeOpen = false;
var helpOpen = false;

$("#codenav").click(function (){
	openCodeNav();
});

$("#helpnav").click(function (){
	openHelpNav();
});
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openCodeNav() {
	if(!codeOpen){
	    $('#codeDrawer').css('left','-255px').animate({"left":"-0px"});
	    
	    $('.code-tab').css({left:"-5px"})  // Set the left to its calculated position
	             .animate({"left":"250px"});
	    codeOpen = true;
    }

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeCodeNav() {
	if(codeOpen){
	   $('#codeDrawer').css('left','0px').animate({"left":"-255px"});
       $('.code-tab').css({left:"250px"})  // Set the left to its calculated position
             .animate({"left":"-5px"});
        codeOpen = false;
    }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openHelpNav() {
	if(!helpOpen){
	    $('#helpDrawer').css('left','-255px').animate({"left":"-0px"});
	    
	    $('.help-tab').css({left:"-5px"})  // Set the left to its calculated position
	             .animate({"left":"250px"});
	    helpOpen = true;
    }

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeHelpNav() {
	if(helpOpen){
	   $('#helpDrawer').css('left','0px').animate({"left":"-255px"});
       $('.help-tab').css({left:"250px"})  // Set the left to its calculated position
             .animate({"left":"-5px"});
        helpOpen = false;
    }
}