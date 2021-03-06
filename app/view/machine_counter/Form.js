
Ext.define('tool_control_system.view.machine_counter.Form',{
    extend: 'Ext.form.Panel',

    xtype : 'machine_counter_form',

    requires: [
        'tool_control_system.view.machine_counter.FormController',
        'tool_control_system.view.machine_counter.FormModel'
    ],

    controller: 'machine_counter-form',
    
    viewModel: {
        type: 'machine_counter-form'
    },

    frame: true,

    title: 'Input Counter Machine',

    margin : '10',

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items:[
        {
            xtype: 'textfield',
            name: 'tool_number_machine_counter',
            fieldLabel: 'Tool Number',
            allowBlank: false,
            emptyText: 'Type And Enter',
            bind:{
                value: '{model.no}'
            },
            enableKeyEvents: true,
            tooltip: 'type tool number and click enter button',
            listeners:{
                keyup: 'onSearch'
            }

        },{
            xtype: 'textfield',
            name: 'tool_name_machine_counter',
            fieldLabel: 'Tool Name',
            disabled: true,
            bind: {
                value : '{tool.name}'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'number_of_tooling_machine_counter',
            fieldLabel: 'Number Of Tooling',
            bind: {
                value : '{tool.no_of_tooling}'
            },
            disabled: true,
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'tanggal',
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd',
            fieldLabel: 'Tanggal',
            bind: {
                value : '{model.tanggal}'
            },
            disabled: true,
        },{
            xtype: 'numberfield',
            name: 'machine_counter',
            fieldLabel: 'Machine Counter',
            disabled: true,
            autoStripChars: true,
            minValue: 0,
            bind: {
                value : '{model.machine_counter}'
            },
            allowBlank: false
        },{
            xtype : 'textarea',
            name : 'note',
            bind: {
                value : '{model.note}'
            },
            disabled: true,
            fieldLabel: 'Note'
        }
    ],

    buttons:[
        {
            xtype:'button',
            text : 'Save',
            tooltip : 'Save',
            formBind : true,
            name : 'btn_save_machine_counter',
            bind : {
                icon : '{icon.save}'
            },
            tooltip: 'Click to Save Data',
            listeners:{
                click: 'onSaveClick'
            }
        },
        {
            xtype:'button',
            text : 'Cancel',
            tooltip : 'Cancel',
            name : 'btn_cancel',
            bind : {
                icon : '{icon.cancel}'
            },
            listeners :{
                click : 'onCancelClick'
            }
        }
    ]
    
});
