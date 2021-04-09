window.onbeforeunload = function()     //this function gives the user a pop-up when the page is going to be reloaded, saying that changes will not be saved.  The browser itself will take care of what happens afterwards, such as the option to continue with reloading the page or cancelling the reload to preserve the form information put by the user
{
    return "";  
};

function submitForm()
{
    alert("Thanks for the feedback, your information has been recorded and registered.")
}