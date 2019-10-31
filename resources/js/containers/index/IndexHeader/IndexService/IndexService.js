import React from 'react'
import './IndexService.scss'

export const IndexService = () => (

    <div className="col-md-4">

        <div className="IndexService-item">

            <div className="IndexService-item-top row">
                <div className="IndexService-item-top-number">
                    01
                </div>

                <div className="IndexService-item-top-title">
                    Видеомонтаж
                </div>
            </div>

            <div className="IndexService-item-desc">
                <p>От макета, до размещения на хостинге.</p>
            </div>

            <div className="IndexService-item-img" style={{backgroundImage: "url(../../../../images/service-01.jpg)"}} />

            <div className="IndexService-item-button">
                <a href="#">Подробнее</a>
            </div>

        </div>

    </div>
)
