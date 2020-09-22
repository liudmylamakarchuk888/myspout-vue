var fs = require('fs'), json;

class jsonReader2 {

 readJsonFileSync(filepath:string, encoding:String='utf8') {
    if (typeof (encoding) === 'undefined') {
        encoding = 'utf8';
    }

    var file = fs.readFileSync(filepath, encoding);

    return JSON.parse(file);
  }
  
  public getFile(file:string) {
    var filepath = __dirname + '/../sampleFiles/' + file;
    return this.readJsonFileSync(filepath);
  }

}

module.exports = jsonReader2
