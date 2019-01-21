if (typeof mihaildev == "undefined" || !mihaildev) {
    var mihaildev = {};
}

mihaildev.elFinder = {
    currentWindow : { closed:true },
    context : null,
    openManager: function(options){
        var params = "menubar=no,toolbar=no,location=no,directories=no,status=no,fullscreen=no";
        if(options.width == 'auto'){
            options.width = jQuery(window).width()/1.5;
        }

        if(options.height == 'auto'){
            options.height = jQuery(window).height()/1.5;
        }

        params = params + ",width=" + options.width;
        params = params + ",height=" + options.height;

        if(this.currentWindow.closed) {
            if(options.context) {
                this.context = options.context;
            } else {
                this.context = null;
            }
            this.currentWindow = window.open(options.url, 'ElFinderManager' + options.id, params);
            this.currentWindow.focus();
        }
    },
    functions: {},
    register: function(id, func){
        this.functions[id] = func;
    },
    callFunction: function(id, file){
        return this.functions[id](file, id, this.context);
    },
    functionReturnToInput: function(file, id){
        jQuery('#' + id).val(file.url);
        return true;
    }
};