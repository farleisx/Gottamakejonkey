document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async e => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
        await fetch('/api/signup', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email, password }) });
        await fetch('/api/signin', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ email, password }) });
        window.location.href = '/dashboard.html';
      } catch(err){ alert('Error'); }
    });
  }

  const generateBtn = document.getElementById('generateBtn');
  if (generateBtn) {
    generateBtn.addEventListener('click', async () => {
      const prompt = document.getElementById('prompt').value;
      const res = await fetch('/api/agent', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ prompt }) });
      const data = await res.json();
      document.getElementById('output').innerText = JSON.stringify(data.output, null, 2);
    });
  }
});
