Ext.define('tool_control_system.view.tool.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tool-form',

    requires:[
        'tool_control_system.model.Tool'
    ],

    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getViewModel().getStore('tools');
        viewModel = this.getViewModel();
        
        // console.log({
        //     param,
        //     components,
        //     store,
        //     viewModel
        // })

        // return ;

        if(viewModel.getData().btn_save.text == 'Save'){
            model = new tool_control_system.model.Tool(param);
            store.add(model);
            store.sync({
                callback : function (batch, option, success){
                    console.log(batch, option)
                }
            });
            
        }else{
            //coding update
            model = this.getViewModel().getData().model;

            model.data.delivery_date = this.getElementValue().delivery_date;
            model.data.start_value_date = this.getElementValue().start_value_date;
            
            console.log({
                model : model,
                param : this.getElementValue()
            })

            model.store.sync();
        }

    	this.onCancelClick();

    },

    onSearch : function(component, e){

    	if (e.keyCode == 13) {
    		no = this.getElementValue().no;
    		store = this.getViewModel().getStore('tools');
    		viewModel = this.getViewModel();
    		element = this.getElement();
            self = this;

            store.load({
                params: {
                    no: no
                },
                callback: function(records,operation,success){
                    var model = store.findRecord('no', no);
                    if(model != null){
                        
                        // console.log(model.data)

                        viewModel.setData({
                            model : model,
                            btn_save: {
                                text: 'Update'
                            }
                        })

                        self.enableAll();
                        element.no.disable();
                        element.btn_delete.enable();
                        element.btn_save.enable();

                        element.name.focus();
                    }
                    else{
                        if( viewModel.getData().model.no == '' || viewModel.getData().model.no == null ){
                            // console.log(viewModel.getData())
                            Ext.Msg.alert('Info','You need to specify this data' );
                        }else{ //buat baru
                            self.enableAll();
                            // console.log('buat baru')
                            element.name.focus();
                            element.btn_save.enable();
                        }
                    }

                }
            })
            
    	}
    },

    onCancelClick: function (){
    	this.clearValue();
    	this.disableAll();
        this.getElement().no.focus()
        this.getViewModel().setData({
            btn_save :{
                text: 'Save'
            },
            btn_delete :{
                text: 'Delete'
            },
            model: {
                no: null,
                name: '',
                no_of_tooling: 'TL-01',
                start_value: 0,
                guarantee_shoot: 0,
                delivery_date: new Date(),
                supplier_id: null,
                // balance_shoot : 0,
                start_value_date : new Date(),
                // guarantee_remains: 0
            }
        })
    },

    onDeleteClick: function (editor, edit){
        store = this.getViewModel().getStore('tools');
        no = this.getElementValue().no;
        model = store.findRecord('no', no);
        if (!model ) {
          Ext.Msg.alert('Info', 'No Record Selected');
          return;
        }

        self = this;
        
        Ext.Msg.confirm('Remove Record', 
          'Are you sure you want to delete?', 
          function (button) {
            if (button == 'yes') {
                
                store.remove(model);
                store.sync();
                //this.clearValue();
                //this.disableAll();
                self.onCancelClick()
            }
        });
    },

    onPartNumberEnter: function(){

    },

    getElementValue : function (){
    	var element = this.getElement();
        return {
            no : element.no.value,
            name : element.name.value,
            no_of_tooling : element.no_of_tooling.value,
            start_value: element.total_shoot.value,
            // balance_shoot : element.total_shoot.value, //isinya sama kaya total shoot
            guarantee_shoot : element.guarantee_shoot.value,
            delivery_date: element.delivery_date.rawValue,
            start_value_date: element.start_value_date.rawValue,
            supplier_id : element.supplier_id.value,
            // guarantee_remains: 0,
        }
    },

    getElement: function(){
    	return {
        	no: Ext.ComponentQuery.query('textfield[name=tool_number]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=tool_name]')[0],
        	no_of_tooling: Ext.ComponentQuery.query('textfield[name=number_of_tooling]')[0],
        	total_shoot: Ext.ComponentQuery.query('numberfield[name=total_shoot]')[0],
        	guarantee_shoot: Ext.ComponentQuery.query('numberfield[name=guarantee_shoot]')[0],
        	delivery_date: Ext.ComponentQuery.query('datefield[name=delivery_date]')[0],
            start_value_date: Ext.ComponentQuery.query('datefield[name=start_value_date]')[0],
        	supplier_id: Ext.ComponentQuery.query('combobox[name=supplier_id]')[1],
        	btn_save: Ext.ComponentQuery.query('button[name=btn_save]')[1],
        	btn_delete: Ext.ComponentQuery.query('button[name=btn_delete]')[1]
        }
    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
    	components.no.setValue('');
    	components.name.setValue('');
    	components.no_of_tooling.setValue('TL-01');
    	components.total_shoot.setValue(0);
    	components.guarantee_shoot.setValue(0);
    	components.delivery_date.setValue(new Date());
        components.start_value_date.setValue(new Date());
    	components.supplier_id.setValue(null);
    },

    disableAll: function (){
    	components = this.getElement();
    	components.no.enable(); //hanya no yang hidup
    	components.name.disable();
    	components.no_of_tooling.disable();
    	components.total_shoot.disable();
    	components.guarantee_shoot.disable();
    	components.delivery_date.disable();
        components.start_value_date.disable();
    	components.supplier_id.disable();
        components.btn_save.disable();
        components.btn_delete.disable();

    },

    enableAll :  function (){
    	components = this.getElement();
    	components.name.enable();
    	components.no_of_tooling.enable();
    	components.total_shoot.enable();
    	components.guarantee_shoot.enable();
        components.delivery_date.enable();
    	components.start_value_date.enable();
    	components.supplier_id.enable();	
    },

    onShowList: function (){
        if (!modal) {
            var modal = Ext.create('Ext.window.Window', {
                // title: 'CHART',
                height: 600,
                width: 1100,
                maximizable : true,
                layout: 'fit',
                modal :true,

                items: [{
                    xtype:'tool_list',
                }]
            });
        }
        
        modal.show();
    }

});
