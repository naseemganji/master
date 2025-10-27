// Form functions
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('contact-form').reset();
    document.getElementById('result').textContent = "";
}

// Slideshow functions
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Close form when clicking outside
document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )

// Web3Forms - Exactly as recommended
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('result');
    
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            
            // Clear previous states
            result.textContent = "Sending....";
            result.className = ""; // Remove previous classes
            submitBtn.style.background = "#666";
            submitBtn.style.color = "#fff";
            submitBtn.disabled = true;
            
            const formData = new FormData(event.target);
            formData.append("access_key", "91a2c8d2-bc5e-42e0-ad0c-711f42667687");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                result.textContent = "Form Submitted Successfully";
                result.className = "success"; // Add success class
                submitBtn.style.background = "#10b981";
                submitBtn.textContent = "✓ SENT!";
                event.target.reset();
                setTimeout(() => closeForm(), 2000);
            } else {
                result.textContent = "Error - Please try again";
                result.className = "error"; // Add error class
                submitBtn.style.background = "#ef4444";
                submitBtn.textContent = "✗ FAILED";
            }
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = "SEND MESSAGE";
                submitBtn.disabled = false;
                submitBtn.style.background = "";
                submitBtn.style.color = "";
            }, 3000);
        });
    }
});

// Auto slideshow
setInterval(function() {
    plusSlides(1);
}, 6000);

