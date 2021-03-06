Ext.define('tool_control_system.view.part.part_relation.FormController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.part-part_relation-form',
    
    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getViewModel().getStore('part_relations');
        viewModel = this.getViewModel();

        param = {
        	parent_part_id : param.parent_part_number,
        	children_part_id :  param.children_part_number
        }

        if(viewModel.getData().btn_save.text == 'Save'){
            model = new tool_control_system.model.Part_relation(param);
            store.add(model);
            self = this;
            store.sync({
                success : function (){
                    self.listReload();
                }
            });
        }

    	this.onCancelClick();
    },

    onSearch : function(component, e){

    	if (e.keyCode == 13) {
    		search_by_children_part_no = this.getElementValue().search_by_children_part_no;
            search_by_parent_part_no = this.getElementValue().search_by_parent_part_no;

    		store = this.getViewModel().getStore('part_relations');
    		param = {}

            if (search_by_parent_part_no != '') {
                param.parent_part_no = search_by_parent_part_no
            }

            if (search_by_children_part_no != '') {
                param.children_part_no = search_by_children_part_no
            }

            console.log({
                store, param
            })

            store.load({
                params: param
            })
            
    	}
    },

    deleteListOnClick : function (){
        grid = Ext.ComponentQuery.query('part_part_relation_List')[0]; //ambil object grid
        if (grid) {
            console.log(grid);
            var sm = grid.getSelectionModel(); //ambil model dari grid tsb, *daily_ouput //contructor   
            var rs = sm.getSelection(); //ambil object modelnya, berupa array
            
            if (!rs.length) {
              Ext.Msg.alert('Info', 'No Record Selected');
              return;
            }
            
            Ext.Msg.confirm('Remove Record', 
              'Are you sure you want to delete?', 
              function (button) {
                if (button == 'yes') {
                  grid.store.remove(rs[0]);
                  grid.store.sync()
                }
            });
        }
    },

    listReload : function (){
        store = this.getViewModel().getStore('part_relations');
        store.load();
    },

    ParentPartOnChange : function (){
    	viewModel = this.getViewModel();
    	// data = viewModel.getData();
    	element = this.getElementValue();
    	store = this.getViewModel().getStore('parts');
    	id = element.parent_part_number;
    	model = store.findRecord('id', id );
    	
        if (model != null ) {

        	viewModel.setData({
    			parent_part_name: model.get('name')	
        	})
        }
    },

    childrenPartOnChange : function (){
    	viewModel = this.getViewModel();
    	// data = viewModel.getData();
    	element = this.getElementValue();
    	store = this.getViewModel().getStore('parts');
    	id = element.children_part_number;
    	model = store.findRecord('id', id );
    	
        if (model != null ) {

        	viewModel.setData({
    			children_part_name: model.get('name')	
        	})
        }
    },

    onCancelClick: function (){
    	this.clearValue();
    	this.disableAll();
        this.getElement().parent_part_number.focus();
    	this.getViewModel().setData({
    		btn_save: {
    			text: 'Save'
    		},
            
            parent_part_name : null,
        
	        children_part_name: null,
	        
	        model: {
	            parent_part_id : null,
	            children_part_id : null,
	        },

    	})

        // console.log(this.getViewModel())
    },

    onDeleteClick: function (editor, edit){
        store = this.getViewModel().getStore('parts');
        part_no = this.getElementValue().no;
        model = store.findRecord('no', part_no);

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
                self.clearValue();
                self.disableAll();
                self.onCancelClick();
            }
        });
    },

    onPartNumberEnter: function(){
    },

    getElementValue : function (){
    	components = this.getElement();
    	return {
	        parent_part_number 		    : components.parent_part_number.value,
	        parent_part_name 		    : components.parent_part_name.value,
	        children_part_number 	    : components.children_part_number.value,
	        children_part_name 		    : components.children_part_name.value,
            search_by_parent_part_no    : components.search_by_parent_part_no.value,
            search_by_children_part_no  : components.search_by_children_part_no.value
	    }
    },

    getElement: function(){
    	return {
        	parent_part_number: Ext.ComponentQuery.query('combobox[name=parent_part_number]')[0],
        	parent_part_name: Ext.ComponentQuery.query('textfield[name=parent_part_name]')[0],
        	children_part_number: Ext.ComponentQuery.query('combobox[name=children_part_number]')[0],
        	children_part_name: Ext.ComponentQuery.query('textfield[name=children_part_name]')[0],

            search_by_parent_part_no: Ext.ComponentQuery.query('textfield[name=search_by_parent_part_no]')[0],
            search_by_children_part_no: Ext.ComponentQuery.query('textfield[name=search_by_children_part_no]')[0],

        	btn_save: Ext.ComponentQuery.query('button[name=btn_save_part_relation]')[0],
        	btn_cancel: Ext.ComponentQuery.query('button[name=btn_cancel_part_relation]')[0],
        	btn_delete: Ext.ComponentQuery.query('button[name=btn_delete_part_relation]')[0]
        }

    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
    	components.parent_part_number.setValue(null);
    	components.parent_part_name.setValue(null);
    	components.children_part_number.setValue(null);
    	components.children_part_name.setValue(null);
    	

        // tools = this.getViewModel().getParent().getStore('tools'); //list store
        // tools.loadData([], false );
    },

    disableAll: function (){
    	components = this.getElement();
    	
    	// components.parent_part_number.disable();
    	components.parent_part_name.disable();
    	// components.children_part_number.disable();
    	components.children_part_name.disable();
    },

    enableAll :  function (){
    	components = this.getElement();

    	components.parent_part_name.enable();
    	components.children_part_name.enable();
    },

    changesPartRelationsStore : function (id){
        store = this.getViewModel().getStore('part_relations');
        viewModel = this.getViewModel();
        console.log(id)
        store.load({
            params: {
                children_part_id : id
            },
            success : function (){
                console.log()
            }
        })
    },

    onDownload (){
        console.log('onDownload')
        self = this;
        token = '?token='+ tool_control_system.util.Config.getToken();
        url = 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/part_relations/download' + token

        window.location = url
    },

    //this is listener. this controller listen to another controller to fire specific event that already 
    //configured like below
    listen : {
        controller : {
            'part-list-all' : { //this is controller alias name
                //name of the event : //method to trigger here
                'onInit': 'changesPartRelationsStore'
            },

            'main' : { //this is controller alias name
                //name of the event : //method to trigger here
                'onInit': 'changesPartRelationsStore'
            },
        }
    }

});
