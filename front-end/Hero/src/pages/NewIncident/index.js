import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 

import api from '~/services/api';

import './styles.css';
import logoImg from '~/assets/img/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ongId,
        }
      });

      history.push('/profile');
    } catch (error) {
      alert('Error when registering case, try again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Register new case</h1>        
          <p>Describe the case in detail to find a hero to solve it.</p>
          
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to the home page
          </Link> 
        </section>
        
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Case title" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input 
            placeholder="Description" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Dollars value" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
