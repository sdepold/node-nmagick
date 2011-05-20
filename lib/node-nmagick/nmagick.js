var NMagick = module.exports = function(src) {
  this.src = src
  this.commandQueue = []
  this.binary = 'convert'
  this.command = null
}

NMagick.prototype.resize = function(options) {
  if(options.size) {
    var split = options.size.split('x')
    
    this.width = split[0]
    this.height = split[1]
  } else {
    this.width = options.width
    this.height = options.height
  }
  
  this.commandQueue.push('-resize')
  this.commandQueue.push([this.width, this.height].join('x'))
  
  return this
}

NMagick.prototype.crop = function(options) {
}

NMagick.prototype.blur = function(options) {
}

NMagick.prototype.export = function(dest, callback) {
  this.commandQueue.push(this.src)
  this.commandQueue.push(dest)
  
  this.command = this.toString()
  
  callback && callback(null, this)
}

NMagick.prototype.toString = function() {
  return [this.binary, this.commandQueue.join(" ")].join(" ")
}