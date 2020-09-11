//Add poliza
const mongoose = require('mongoose');
const { Schema } = mongoose;

//Define Collection and schema for Adpolizas

let PolizaSchema = new Schema({

    fcPropuesta :{ type: Date, required: true  },
    nroPropuesta:{ type: Number, required: true, unique : true, dropDups: true },
    nombreAseguradora:{ type: String },
    ramo:{ type: String, required: true },
    subRamo :{ type: String},
    rutCliente:{ type: String, required: true },
    nombreCliente:{ type: String, required: true },
    rutAcreedor:{ type: String, required: true },
    nombreAcreedor:{ type: String, required: true },
    rutMandante:{ type: String, required: true },
    nombreMandante:{ type: String, required: true },
    direccion:{ type: String, required: true },
    region:{ type: String, required: true },
    comuna:{ type: String, required: true },
    comisionKonex:{ type: Number, required: true },
    formaPago:{ type: String, required: true },
    nroCuotas:{ type: Number, required: true },
    fcPrimeraCuota: { type: Date },
    comisionEmpresa:{ type: Number, required: true },
    inicioVigencia:{ type: Date, required: true },
    finVigencia:{ type: Date, required: true },
    primaAfecta:{ type: Number, required: true },
    primaExenta:{ type: Number, required: true },
    primaNeta:{ type: Number, required: true },
    iva:{ type: Number, required: true },
    primaBruta:{ type: Number, required: true },
    tipoMoneda:{ type: String, required: true },
    comisionExenta:{ type: Number, required: true },
    comisionAfecta:{ type: Number, required: true },
    montoTotal:{ type: Number, required: true },
    cobertura:{ type: String },
    Limites:{ type: String },
    Items:{ type: String },
    estado:{ type: String, required: true},
    estadoPago: {type: String, required: true}
})

module.exports = mongoose.model('Poliza', PolizaSchema);