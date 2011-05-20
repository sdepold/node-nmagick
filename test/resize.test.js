var assert  = require('assert')
  , NMagick = require(__dirname + "/../index")

module.exports = {
  'it generates the correct command for lengthwise': function() {
    assert.eql(
      new NMagick(__dirname + "/assets/lengthwise.png").resize({ size: '200x200' }).toString(),
      'convert -resize 200x200'
    )
  },
  'it generates the correct command for lengthwise with width and height': function() {
    assert.eql(
      new NMagick(__dirname + "/assets/lengthwise.png").resize({ width: 200, height: 200 }).toString(),
      'convert -resize 200x200'
    )
  }
}