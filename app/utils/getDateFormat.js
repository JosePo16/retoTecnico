const getDateFormat = () => {
  const fecha = new Date();

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  // Formatear la fecha
  const fechaFormateada = `${dia.toString().padStart(2, "0")}/${mes
    .toString()
    .padStart(2, "0")}/${año}`;

  return fechaFormateada;
};


module.exports = getDateFormat;
