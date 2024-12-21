  window.addEventListener('scroll', function() {
  const products = document.querySelectorAll('.product-item');
  products.forEach(product => {
      const productTop = product.getBoundingClientRect().top;
      if (productTop < window.innerHeight) {
          product.classList.add('visible');
      }
  });
});



const socialIcons = document.querySelectorAll('.social-icon');

socialIcons.forEach(icon => {
  icon.addEventListener('click', function() {
      this.classList.add('clicked');

      // Через 1 секунду (1000мс) удаляем класс, чтобы вернуть исходное состояние
      setTimeout(() => {
          this.classList.remove('clicked');
      }, 1000); // 1000 мс = 1 секунда
  });
});


// Обработчик отправки формы
document.addEventListener('DOMContentLoaded', function() {

  // Обработчик клика по кнопке
  document.querySelector("#btn-email").addEventListener('click', function(event) {
      event.preventDefault(); // Отменяем стандартное поведение формы (отправка)

      const emailInput = document.getElementById('email-input');
      const errorMessage = document.getElementById('error-message');

      // Регулярное выражение для проверки правильности email
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Проверка email на соответствие шаблону
      if (emailPattern.test(emailInput.value)) {
          emailInput.classList.remove('invalid');
          
          alert('Subscription successful!');
      } else {
          emailInput.classList.add('invalid');
      }
  });


});
