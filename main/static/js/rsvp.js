document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input[name="food_restriction"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.food-restriction-details').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="bringing_guest"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.guest-name').style.display = this.value === 'yes' ? 'block' : 'none';
            document.querySelector('.guest-food-restriction').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="guest_food_restriction"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.guest-food-restriction-details').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

    document.querySelectorAll('input[name="bringing_kids"]').forEach(function(elem) {
        elem.addEventListener('change', function() {
            document.querySelector('.kids-ages').style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });
});
