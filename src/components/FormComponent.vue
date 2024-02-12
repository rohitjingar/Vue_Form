<template>
    <div class="form-container">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm" action="/submit-form" method="POST">
        <!-- Form fields -->
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
          <span class="error" v-if="formErrors.name">{{ formErrors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
          <span class="error" v-if="formErrors.email">{{ formErrors.email }}</span>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
          <span class="error" v-if="formErrors.message">{{ formErrors.message }}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        formErrors: {}
      };
    },
    methods: {
      submitForm() {
        // Validate form before submission
        if (this.validateForm()) {
          // Submit form data
          
          fetch('/submit-form', {
            method: 'POST',
            body: JSON.stringify(this.formData),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              window.alert("Form submitted successfully!")
              console.log('Form submitted successfully!', this.formData);
              // Optionally, reset form after successful submission
              this.resetForm();
            } else {
              throw new Error('Failed to submit form');
            }
          })
          .catch(error => {
            console.error('Error submitting form:', error);
            // Handle error (e.g., display error message to user)
          });
        }
      },
      validateForm() {
        // Validation logic
        // Example: check if name, email, and message are filled out
        this.formErrors = {};
        let isValid = true;
        if (!this.formData.name.trim()) {
          this.formErrors.name = 'Name is required';
          isValid = false;
        }
        if (!this.formData.email.trim() || !this.isValidEmail(this.formData.email)) {
          this.formErrors.email = 'Valid email is required';
          isValid = false;
        }
        if (!this.formData.message.trim()) {
          this.formErrors.message = 'Message is required';
          isValid = false;
        }
        return isValid;
      },
      isValidEmail(email) {
        // Email validation logic
        // We can use a regular expression or other methods to validate email format
        // This is just a simple example
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      resetForm() {
        // Reset form data and errors
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
        this.formErrors = {};
      }
    }
  };
  </script>
  
  
  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: #dc3545;
    font-size: 0.9rem;
  }
  </style>
  