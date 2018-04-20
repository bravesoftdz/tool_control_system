/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tool_control_system.view.main.Main', {
    extend: 'Ext.tab.Panel',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'tool_control_system.util.Config',        

        'tool_control_system.view.main.MainController',
        'tool_control_system.view.main.MainModel',
        'tool_control_system.view.main.List',
        
        'tool_control_system.view.supplier.Supplier',
        'tool_control_system.view.part.Part',
        'tool_control_system.view.tool.Tool',
        'tool_control_system.view.machine_counter.Machine_counter',

    ],

    controller: 'main',

    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,

    titleRotation: 0,
    
    tabRotation: 0,

    plugins: 'viewport',


    header: {

        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}',
                icon: '{header.icon}'
            },
            flex: 0
        },
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 10,
        style : {
            'background-image':'resource/background2.jpg',
            'background-color': 'green'
        },
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Input Machine<br>Counter',
            iconCls: 'fa-cog',
            items: [{
                xtype : 'machine_counterview'
            }]
        },{
            title: 'Log out',
            // xtype: 'button',
            iconCls: 'fa-sign-out',
            tabConfig: {
                listeners: {
                    click: 'onLogOut'
                }
            },
            items: {
                text : 'logout'
            }        
        }
    ],

    initItems: function (){
        var a = this.access_level;
        console.log('initItems', this.access_level ) //this.access_level diisi di Application.js
        if (a == 1) {
            
            this.items = [
                {
                    title: 'Home',
                    iconCls: 'fa-home',
                    // The following grid shares a store with the classic version's grid as well!
                    items: [{
                        xtype: 'mainlist'
                    }]
                }, {
                    title: 'Master Supplier',
                    iconCls: 'fa-user',
                    items: [{
                        xtype : 'supplierview'
                    }]
                }, {
                    title: 'Master Parts',
                    iconCls: 'fa-cog',
                    items: [{
                        xtype : 'partview'
                    }]
                }, {
                    title: 'Master Tools',
                    iconCls: 'fa-wrench',
                    items: [{
                        xtype : 'toolview'
                    }]
                },{
                    title: 'Input Machine<br>Counter',
                    iconCls: 'fa-cog',
                    items: [{
                        xtype : 'machine_counterview'
                    }]
                },{
                    title: 'Log out',
                    // xtype: 'button',
                    iconCls: 'fa-sign-out',
                    tabConfig: {
                        listeners: {
                            click: 'onLogOut'
                        }
                    },
                    items: {
                        title : 'logout'
                    }            
                }
            ];

        }
        
        this.callParent();
    }

});
