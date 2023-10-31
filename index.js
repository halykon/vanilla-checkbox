const nativeCheckbox = document.querySelector('.native-checkbox')
const customCheckbox = document.querySelector('.custom-checkbox')
let checked = false

function toggleCheckbox() {
  checked = !checked
  nativeCheckbox.checked = checked
  customCheckbox.classList.toggle('checked', checked)
  customCheckbox?.ariaChecked = checked
}

nativeCheckbox?.addEventListener('click', toggleCheckbox)
customCheckbox?.addEventListener('click', toggleCheckbox)
customCheckbox?.addEventListener('keydown', (e) => {
  if (e.key !== ' ') return

  e.preventDefault()
  toggleCheckbox()
})