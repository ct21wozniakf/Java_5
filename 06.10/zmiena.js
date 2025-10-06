const tekscik = document.getElementById('cipsia')

const czci = document.getElementById('wybierz')

const pog = document.getElementById('Pogrub')
const poch = document.getElementById('Pochyl')
const podk = document.getElementById('Podkres')
const przek = document.getElementById('Przekres')

function updateTextStyle() {
 
  tekscik.style.fontFamily = czci.value;

  tekscik.style.fontWeight = pog.checked ? 'bold' : 'normal';

  tekscik.style.fontStyle = poch.checked ? 'italic' : 'normal';
  
  tekscik.style.textDecoration = '';
  if (podk.checked) {
    tekscik.style.textDecoration += ' underline';
  }
  if (przek.checked) {
    tekscik.style.textDecoration += ' line-through';
  }
  tekscik.style.textDecoration = tekscik.style.textDecoration.trim() || 'none';
}

czci.addEventListener('change', updateTextStyle);
pog.addEventListener('change', updateTextStyle);
poch.addEventListener('change', updateTextStyle);
podk.addEventListener('change', updateTextStyle);
przek.addEventListener('change', updateTextStyle);



