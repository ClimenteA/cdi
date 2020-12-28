
export function copyToClipboard(text) {
    if (navigator.clipboard) { // default: modern asynchronous API
      return navigator.clipboard.writeText(text)
    } else if (window.clipboardData && window.clipboardData.setData) {     // for IE11
      window.clipboardData.setData('Text', text)
      return Promise.resolve()
    } else {
      // workaround: create dummy input
      const input = document.createElement('input') 
      input.type = "text" 
      input.value = text
      document.body.append(input)
      input.focus()
      input.select()
      document.execCommand('copy')
      input.remove()
      return Promise.resolve()
    }
}
  
  