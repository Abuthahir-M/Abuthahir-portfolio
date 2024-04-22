function collaborate()
{
    alert(`Database connection error.
Please drop mail @: syedthahir0915@gmail.com`);
}

document.addEventListener('DOMContentLoaded',
function()
{
    var toggler = document.getElementById('toggler');
    var menuLinks = document.querySelectorAll('.menu-link');

    menuLinks.forEach(
        function(link)
        {
        link.addEventListener('click',
            function()
            {
                // Close the menu by unchecking the toggler checkbox
                toggler.checked = false;
            });
        });
});
