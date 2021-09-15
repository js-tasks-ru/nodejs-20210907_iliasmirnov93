const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.limit = options.limit;
    this.encoding = options.encoding;
  }

  _transform(chunk, encoding, callback) {
    
   
      callback(LimitExceededError, );
   

  }
}

module.exports = LimitSizeStream;
