// Grab all the category nav items
const navItems = document.querySelectorAll('.category-nav li');

// Add click handlers
navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Hide all .detail-section elements
    document.querySelectorAll('.detail-section').forEach(section => {
      section.classList.add('hidden');
    });

    // Remove active class from all nav items
    navItems.forEach(nav => nav.classList.remove('active'));

    // Activate clicked tab and show corresponding section
    item.classList.add('active');
    const target = item.getAttribute('data-target');
    document.getElementById(target).classList.remove('hidden');
  });
});

// Show "All" by default on page load
document.addEventListener("DOMContentLoaded", function() {
  const allItem = document.querySelector('.category-nav li[data-target="details-all"]');
  if (allItem) allItem.click();
});


