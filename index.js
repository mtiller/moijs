var moparser = require('./moparser');
var codemirror = require('./codemirror/mode/modelica/modelica.js');

module.exports = {
    parse: moparser.parse,
    defineMode: codemirror.defineMode
}