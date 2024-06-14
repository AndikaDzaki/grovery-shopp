import   { useState } from 'react';
import './Ulasan.css';

const Ulasan = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for submitting the review goes here
    console.log({ rating, review, photo });
  };

  return (
    <div className="ulasan-container">
      <h2>Beri Nilai dan Ulasan Produk</h2>
      <div className="rating-container">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? 'selected' : ''}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="Tulis deskripsi ulasan Anda..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <input className='photo' type="file" accept="image/*" onChange={handlePhotoChange} />
        {photo && <img src={photo} alt="Review" className="review-photo" />}
        <button type="submit">Kirim Ulasan</button>
      </form>
    </div>
  );
};

export default Ulasan;
