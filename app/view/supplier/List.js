Ext.define('tool_control_system.view.supplier.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'supplier_list',

    requires: [
        'tool_control_system.store.Suppliers'
    ],

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },
    //store nya di bind refer ke viewModel.data.stores
    bind: {
        store : '{suppliers}'
    },
    

    // layout : 'fit',
    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    columns: [
        {   
            text : 'No',
            width : 60,
            xtype: 'rownumberer'
        },

        { text: 'ID',  dataIndex: 'id' },
        
        { 
            text: 'Code',
            dataIndex: 'code', 
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_code',
                margin : 4,
                emptyText : 'search',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },
        { 
            text: 'Name',
            dataIndex: 'name',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_name',
                margin : 4,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                },
                emptyText : 'search'
            }]
        }
    ] 

});