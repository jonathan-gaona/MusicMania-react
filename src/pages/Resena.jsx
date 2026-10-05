import React from 'react';
import { Link } from 'react-router-dom';

// Exportamos los datos para poder reutilizarlos en la vista de detalle
export const resenasData = [
  {
    id: 'caso1',
    title: 'Naturaleza Muerta',
    artista: 'Ley 20mil',
    ano: '2011',
    genero: 'Hip-Hop / Boom Bap',
    calificacion: '9.2 / 10',
    description: 'Naturaleza Muerta (2011) es el álbum debut y obra de culto del grupo chileno Ley 20mil (Macrodee y Linterna Veiderr junto a DJ Jotakao). Producido casi en su totalidad por Macrodee bajo Demencia Estudio, el disco consta de 20 tracks con un sonido boom bap oscuro y pesado, abordando temáticas sobre la bohemia, el consumo de cannabis, las vivencias de calle y la realidad urbana santiaguina.',
    criticaCorta: 'Una piedra angular del hip hop subterráneo chileno. Destaca por su producción atmosférica y sombría que retrata la crudeza nocturna de Santiago con líricas crudas pero altamente poéticas.',
    image: 'img/Ley20mil.jpg',
    maxHeight: '290px',
    analisisExtendido: [
      'Naturaleza Muerta es una pieza fundamental dentro del panorama del rap subterráneo chileno. Grabado y producido en Demencia Estudio, el disco captura la esencia más pura del boom bap noventero mediante samplers oscuros, líneas de bajo pesadas y scratches quirúrgicos ejecutados por DJ Jotakao.',
      'A lo largo de sus 20 cortes, Macrodee y Linterna Veiderr construyen una narrativa envolvente sobre las calles de Santiago. Lejos del cliché commercial, sus versos retratan la noche, la bohemia, la marginalidad urbana y la introspección cotidiana con una poética directa y visceral.',
      'En retrospectiva, el álbum ha envejecido con la dignidad de los grandes clásicos del hip-hop latinoamericano. Es un documento sonoro indispensable para comprender la evolución del movimiento independiente en Chile.'
    ]
  },
  {
    id: 'caso2',
    title: 'Rap con R de Revolución',
    artista: 'Portavoz',
    ano: '2014',
    genero: 'Hip-Hop Político / Consciente',
    calificacion: '9.5 / 10',
    description: 'Rap con R de Revolución (2014) es el álbum debut como solista del rapero chileno Portavoz (Andrés Kooper, integrante de Salvaje Decibel). Producido por el propio Portavoz junto a Beatmaker B-Souldier, el disco es un referente del rap político latinoamericano, combinando beats clásicos de boom bap y ritmos andinos con letras de abierta crítica al capitalismo, la lucha de clases, el antifascismo y la reivindicación de los pueblos originarios.',
    criticaCorta: 'Un Manifiesto indispensable del rap social. La habilidad lírica de Portavoz rescata la tradición de protesta combinando sampleos folclóricos y beats contundentes de manera orgánica y contundente.',
    image: 'img/RdeRevolucion.jpg',
    maxHeight: '290px',
    analisisExtendido: [
      'Con Rap con R de Revolución, Portavoz entregó un manifiesto político hecho música. El álbum trasciende las fronteras del rap tradicional al fusionar el esquema clásico del boom bap con vientos andinos, guitarras folclóricas y sampleos de discursos históricos.',
      'Líricamente, Andrés Kooper demuestra un dominio técnico sobresaliente. Su métrica ágil y rima precisa abordan temas de lucha social, el conflicto en el Wallmapu, la memoria histórica chilena y la resistencia popular frente al modelo neoliberal.',
      'El impacto de este trabajo resuena a nivel continental. Es considerado un hito en la música de protesta latinoamericana del siglo XXI, conectando la métrica urbana con la herencia de la Nueva Canción Chilena.'
    ]
  },
  {
    id: 'caso3',
    title: 'El Círculo',
    artista: 'Kase.O',
    ano: '2016',
    genero: 'Hip-Hop / Jazz Rap / Soul',
    calificacion: '9.8 / 10',
    description: 'El Círculo (2016) es el esperado y único álbum de estudio en solitario del legendario rapero español Kase.O (Javier Ibarra, miembro de Violadores del Verso). Grabado entre Zaragoza, Barcelona y Colombia con producción de Gonzalo Lasheras y el propio Kase.O, el disco es una obra maestra introspectiva e íntima donde aborda la depresión, el amor, la espiritualidad y su relación con la música, fusionando el boom bap clásico con elementos de jazz, funk y soul.',
    criticaCorta: 'Una obra cumbre de madurez artística. Kase.O logra desnudarse emocionalmente sin perder la técnica aplastante que lo caracteriza, creando un paisaje sonoro rico, versátil y atemporal.',
    image: 'img/Elcirculo.jpg',
    maxHeight: '280px',
    analisisExtendido: [
      'Tras años de silencio discográfico y tras la cima alcanzada con Violadores del Verso, Javier Ibarra (Kase.O) regresó con "El Círculo", una de las producciones más ambiciosas e íntimas en la historia del hip-hop en español.',
      'El disco no solo destaca por la infalible técnica vocal y métrica de Kase.O, sino por su valentía para abordar temas complejos como los bloqueos creativos, la depresión, la espiritualidad y la madurez personal.',
      'Musicalmente, la producción incorpora arreglos orgánicos de jazz, funk y soul, enriqueciendo el espectro sonoro sin perder la contundencia de la caja y el bombo. Un clásico instantáneo e imprescindible.'
    ]
  },
  {
    id: 'caso4',
    title: "Teatro d'ira: Vol. I",
    artista: 'Måneskin',
    ano: '2021',
    genero: 'Hard Rock / Glam Rock / Punk',
    calificacion: '8.7 / 10',
    description: "Teatro d'ira: Vol. I (2021) es el segundo álbum de estudio de la banda de rock italiana Måneskin. Grabado completamente en vivo en el estudio para capturar una energía cruda y análoga, el disco fusiona el hard rock, el funk rock y el punk, abordando temáticas como la rabia transformadora, la catarsis, la libertad de expresión y el inconformismo. Incluye Zitti e buoni, canción con la que ganaron Eurovisión 2021.",
    criticaCorta: 'Una descarga analógica electrizante que inyecta aire fresco al rock contemporáneo. Destaca por la potencia vocal de Damiano David y una instrumentación en directo que desborda rebeldía e identidad.',
    image: 'img/maneskin.jpg',
    maxHeight: '280px',
    analisisExtendido: [
      "Grabado en directo en el estudio para preservar la máxima autenticidad instrumental, Teatro d'ira: Vol. I devolvió al rock de guitarras el protagonismo en las listas globales de éxitos.",
      "La interpretación vocal de Damiano David desborda teatralidad y rasgado punk, respaldada por la potente sección rítmica de Victoria De Angelis y Ethan Torchio, junto a los riffs incisivos de Thomas Raggi.",
      "Cortes como 'Zitti e buoni' o 'I Wanna Be Your Slave' demuestran que la actitud analógica y la energía de estadio siguen vigentes y listas para conquistar a las nuevas generaciones."
    ]
  },
  {
    id: 'caso5',
    title: 'Off The Wall',
    artista: 'Michael Jackson',
    ano: '1979',
    genero: 'Disco / Pop / Funk / R&B',
    calificacion: '10 / 10',
    description: 'Off the Wall (1979) es el quinto álbum de estudio del cantante estadounidense Michael Jackson y su primer gran éxito comercial bajo el sello Epic Records. Producido por Quincy Jones, el disco marcó la transición de Michael desde su etapa juvenil con The Jackson 5 hacia una sofisticada fusión de disco, funk, pop y baladas R&B.',
    criticaCorta: 'El álbum que redefinió el pop moderno. La sublime producción de Quincy Jones combinada con la interpretación vocal exuberante de Jackson creó el molde perfecto para la música bailable de las décadas posteriores.',
    image: 'img/michaelJackson.webp',
    maxHeight: '280px',
    analisisExtendido: [
      'Off The Wall representa el momento exacto en que Michael Jackson dejó de ser la estrella infantil prodigio para convertirse en el Rey del Pop. Con la colaboración estelar de Quincy Jones en la producción, el disco perfeccionó el sonido disco y funk de finales de los años 70.',
      'Temas legendarios como "Don\'t Stop \'Til You Get Enough" y "Rock with You" destacan por arreglos de metales refinados, líneas de bajo infecciosas y una interpretación vocal llena de brío y libertad.',
      'El álbum sentó las bases estilísticas y técnicas de la música pop moderna, abriendo el camino para el fenómeno global sin precedentes que vendría tres años después con Thriller.'
    ]
  },
  {
    id: 'caso6',
    title: 'The Razors Edge',
    artista: 'AC/DC',
    ano: '1990',
    genero: 'Hard Rock / Heavy Metal',
    calificacion: '9.0 / 10',
    description: 'The Razors Edge (1990) es el decimosegundo álbum de estudio de la banda australiana de hard rock AC/DC. Producido por Bruce Fairbairn, significó un masivo retorno a las listas de éxitos mundiales gracias al estruendoso sonido de riffs inolvidables en sencillos legendarios como "Thunderstruck" y "Moneytalks".',
    criticaCorta: 'Una inyección de adrenalina pura en plena década de los 90. Muestra a Angus Young en su máxima expresión técnica, entregando himnos de estadio cargados de energía, precisión y distorsión clásica.',
    image: 'img/acdc.jpg',
    maxHeight: '280px',
    analisisExtendido: [
      'A comienzos de la década de 1990, AC/DC revitalizó su sonido histórico trabajando junto al afamado productor Bruce Fairbairn. El resultado fue The Razors Edge, un álbum potente que devolvió a la banda a la primera línea del rock mundial.',
      'El inicio con el ya mítico arpegio de guitarra de Angus Young en "Thunderstruck" es una de las introducciones más icónicas en la historia del hard rock, convirtiéndose de inmediato en un himno de estadios.',
      'La voz desgarradora de Brian Johnson junto a la muralla de guitarras rítmicas de Malcolm Young entregan una producción contundente, directa y sin añadidos innecesarios.'
    ]
  },
  {
    id: 'caso7',
    title: 'YHLQMDLG',
    artista: 'Bad Bunny',
    ano: '2020',
    genero: 'Reggaetón / Trap Latino / Synthwave',
    calificacion: '9.1 / 10',
    description: 'YHLQMDLG (acrónimo de "Yo Hago Lo Que Me Da La Gana", 2020) es el segundo álbum de estudio en solitario del puertorriqueño Bad Bunny. Un homenaje a las perreadas de marquesina de los años 2000, el trabajo consolida la estética del reguetón contemporáneo, mezclando trap, synthwave y dancehall.',
    criticaCorta: 'Un fenómeno cultural sin precedentes que revitalizó la música urbana latina. Su versatilidad de estilos y nostalgia bien ejecutada transformaron las reglas de la industria global del pop.',
    image: 'img/badbunny.webp',
    maxHeight: '280px',
    analisisExtendido: [
      'Con YHLQMDLG, Benito Martínez Ocasio rindió homenaje a la época dorada del reguetón boricua mientras experimentaba con sintetizadores ochenteros, indie pop y trap contemporáneo.',
      'El proyecto demostró la capacidad de Bad Bunny para equilibrar canciones festivas e himnos de discoteca ("Safaera", "La Difícil") con piezas melancólicas e introspectivas ("Si Veo A Tu Mamá", "Un Peso").',
      'El éxito masivo del álbum rompió récords históricos en plataformas de streaming a nivel global, consolidando al artista como una de las figuras más influyentes del pop internacional en español.'
    ]
  },
  {
    id: 'caso8',
    title: 'The Dark Side Of The Moon',
    artista: 'Pink Floyd',
    ano: '1973',
    genero: 'Rock Progresivo / Psicodélico',
    calificacion: '10 / 10',
    description: 'The Dark Side of the Moon (1973) es el octavo álbum de estudio de la banda británica de rock progresivo Pink Floyd. Un álbum conceptual monumental que explora temas existenciales como el paso del tiempo, la codicia, el conflicto mental y la muerte, apoyado en innovaciones vanguardistas de grabación y síntesis sonora.',
    criticaCorta: 'Una de las mayores hazañas técnicas y artísticas en la historia de la grabación musical. Su fluidez narrativa y producción impecable continúan fijando el estándar del rock progresivo universal.',
    image: 'img/pinkfloyd.png',
    maxHeight: '280px',
    analisisExtendido: [
      'The Dark Side of the Moon es ampliamente reconocido como una de las cumbres creativas del siglo XX. Un álbum conceptual continuo que aborda las presiones de la vida moderna: el tiempo, el dinero, el aislamiento y la locura.',
      'Bajo la brillante ingeniería de sonido de Alan Parsons en los estudios Abbey Road, Pink Floyd integró sintetizadores VCS3, grabaciones de campo, voces habladas y solos de guitarra inolvidables de David Gilmour.',
      'Pistas como "Time", "Money" o "Us and Them" mantienen una vigencia asombrosa tanto en temática como en calidad audiófila, haciendo de este vinilo una pieza imprescindible para cualquier coleccionista.'
    ]
  }
];

