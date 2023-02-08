const yargs = require("yargs");
var validator = require('validator');
const fungsiPertanyaan = require('./fungsiPertanyaan');
const { exit } = require("process");

yargs.command({
  command:'add',
  describe: 'add new contact',
  builder:{
    name:{
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'contact email',
      demandOption: false,
      type: 'string',
    },
    mobile:{
      describe: 'Contact mobile phone number',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv){
    fungsiPertanyaan.initData();
    fungsiPertanyaan.saveJawaban(argv.name, argv.email, argv.mobile);
  },  
})
.command({
  command: 'detail',
  describe: 'Detail Contact',
  builder:{
    name:{
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv){
  fungsiPertanyaan.initData();
    fungsiPertanyaan.readData(argv.name);
  }
})

//yargs.parse() untuk memunculkan perintah dari yargs
yargs.parse();
