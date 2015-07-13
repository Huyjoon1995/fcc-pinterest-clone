AutoForm.hooks(
    {
        'insertPinForm': {
            onSuccess: function () {
                sAlert.success('The pin has been created! Other\'s can now admire your hard work.');
            },
            onError: function(type, error) {
                sAlert.error('oh no! A scary error appeared so we could not save your pin :( "' + error + '"');
            }
        }
    });