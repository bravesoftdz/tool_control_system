Ext.define('tool_control_system.view.supplier.SupplierModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supplier-supplier',
    
    data: {
        name: 'tool_control_system',
        title : 'judul'
    },

    stores : {
    	suppliers : {    
    		type : 'suppliers'
        }
    }

});