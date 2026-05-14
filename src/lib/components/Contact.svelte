<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';
  let sending = false;

  async function handleSubmit(e) {
    e.preventDefault();
    sending = true;
    status = 'Envoi en cours...';
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('_replyto', email);
    formData.append('message', message);
    
    try {
      const response = await fetch('https://formspree.io/f/meenwbvo', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        status = '✅ Message envoyé !';
        name = '';
        email = '';
        message = '';
        setTimeout(() => status = '', 3000);
      } else {
        throw new Error('Erreur réseau');
      }
    } catch (error) {
      status = '❌ Erreur, veuillez réessayer.';
      setTimeout(() => status = '', 3000);
    } finally {
      sending = false;
    }
  }
</script>

<section id="contact" class="contact-section">
  <h2 class="section-title">Contactez-moi</h2>
  <form on:submit={handleSubmit} class="contact-form">
    <div class="form-group">
      <label for="name">Nom</label>
      <input type="text" id="name" bind:value={name} required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" rows="5" bind:value={message} required></textarea>
    </div>
    <button type="submit" class="btn-submit" disabled={sending}>
      {sending ? 'Envoi...' : 'Envoyer'}
    </button>
    {#if status}
      <p class="status">{status}</p>
    {/if}
  </form>
</section>

<style>
  .contact-section {
    padding: 4rem 1rem;
    max-width: 48rem;
    margin: 0 auto;
  }
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  label {
    font-weight: 500;
    color: #1f2937;
    font-size: 0.875rem;
  }
  :global(.dark) label {
    color: #f3f4f6;
  }
  input, textarea {
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    background-color: white;
    transition: all 0.2s;
    font-family: inherit;
    font-size: 1rem;
  }
  :global(.dark) input, :global(.dark) textarea {
    background-color: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }
  input:focus, textarea:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59,130,246,0.2);
  }
  .btn-submit {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 0.75rem;
    border-radius: 9999px;
    font-weight: 600;
    transition: transform 0.2s, opacity 0.2s;
    cursor: pointer;
    border: none;
    font-size: 1rem;
  }
  .btn-submit:hover:not(:disabled) {
    transform: scale(1.02);
  }
  .btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .status {
    text-align: center;
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: rgba(16,185,129,0.1);
    color: #10b981;
    font-weight: 500;
  }
  @media (max-width: 640px) {
    .contact-section {
      padding: 2rem 1rem;
    }
    input, textarea {
      font-size: 0.875rem;
    }
  }
</style>