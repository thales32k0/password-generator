document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate');
    const passwordField = document.getElementById('password');
    const lengthInput = document.getElementById('length');
    
    const generatePassword = () => {
      const length = parseInt(lengthInput.value);
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    };
    
    generateButton.addEventListener('click', function() {
      const newPassword = generatePassword();
      passwordField.value = newPassword;
    });
  });
  