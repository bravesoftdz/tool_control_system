
Ext.define('tool_control_system.view.part.list.Parts',{
    extend: 'Ext.grid.Panel',

    xtype : 'part_list_parts',

    requires: [
        'tool_control_system.view.part.list.PartsController',
        'tool_control_system.view.part.list.PartsModel'
    ],

    controller: 'part-list-parts',
    viewModel: {
        type: 'part-list-parts'
    },

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    emptyText: 'No Data',

    frame: true,

    title: 'All Parts',

    margin : '2 0 0 0',

    style:{
        'border-color': '#D0D0D0'
    },

    bind:{
        store : '{parts}' 
    },

    columns: [
        { text: 'Part Number',  dataIndex: 'no', flex: 2, 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_no',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]
        },
        { text: 'Part Name', dataIndex: 'name', flex: 2, layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_name',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]
        },
        { text: 'Supplier Name', dataIndex: 'supplier_name', flex: 2, layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_supplier',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },
        { text: 'Model', dataIndex: 'model', flex: 2, layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_model',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },
        { text: 'First Value', dataIndex: 'first_value', flex: 2, layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_first_value',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },
        { 
            text: 'Date Of First Value', 
            dataIndex: 'date_of_first_value', 
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_part_by_date_of_first_value',
                margin : 2,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]
        }
    ],

    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        bind : {
            store : '{parts}'
        },        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],
    
});
