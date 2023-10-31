const nativeCheckbox = document.querySelector('.native-checkbox')
const customCheckbox = document.querySelector('.custom-checkbox')
let checked = document.querySelector('.native-checkbox')?.checked ?? false


function toggleCheckbox(event) {
  if(event && event.type === 'keydown' && event.key !== ' ') return
  event?.preventDefault()
  checked = !checked
  nativeCheckbox.checked = checked
  customCheckbox.classList.toggle('checked', checked)
  customCheckbox.ariaChecked ??= String(!!checked)
}

// Alternative to html props with more JS:
// nativeCheckbox?.addEventListener('click', toggleCheckbox)
// customCheckbox?.addEventListener('click', toggleCheckbox)
// customCheckbox?.addEventListener('keydown', (e) => {
//   if (e.key !== ' ') return

//   e.preventDefault()
//   toggleCheckbox()
// })