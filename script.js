document.addEventListener('DOMContentLoaded', () => {

    // Efeito de animação ao passar o mouse sobre as imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Scroll suave para navegação
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Feedback de envio de formulário
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simula o envio de uma mensagem bem-sucedida
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message';
            messageDiv.textContent = 'Mensagem enviada com sucesso!';
            contactForm.appendChild(messageDiv);
            
            // Remove a mensagem após alguns segundos
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
            
            contactForm.reset(); // Reseta o formulário após o envio
        });
    }

});
