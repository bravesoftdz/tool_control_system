/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('tool_control_system.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Tool Control System',

        btn_sync: {
            text : 'Sync'
        },

        header: {
        	icon: 'resources/menu.png'
        },

        list:{
            icon: 'resources/main-icon.png'
        },

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    stores :{
        datas : {
            type : 'datas'
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
