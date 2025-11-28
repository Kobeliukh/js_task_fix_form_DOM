'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  label.className = 'field-label';
  label.id = input.id;
  label.textContent = input.name.toUpperCase();

  input.before(label);
});
