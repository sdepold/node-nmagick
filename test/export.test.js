var assert  = require('assert')
  , NMagick = require(__dirname + "/../index")

module.exports = {
  'it should generate the correct command for lengthwise': function(done) {
    var src  = __dirname + "/assets/lengthwise.png"
      , dest = __dirname + '/assets/result.png'
    
    new NMagick(src).resize({ size: '200x200' }).export(dest, function(err, nmagick) {
      assert.eql(nmagick.command, 'convert -resize 200x200 ' + src + ' ' + dest)
    })
  }
}