import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              {/* <span className="skills__level">Intermediat</span> */}
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Kubernets</h3>
              {/* <span className="skills__level">Intermediat</span> */}
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">Jenkins</h3>
              {/* <span className="skills__level">Intermediat</span> */}
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">AWS</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-badge-check"></i>
            <div>
              <h3 className="skills__name">EC2</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
