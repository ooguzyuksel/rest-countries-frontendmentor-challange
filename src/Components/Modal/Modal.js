import React from "react";
import "./modal.scss";
import { MapContainer, TileLayer } from "react-leaflet";

function Modal({ setModalController, lat, long }) {
  const modalCloseHandler = () => {
    setModalController(false);
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="button-container">
          <button className="modal-close-button" onClick={modalCloseHandler}>
            Close Map
          </button>
        </div>

        <div>
          <MapContainer
            className="map-container"
            center={[lat, long]}
            zoom={6}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
