import "./portafolio.css";

export const Portafolio = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <main style={{ flex: 1, padding: "2rem" }}>
        <section className="section">
          <div className="card">
            <div className="portafolio-title border-botton">
              <img
                width={50}
                src="https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
                alt="logo"
              />
              <h3 id="title">ORDINARIO I 2025 LAS AGUAS</h3>
            </div>

            <div className="info">
              <div className="border-botton">
                <strong className="color-celeste">Materia</strong>
                <p>INGENIERIA DE SOFTWARE(COM350)</p>
              </div>
              <div className="border-botton">
                <strong className="color-celeste">Horario</strong>
                <p>19:45 A 21:00 LUNES Y MIERCOLES</p>
              </div>
              <div className="portafolio-info">
                <strong>Paralelo:</strong>
                <p>01</p>
                <p> - </p>
                <strong>Aula</strong>
                <p>Lab: 2 JOBS</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};