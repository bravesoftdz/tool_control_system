Ext.define('tool_control_system.view.part.list.All', {
    extend: 'Ext.panel.Panel',

    xtype: 'part_list_all',

    layout: {
        type:'border'
    },

    height : 580,

    requires: [
        'tool_control_system.view.part.list.Parts',
        'tool_control_system.view.part.list.Part_details',
        //viewController & viewModel
        'tool_control_system.view.part.list.AllController',
        'tool_control_system.view.part.list.AllModel',
        // 'tool_control_system.view.part.part_relation.List',
    ],

    controller: 'part-list-all',
    
    viewModel: {
        type: 'part-list-all'
    },

    title: 'Part List Info',

    // bodyPadding : 10,
    margin: 10,

    bind:{
        icon : '{icon.title}'
    },

    autoScroll: true,

    items:[
    {
        // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
        xtype : 'part_list_parts',
        region: 'center',
        collapsible: true,
        split: {
            size: 10
        },
        width : '40%'
    },{
        xtype : 'part_list_part_details',
        region: 'south',
        maxHeight : 200,
        collapsible: true,
        split: {
            size: 10
        },
        width : '40%'
    }],

    listeners: {
        
    }
});
