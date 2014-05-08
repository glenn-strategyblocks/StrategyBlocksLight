

define(['sb_light/models/_abstractModel'], function( _Model ) {

	var Model = _Model.extend({

		init: function(sb) {
			this._super(sb, "groups", sb.urls.MODEL_GROUPS);
		}
	});
	
	return Model;	
});