export const Resenas = () => {
  return (
    <main>
      <section className="text-center py-5">
        <h1 className="display-5 fw-bold text-uppercase">Reseñas de Álbumes</h1>
        <p className="lead text-muted">Análisis crítico e historia de los grandes discos de la música.</p>
      </section>

      <section className="bg-dark text-white rounded">
        <div className="container">
          <div className="d-flex flex-column gap-4">
            {resenasData.map((item) => (
              <div key={item.id} className="bg-dark text-white p-4 rounded shadow-sm border border-secondary">
                <div className="row align-items-center g-4">
                  <div className="col-lg-8 d-flex flex-column justify-content-between">
                    <div>
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span className="badge bg-danger">{item.genero}</span>
                        <span className="badge bg-secondary">{item.ano}</span>
                      </div>
                      <h3 className="fw-bold text-uppercase mb-1">{item.title}</h3>
                      <h5 className="text-danger mb-3">{item.artista}</h5>
                      <p className="text-secondary mb-3">{item.description}</p>
                    </div>
                    <div>
                      {/* Botón que redirige a la vista completa de la reseña */}
                      <Link
                        to={`/resena/${item.id}`}
                        className="btn btn-outline-light border-2 fw-bold text-uppercase"
                      >
                        Leer Reseña Crítica Completa <i className="bi bi-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <img
                      src={item.image}
                      className="card-img-top img-fluid rounded shadow"
                      style={{ maxHeight: item.maxHeight, objectFit: 'cover' }}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};