$(document).ready(function(){
	$(".button_login").click(function(){
		$(".error").remove();
		if($(".user").val()==""){
			$(".user").focus().after("<span class='error'>INGRESE SU NOMBRE</span>");
			return false;
		}else if($(".pass").val()==""){
			$(".pass").focus().after("<span class='error'>Ingrese su contraseña</span>");
			return false;
		}else if($(".fecha").val()==""){
			$(".fecha").focus().after("<span class='error'>Debe ingresar su fecha de nacimiento</span>");
			return false;
		}else if($(".edad").val()==""){
			$(".edad").focus().after("<span class='error'>Debe ingresar su edad </span>");
			return false;
		}else if($(".telefono").val()==""){
			$(".sexo").focus().after("<span class='error'>Ingrese un Telefono</span>");
			return false;
		}else if($(".sexo").val()==""){
			$(".sexo").focus().after("<span class='error'>Ingrese Sexo</span>");
		return false;
		}
	});
});