// ==UserScript==
// @name         NPC Lab Protector
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  Removes pets from the lab page you don't want to accidentally zap!
// @author       plushies
// @include      https://neopetsclassic.com/lab2/
// @include      https://www.neopetsclassic.com/lab2/
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


//Put any pet names into the brackets that you want to prevent from showing at the lab!
    //Names must be in the [] brackets, in "" quotes, with a comma separating each one.
var hiddenPets = ["PETNAMEHERE", "PETNAMEHERE"]

var divs = document.getElementsByTagName('div');

    for (var i = 0; i < divs.length; i++)
    {
        var div = divs[i];

        if(div.style.cssText.indexOf("float: left; position: relative;") !== -1)
        {
            var petName = div.getElementsByTagName('img')[0].getAttribute("alt");

             for (var p = 0; p < hiddenPets.length; p++)
             {
                 if (hiddenPets[p] == petName)
                 {
                     console.log("hiding " + petName);
                     div.style.display = "none";
                 }
             }



            

        }

    }

})();
