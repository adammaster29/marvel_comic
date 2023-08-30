import React, { useState } from 'react';

const Home = ({ comic }) => {
    const [buscador, setBuscador] = useState('');

    const buscar = () => {
        return comic.filter(comics =>
            comics.title.toLowerCase().includes(buscador.toLowerCase())
        );
    };

    console.log(buscador);

    return (
        <div className='padre'>
            <div className="hijo__logo">
                <img className='img__logo-spider' src="/img/spider.gif" alt="logo-spider" />
                <img className='img__logo' src="/img/logo__marvel.png" alt="logo-marvel" />
                <img className='img__logo-thor' src="/img/thor.gif" alt="logo-thors" />
            </div>
            
            <div className="contenedor__navCard">
                <nav className="navbar">
                    <input
                        value={buscador}
                        onChange={e => setBuscador(e.target.value)}
                        type="text"
                        placeholder='Buscar Comic'
                    />
                </nav>
                
                <div className="contenedor__comic">
                    {buscar().map(series => (
                        <div key={series.id} className="card">
                            <div className="comic__superior">
                               <p>{series.title}</p>
                               <p>{series.dates[1].date}</p>
                            </div>
                            <img
                                className='img__comic'
                                src={`${series.thumbnail.path}.${series.thumbnail.extension}`}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
