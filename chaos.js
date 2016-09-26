var chaos = (function () {
  return {
    /**
     * initializes chaos by finding the canvas on the page
     * and resizing it to fill the size of the browser.
     */
    init: function () {
      this.canvas = document.getElementById('canvas')
      this.context = this.canvas.getContext('2d')
      this.setSize(window.innerWidth, window.innerHeight)
    },
    /**
     * as the name says.
     */
    setSize: function (width, height) {
      this.width = this.canvas.width = width
      this.height = this.canvas.height = height
    },
    /**
     * Clears the canvas by filling it with the color
     * specified, or by erasing all pixels if no color
     * is specified.
     */
    clear: function (color) {
      if (color) {
        this.context.fillStyle = color
        this.context.fillRect(0, 0, this.width, this.height)
      } else {
        this.context.clearRect(0, 0, this.width, this.height)
      }
    },
    /**
     * Pops up a bitmap image representation of the canvas in
     * a new window, for saving or printing.
     */
    popImage: function () {
      var win = window.open('', 'Canvas Image')
      var src = this.canvas.toDataURL('image/png')
      // console.log(src)
      // win.document.write('<img src="' + src + '" width="' + this.width + '" height="' + this.height + '"/>')
      win.document.write("<img src='" + src +
        "' width='" + this.width +
        "' height='" + this.height + "'/>")
    }
  }
}())
