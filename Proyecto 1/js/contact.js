aaaaaaaaaaaaaaa;
const validation = new JustValidate(".main__contact");
let isValidate = false;

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "El nombre es obligatorio",
    },
    {
      rule: "MinLength",
      value: 3,
      errorMessage: "El nombre es muy corto",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "El nombre es demasiado largo",
    },
  ])
  .addField("#surname", [
    {
      rule: "required",
      errorMessage: "EL appelido son obligatorios",
    },
    {
      rule: "MinLength",
      value: 3,
      errorMessage: "El apellidoes muy corto",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Elapellido es demasiado largo",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "El email es obligatorio",
    },
    {
      rule: "email",
      value: 3,
      errorMessage: "El email no es valido",
    },
  ])
  .addField("#gender", [
    {
      rule: "required",
      errorMessage: "Selecciona un genero",
    },
  ])
  .addField("#date", [
    {
      rule: "required",
      errorMessage: "Selecciona una fecha valida",
    },
  ])
  .addField("#edad", [
    {
      rule: "required",
      errorMessage: "La edad es obligatoria",
    },
    {
      rule: "integer",

      errorMessage: "Solo son validos los numeros",
    },
  ])
  .onSeccess(() => {
    isValidate = true;
    alert("Todo es valido");
  });
