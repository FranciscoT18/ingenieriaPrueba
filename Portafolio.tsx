import "./portafolio.css";

const dataPortafolio = [
  {
    title: "ORDINARIO I 2025 LAS AGUAS",
    img: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png",
    materia: "INGENIERIA DE SOFTWARE(COM350)",
    horario: "19:45 A 21:00 LUNES Y MIERCOLES",
    paralelo: "01",
    aula: "Lab: 1 JOBS",
  },
  {
    title: "ORDINARIO I 2025 SUR",
    img: "https://tr.rbxcdn.com/180DAY-e89ca5593ea8fee773918a75c796172a/420/420/Image/Png/noFilter",
    materia: "Metodologia(COM350)",
    horario: "19:45 A 22:00 LUNES Y MIERCOLES",
    paralelo: "01",
    aula: "Lab: 2 JOBS",
  },
  {
    title: "ORDINARIO I 2025 AURORA",
    img: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/02/20200210-MAZDA-MX-5-1989-PRIMERA-GENERACION-06.jpg",
    materia: "BASE DE DATOS(COM350)",
    horario: "19:45 A 21:00 LUNES Y MIERCOLES",
    paralelo: "01",
    aula: "Lab: 3 JOBS",
  },
  {
    title: "ORDINARIO I 2025 LAS AGUAS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-OIoyMWJMUWMn_Xo_ybeOXZn1wHVdnrc-g&s",
    materia: "Redes y Telecomunicaciones(COM351)",
    horario: "19:45 A 21:00 LUNES Y MARTES",
    paralelo: "01",
    aula: "Lab: 2 JOBS",
  },
  {
    title: "ORDINARIO I 2025 SOPEÑA",
    img: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png",
    materia: "Seguridad de Aplicaciones(COM352)",
    horario: "19:45 A 21:00 LUNES Y SABADO",
    paralelo: "01",
    aula: "Lab: 2 JOBS",
  },
];

export const Portafolio = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <main style={{ flex: 1, padding: "2rem", display:"flex", gap:"20px" }}>
        <section className="section">
          {dataPortafolio.map((item) => (
            <div className="card">
              <div className="portafolio-title border-botton">
                <div className="portafolio-img">
                <img
                  width={100}
                  src={item.img}
                  alt="logo"
                />
              </div>
              <h3 id="title">{item.title}</h3>
            </div>

            <div className="info">
              <div className="border-botton">
                <strong className="color-celeste">Materia</strong>
                <p>{item.materia}</p>
              </div>
              <div className="border-botton">
                <strong className="color-celeste">Horario</strong>
                <p>{item.horario}</p>
              </div>
              <div className="portafolio-info">
                <strong>Paralelo:</strong>
                <p>{item.paralelo}</p>
                <p> - </p>
                <strong>Aula</strong>
                <p>{item.aula}</p>
              </div>
            </div>
          </div>
        ))}
        </section>
      </main>
    </div>
  );
};