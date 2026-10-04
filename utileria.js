(function (global) {
	
	'use strict';

	function validarEmail(email) {
		if (typeof email !== 'string') return false;
		var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if (!regex.test(email)) return false;
		var partes = email.split('@');
		var usuario = partes[0];
		var dominio = partes[1];
		if (!usuario || !dominio) return false;
		var caracteresEspeciales = /[!#$%&'*\/=?^_`{|}~]/;
		if (caracteresEspeciales.test(usuario) || caracteresEspeciales.test(dominio)) return false;
		return true;
	}

	function validarTexto(text) {
		if (typeof text !== 'string') return false;
		var regex = /^[a-zA-ZáéíóúüýñÁÉÍÓÚÜÑ\s]+$/;
		return regex.test(text);
	}

	function validarPassword(password) {
		if (typeof password !== 'string') return false;
		if (password.length < 8) return false;
		if (!/[A-Z]/.test(password)) return false;
		if (!/\d/.test(password)) return false;
		if (/\s/.test(password)) return false;
		if (!/[!@#$%^&*(),.?":{}|<>_+\-\[\]\\\/;'`~]/.test(password)) return false;
		return true;
	}

	global.Utileria = {
		validarEmail: validarEmail,
		validarTexto: validarTexto,
		validarPassword: validarPassword
	};
})

(window);