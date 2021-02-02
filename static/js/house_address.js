(function(){
	"use strict";
	var contador = -1;

	function addHomeAddress() {
		var house_addressClonnable = document.getElementById("form-template").cloneNode(true);
		var house_addressForms = document.getElementById("house_address_forms");
		
		
		house_addressForms.appendChild(house_addressClonnable)

		contador--;
		$(house_addressClonnable).attr("id", "house_address_" + contador)
		$(house_addressClonnable).removeClass("d-none");
		var removeButton = $(house_addressClonnable).find("button")
		$(removeButton).data("id", contador).on("click", removeHomeAddress);

		$(this).remove();

		$("#house_address_forms").append("<button type='button' class='add-house_address btn btn-secondary d-block ml-auto mt-2'>&#10010; Add Home Address</button>");
		$(".add-house_address").on("click", addHomeAddress);
		$(house_addressForms).find("select.country").on("change", changeState);
	}

	function changeState() {
//		var select_state = $(this).parents("div.row").find("select.state")
//		select_state.children("option:gt(0)").hide();
//		select_state.children("option[data-country='" + $(this).val() + "']").show();
//
//		if (select_state.children("option:selected").is(":hidden")){
//			select_state.children("option:nth(0)").prop("selected", true);
//		}
        var select_state = this.closest("div.row").querySelector("select.state");
		var select_country_selected = this.value;

        for(var i=1; i < select_state.length; i++){
             if(select_state[i].dataset.country != select_country_selected)
                select_state[i].classList.add("d-none");
             else{
                select_state[i].classList.remove("d-none");
                if(select_state[i].getAttribute('selected'))
                   select_state.value = select_state[i].value;
             }
        }

        select_state.value=-1
	}

	function removeHomeAddress() {
		var id = $(this).data("id");
		$("#house_address_" + id).remove();
		$(this).remove();
	}


	function ready(fn) {
		if (document.readyState != 'loading'){
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}

	function nodeIterate(nodeList, functionCallback) {
		var i = nodeList.length;
		while (i){
			functionCallback(nodeList[--i]);
		}
	}

	function addEvent(nodeList, event, fn){
		nodeIterate(nodeList, function(element){
			element.addEventListener(event, fn);
		});
	}

	function triggerEvent(nodeList, eventName){
		var event = document.createEvent('HTMLEvents');
		event.initEvent(eventName, true, false);
		nodeIterate(nodeList, function(element){
			element.dispatchEvent(event);
		})
	}

	ready(function() {
		addEvent(document.querySelectorAll(".add-house_address"), "click", addHomeAddress);
		addEvent(document.querySelectorAll(".remove-house_address"), "click", removeHomeAddress);
		addEvent(document.querySelectorAll("select.country"), "change", changeState);
/* 		triggerEvent(document.querySelectorAll("select.country"), "change"); */
	});
})();