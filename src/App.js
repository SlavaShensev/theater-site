import React from 'react';
import './App.scss';

function App() {
    return (

        <div className="App">

            <header className="header">
                <div className="container">
                    <div className="header__body">
                        <nav className="header__menu">
                            <ul className="menu menu__list">
                                <li className="menu__item">
                                    <a className="menu__link title-sm" href="#">
                                        Главная
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link title-sm" href="#">
                                        О театре
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link title-sm" href="#">
                                        Наши постановки
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link title-sm" href="#">
                                        Партнеры театра
                                    </a>
                                </li>
                                <li className="menu__item">
                                    <a className="menu__link title-sm" href="#">
                                        Контакты
                                    </a>
                                </li>
                            </ul>
                            <div className="menu menu__contact">
                                <a className="menu__number title-xs" href="tel:+7 495 123-45-67">
                                    +7 495 123-45-67
                                </a>
                            </div>
                        </nav>
                        <div className="header__content">
                            <div className="header__first-screen">

                            </div>
                            <div className="header__second-screen">

                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default App;
