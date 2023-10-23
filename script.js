 document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const strengthText = document.getElementById("password-strength-text");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        updatePasswordStrengthIndicator(strength);
    });

    function calculatePasswordStrength(password) {
        if (password.length >= 8) {
            return "Strong";
        } else if (password.length >= 6) {
            return "Medium";
        }

        return "Weak";
    }

    function updatePasswordStrengthIndicator(strength) {
        strengthText.textContent = strength;
    }
});
