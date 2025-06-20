import { useState } from 'react';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Ici tu peux envoyer vers un service comme EmailJS, Formspree ou une API
    console.log(form);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordonnées entreprise */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Nos coordonnées</h2>
          <p><strong>Adresse :</strong> 123 Rue de l’Innovation, 75000 Paris</p>
          <p><strong>Téléphone :</strong> <a href="tel:+33123456789" className="text-blue-600 hover:underline">01 23 45 67 89</a></p>
          <p><strong>Email :</strong> <a href="mailto:contact@entreprise.com" className="text-blue-600 hover:underline">contact@entreprise.com</a></p>
          <p><strong>Horaires :</strong> Lun - Ven : 9h à 18h</p>
          <a
            href="https://www.google.com/maps?q=123+Rue+de+l’Innovation,+75000+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Voir sur Google Maps
          </a>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow">
          <div>
            <label htmlFor="name" className="block font-medium">Nom</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 p-2 rounded mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Envoyer
          </button>

          {status === 'success' && (
            <p className="text-green-600 font-medium mt-2">Message envoyé avec succès !</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
