document.addEventListener('DOMContentLoaded', () => {
    const pass = document.querySelector('#pass');
    const newPassword = document.querySelector('#newPassword');
    const generateButton = document.querySelector('#generateButton');
  
    function generatePass() {
      const passLength = parseInt(pass.value, 10);
  
      if (isNaN(passLength) || passLength <= 0) {
        alert('Digite um tamanho válido para a senha!');
        return;
      }
  
      let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let password = "";
  
      for (let i = 0, n = charset.length; i < passLength; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
  
      newPassword.textContent = password; 
    }
  
    generateButton.addEventListener('click', generatePass);
  });
  