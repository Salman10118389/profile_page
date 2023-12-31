import React, { useState } from 'react';
import './qualification.css';

const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="qualifications__section">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualifications__container container">
            <div className="qualifications__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active" : "qualification__button button__flex"}
                onClick={() => {toggleTab(1)}}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active" : "qualification__button button__flex"}
                    onClick={() => {toggleTab(2)}}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
                    toggleState === 1 ? "qualification__content-active qualification__content"
                    : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualificatoin__subtitle">Universitas Komputer Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualificatoin__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualificatoin__subtitle">Universitas Komputer Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={
                toggleState === 2 ? "qualification__content-active qualification__content"
                : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualificatoin__subtitle">Universitas Komputer Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div>

                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualificatoin__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualificatoin__subtitle">Universitas Komputer Indonesia</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Qualifications