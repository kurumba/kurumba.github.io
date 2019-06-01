var commons = {};
$(document).ready(function(){
    commons = {
        /**
         * Loads an html page into a target div
         * @param {String} pageLocation Location of page to load, must end with .html
         * @param {String} targetDivId ID of the div to load content into (without #)
         */
        loadSection: function(pageLocation, targetDivId){
            const tDivId = `#${targetDivId}`;
            // $(tDivId)[0].load(pageLocation);
            console.log($(tDivId));
        }
    };
});