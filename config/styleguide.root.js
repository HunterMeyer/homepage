export default previewComponent => {
  return {
    render(createElement) {
      return createElement(previewComponent)
    }
  }
}
