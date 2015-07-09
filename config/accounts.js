AccountsTemplates.configure({
    homeRoutePath: '/'
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        displayName: "Username",
        required: true
    },
    pwd
]);
