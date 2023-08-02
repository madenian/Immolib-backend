const mongoose = require('mongoose');

const bienSchema = mongoose.Schema({
  titre :String,
  description : String,
  surface: Number,
  type: String,
  transaction: String,
  numeroRue: String,
  rue: String,
  codePostal: Number,
  nbPièces: Number,
  nbChambres: Number,
  meuble: Boolean,
  photo: String,
  loyerMensuel: Number,
  prixVente: Number,
  visites: [{type: mongoose.Schema.Types.ObjectId, ref: 'visites' }],
  Pro: { type: mongoose.Schema.Types.ObjectId, ref: 'Pros' },
});
  
const Biens = mongoose.model('biens', bienSchema);

module.exports = Biens;