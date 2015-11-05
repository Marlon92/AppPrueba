$(document).ready(function(){
	$("#ok").hide();

	$("#formid").validate({
		rules:{
			user: {required:true,minlength:2},
			password:{required:true,minlength:2},
			fecha:{required:true},
			edad:{required:true, maxlength:3},
			curso: {required:true,minlength:2},
			maestro:{required:true,minlength:2}
		},
		messages:{
			user:"Debe ingresar el usuario.",
			password:"Debe introducir la contraseña.",
			fecha:"Debe introducir su fecha de nacimiento",
			edad:"Debe ingresar su edad",
			curso:"Debe ingresar el curso",
			maestro:"Debe ingresar un maestro",
		},
		submitHandler:function(form){
			var dataString='user='+$('#user').val()+'&password='+$('#password').val()+
			'&fecha='+$('#fecha').val()+'&edad='+$('#edad').val()+
			'&curso='+$('#curso').val()+'&maestro='+$('#maestro').val();

			$.ajax({
				type:"POST",
				url:"send.php",
				data:dataString,
				success:function(data){
					$("#ok").html(data);
					$('#ok').show();
					$("#formid").hide();

				}
			});

		}
	});
});