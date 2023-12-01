import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {

    // Contador de visualizaciones
    const [viewCount, setViewCount] = useState(0);
    // Duración total del video
    const [videoDuration, setVideoDuration] = useState(null);
    // Contador de segundos que el usuario ha visto el video desde que le dio play (al darle pause, este contador se reinicia)
    const [seconds, setSeconds] = useState(0);
    // Tiempo total que el usuario ha visto el video (solo considera el tiempo que pasó entre el play y el pause o el final del video)
    // Si el usuario nunca da pause, este valor no cambia, puesto que seconds sería el tiempo total que lleva viendo el video el usuario
    const [totalSeconds, setTotalSeconds] = useState(0);
    // Estado del video (play/pause)
    const [play, setPlay] = useState(false);
    // Tiempo en el que el usuario le dio play al video
    const [startTimePlay, setStartTimePlay] = useState(0);

    const handleProgress = () => {
        // Si el video está pausado, no hace nada
        if (!play) return;

        // Calcula el tiempo que lleva el usuario viendo el video
        const currentTime = new Date().getTime();
        // Calcula el tiempo que lleva el usuario viendo el video desde que le dio play
        const timeElapsed = currentTime - startTimePlay;
        // timeElapsed viene en milisegundos, por lo que se convierte a segundos y se guarda
        setSeconds(Math.round(timeElapsed / 1000));

        // Calcula el porcentaje del video reproducido
        const playedPercentage = ((seconds + totalSeconds) / videoDuration) * 100;

        // Si el usuario ha visto al menos el 60% del video
        if (playedPercentage >= 60 && viewCount === 0) {
            // Incrementa la cantidad de visualizaciones
            setViewCount((prevCount) => prevCount + 1);
        }
    };

  const handleDuration = (duration) => {
    // Guarda la duración total del video
    setVideoDuration(duration);
  };

  const handlePlay = () => {
    // Si el video está pausado, lo pone en play
    setPlay(true);
    // Guarda el tiempo en el que el usuario le dio play al video
    setStartTimePlay(new Date().getTime());
  };

  const handlePause = () => {
    // Si el video está en play, lo pone en pausa
    setPlay(false);
    // Se obtiene el tiempo en que se dio pause al video
    const currentTime = new Date().getTime();
    // Calcula el tiempo que lleva el usuario viendo el video desde que le dio play
    const timeElapsed = currentTime - startTimePlay;
    // seconds se vuelve a cero para iniciar el contador de segundos al momento de darle play de nuevo
    setSeconds(0);
    // Se guarda el tiempo total que el usuario ha visto el video
    setTotalSeconds(totalSeconds + Math.round(timeElapsed / 1000));
  }

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=pDGEwmnD7dM&list=RDpDGEwmnD7dM&start_radio=1"
        controls
        onProgress={handleProgress} // Se ejecuta cada segundo
        onDuration={handleDuration} // Se ejecuta una sola vez
        onPlay={handlePlay} // Se ejecuta cada vez que se le da play al video
        onPause={handlePause} // Se ejecuta cada vez que se le da pause al video
        onEnded={handlePause} // Se ejecuta cuando el video termina
      />
      <p>Visualizaciones: {viewCount}</p>
    </div>
  );
};

export default VideoPlayer;
