// Custom Cursor
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', function (e) {
    const cursor = document.getElementById('cursor');
    cursor.style.display = 'block';
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  const buttons = document.querySelectorAll('.home-button');

  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      animateCursorSize('2.25rem');
    });

    button.addEventListener('mouseout', () => {
      animateCursorSize('1.4rem');
    });
  });

  function animateCursorSize(size) {
    const cursor = document.getElementById('cursor');
    cursor.style.transition = 'width 0.3s ease, height 0.3s ease';
    cursor.style.width = size;
    cursor.style.height = size;
  }
}




